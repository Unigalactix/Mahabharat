GANESHA Memory Backend (PDF → embeddings → FAISS)

This scaffold provides a minimal local backend to build a memory index from a PDF (the Complete Mahabharata) and expose a retrieval endpoint for the frontend chatbot.

Requirements

- Python 3.9+
- Install dependencies: `pip install -r requirements.txt`

Files

- `ingest.py` — download (or read) the PDF, extract text, chunk it, compute embeddings, and build a FAISS index. Produces `mah_index.faiss` and `mah_metadata.json`.
- `app.py` — FastAPI app that loads the FAISS index and metadata at startup and exposes `/query` to retrieve top-k passages for a user query. If `OPENAI_API_KEY` is set, the `/query_with_gen` endpoint will also ask OpenAI to generate a final answer using retrieved context.
- `.env.example` — example environment variables file.

Quick run

1. Create and activate a virtualenv (recommended)

```powershell
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

2. Ingest the PDF (replace the PDF path or URL inside `ingest.py` if needed):

```powershell
python ingest.py
```

3. Run the API server

```powershell
uvicorn app:app --reload --port 8001
```

Then call `POST /query` with JSON `{ "q": "Your question" }` to get nearest passages.

Notes

- This is a minimal scaffold intended for local testing and development. For production use, pick a scalable vector store (Pinecone, Weaviate, Supabase) and secure API keys.
