<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Mahabharat — Interactive Mahabharata Explorer

An interactive, educational web application built with React + TypeScript and Vite that visualizes the Mahabharata epic.

Key features
 - Router-based pages (Home, Family Tree, Parvas, Kurukshetra, Timeline/Key Moments, Participants)
 - Expandable, premium-styled MindMap for Kurukshetra battlefield interactions
 - Smooth cubic Bézier connectors in the Family Tree visualization
 - Floating UI chatbot named **GANESHA** (frontend UI included). Backend-based memory/LLM integration documented below.

---

## Quickstart (development)

Requirements

- Node.js 16+ (Node 18+ recommended)
- npm (or pnpm/yarn)

1. Install dependencies

```powershell
cd C:\Users\kodag\Downloads\GITHUB\Mahabharat
npm install
```

2. Start the development server (Vite)

```powershell
npm run dev
```

Open the dev URL printed by Vite (for example: http://localhost:5173/).

3. Build for production

```powershell
npm run build
```

4. Preview the production build

```powershell
npm run preview
```

---

## Repository layout

Top-level files

- `App.tsx` — application shell, routing and top-level layout
- `index.tsx`, `index.html` — Vite entry
- `package.json`, `tsconfig.json`, `vite.config.ts` — build and tooling config
- `README.md` — this file

Folders

- `components/` — reusable components (FamilyTree, MindMap, GaneshaChatbot, Header, Section, Timeline, CharacterCard, etc.)
- `pages/` — (if present) routed pages for each top-level view
- `public/` — static assets (images, sounds)
- `utils/` — small helpers (sound, etc.)
- `types.ts` / `constants.ts` — shared app types and constants

---

## Notable components and pages

- `MindMap` (`components/MindMap.tsx`)
  - Recursive, expandable nodes for the Kurukshetra battlefield view.
  - Smooth CSS transitions, premium styling (gradients, glow), and layout that expands within a background panel.

- `FamilyTree` (`components/FamilyTree.tsx`)
  - Visual family tree using SVG paths with cubic Bézier curves for smooth relationship connectors.

- `GaneshaChatbot` (`components/GaneshaChatbot.tsx`)
  - Floating chatbot UI with a toggle button and chat panel. Currently frontend-only; the README contains guidance to connect a real backend for memory/LLM powered replies.

- `Parvas` data (`parvas.ts`) and `ParvasSection`/`ParvasPage`
  - Centralized Parva metadata used by the Parvas page/section.

---

## Development notes & recommendations

- Use TypeScript types defined in `types.ts` for shared shapes.
- When renaming files, update imports across the codebase. On Windows the filesystem is case-insensitive; tests/CI on Linux/macOS may expose case issues.
- Vite provides fast HMR — keep the dev server running while iterating.

Recommended editor settings

- Enable TypeScript/ESLint plugins in VS Code for inline feedback.
- Prettier config (if used) should be followed for consistent formatting.

---

## GANESHA: adding PDF-based memory (overview)

The project ships with a frontend-only GANESHA chat UI. To make GANESHA answer questions using the Complete Mahabharata PDF (or any document corpus), you will need a backend retrieval+LLM pipeline. High-level steps:

1. PDF ingestion
   - Extract text from the PDF using a library (Node: `pdf-parse`/`pdfjs-dist`; Python: `pypdf`/`pdfminer.six`).
   - Clean and split text into chunks (suggested chunk size 500–1000 tokens with some overlap).

2. Embeddings
   - Generate embeddings for each chunk using an embedding model (OpenAI embeddings, Cohere, or an open-source embedder such as `sentence-transformers`).

3. Vector store
   - Store embeddings in a vector database (FAISS, Milvus, Weaviate, Pinecone, Supabase Vector DB, etc.).

4. Retrieval + generation
   - For each user question: embed the query, retrieve top-k similar chunks, then call an LLM with the retrieved context (and the user prompt) to generate a grounded reply.

5. Security & costs
   - Keep API keys server-side. Monitor embedding and LLM call costs.

Example scaffolds I can provide on request

- Node.js + Express + Pinecone + OpenAI (fast to prototype)
- Python + FastAPI + FAISS + sentence-transformers (self-hosted option)

If you want a ready-made example, tell me which stack you prefer and I will generate a backend scaffold (PDF ingestion script, embedding + indexing, and a simple retrieval API the frontend can call).

---

## Testing & CI

- No automated tests were added by default. Recommended additions:
  - Unit tests for pure utilities (Vitest/Jest)
  - Component tests for critical UI (React Testing Library + Vitest)
  - E2E smoke tests (Playwright)

- Add a GitHub Actions workflow to run tests and type checks on pull requests.

---

## Troubleshooting

- Dev server errors: run `npm install` and ensure Node version is compatible.
- TypeScript import or duplicate-declaration errors: run `npm run build` to see full typecheck output and inspect the reported files.
- Git push errors: confirm the remote and branch permissions and that your local repo is up-to-date.

---

## Contributing

- Fork the repo and create feature branches for larger changes.
- Keep PRs small and focused. Include tests for new or changed logic.
- Update `types.ts` when changing shared data shapes.

If you'd like I can add `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, unit tests, or a GitHub Actions CI config — tell me which and I will scaffold them.

---

## License

Add a `LICENSE` file to indicate your chosen license (MIT is common). This repository currently does not contain a license file.

---

If you want, I will also:

- Add a small backend scaffold for PDF ingestion and retrieval (Node or Python).
- Add basic unit tests and a GitHub Actions workflow.
- Add CONTRIBUTING and CODE_OF_CONDUCT templates.

Tell me which of those you'd like next.
