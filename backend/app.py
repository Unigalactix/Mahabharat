import os
import json
from pathlib import Path
from typing import List
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from dotenv import load_dotenv
import openai

load_dotenv()
OPENAI_KEY = os.getenv('OPENAI_API_KEY')
if OPENAI_KEY:
    openai.api_key = OPENAI_KEY

ROOT = Path(__file__).parent
INDEX_PATH = ROOT / 'mah_index.faiss'
META_PATH = ROOT / 'mah_metadata.json'

app = FastAPI(title='GANESHA Memory API')

class QueryIn(BaseModel):
    q: str
    top_k: int = 5

class Passage(BaseModel):
    id: int
    text: str
    score: float

@app.on_event('startup')
def startup():
    global index, meta, embedder
    if not INDEX_PATH.exists() or not META_PATH.exists():
        raise RuntimeError('Index or metadata not found. Run ingest.py first.')
    print('Loading FAISS index...')
    index = faiss.read_index(str(INDEX_PATH))
    with open(META_PATH, 'r', encoding='utf-8') as f:
        meta = json.load(f)
    embedder = SentenceTransformer('all-MiniLM-L6-v2')
    print('Loaded index and embedder.')

@app.post('/query', response_model=List[Passage])
def query(q: QueryIn):
    vec = embedder.encode([q.q], convert_to_numpy=True)
    D, I = index.search(vec, q.top_k)
    D = D[0].tolist()
    I = I[0].tolist()
    res = []
    for idx, score in zip(I, D):
        if idx < 0:
            continue
        item = meta[idx]
        res.append(Passage(id=item['id'], text=item['text'], score=float(score)))
    return res

@app.post('/query_with_gen')
def query_with_gen(q: QueryIn):
    passages = query(q)
    context = "\n\n".join([p.text for p in passages])
    if not OPENAI_KEY:
        return {'context': context, 'passages': passages}
    prompt = f"Use the following context to answer the question.\n\nContext:\n{context}\n\nQuestion: {q.q}\n\nAnswer:" 
    resp = openai.Completion.create(model='text-davinci-003', prompt=prompt, max_tokens=300)
    return {'answer': resp.choices[0].text.strip(), 'passages': passages}
