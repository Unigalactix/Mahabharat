import os
import json
import math
import requests
from pathlib import Path
from pypdf import PdfReader
from sentence_transformers import SentenceTransformer
import numpy as np
import faiss
from tqdm import tqdm

PDF_URL = 'https://ia803400.us.archive.org/7/items/the-complete-mahabharata/The%20Complete%20Mahabharata%20.pdf'
OUT_DIR = Path(__file__).parent
PDF_PATH = OUT_DIR / 'The_Complete_Mahabharata.pdf'
INDEX_PATH = OUT_DIR / 'mah_index.faiss'
META_PATH = OUT_DIR / 'mah_metadata.json'

def download_pdf(url: str, dest: Path):
    if dest.exists():
        print('PDF already exists at', dest)
        return
    print('Downloading PDF...')
    r = requests.get(url, stream=True)
    r.raise_for_status()
    with open(dest, 'wb') as f:
        for chunk in r.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)
    print('Downloaded to', dest)

def extract_text(pdf_path: Path) -> str:
    print('Extracting text from PDF...')
    reader = PdfReader(str(pdf_path))
    parts = []
    for p in tqdm(reader.pages, desc='Pages'):
        try:
            txt = p.extract_text() or ''
        except Exception:
            txt = ''
        parts.append(txt)
    return '\n'.join(parts)

def chunk_text(text: str, max_tokens=800, overlap=100):
    # naive chunking by words — tokens roughly approximated
    words = text.split()
    chunks = []
    i = 0
    while i < len(words):
        j = min(i + max_tokens, len(words))
        chunk = ' '.join(words[i:j])
        chunks.append(chunk)
        i = j - overlap
    return chunks

def build_index(chunks, model_name='all-MiniLM-L6-v2'):
    print('Loading embedding model:', model_name)
    model = SentenceTransformer(model_name)
    print('Embedding', len(chunks), 'chunks...')
    embeddings = model.encode(chunks, show_progress_bar=True, convert_to_numpy=True)
    dim = embeddings.shape[1]
    index = faiss.IndexFlatL2(dim)
    index.add(embeddings)
    faiss.write_index(index, str(INDEX_PATH))
    print('Saved FAISS index to', INDEX_PATH)
    # save metadata
    meta = [{'id': i, 'text': chunks[i][:2000]} for i in range(len(chunks))]
    with open(META_PATH, 'w', encoding='utf-8') as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)
    print('Saved metadata to', META_PATH)

def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    download_pdf(PDF_URL, PDF_PATH)
    text = extract_text(PDF_PATH)
    print('Text length (chars):', len(text))
    chunks = chunk_text(text, max_tokens=800, overlap=100)
    print('Created', len(chunks), 'chunks')
    build_index(chunks)

if __name__ == '__main__':
    main()
