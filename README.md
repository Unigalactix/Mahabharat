# महाभारत · Mahābhārata Codex

> *यतो धर्मस्ततो जयः* — *Where there is dharma, there is victory.*

A premium, devotional interactive infographic to Vyāsa's eternal epic — built with React + TypeScript + Vite and deployed to GitHub Pages.

**Live site:** <https://unigalactix.github.io/Mahabharat/>

---

## What's inside

Thirteen routed pages covering the full sweep of the epic:

| Route | Page | What it holds |
|-------|------|---------------|
| `/`              | Home          | Devotional landing with themes, stats, featured cards, closing *charama-shloka* (Gītā 18.66) |
| `/characters`    | Characters    | 30 flippable trading cards across six filters (Pāṇḍava / Kaurava / Divine / Elder / Ally) |
| `/parvas`        | Parvas        | All 18 Mahā-Parvas with full modal narratives |
| `/episodes`      | Episodes      | 22-event timeline with six phase filters (Krishna's līlā, Exile, the 18 Days, etc.) |
| `/vanavasa`      | Vanavāsa      | The 12-year forest exile — Akṣaya Pātra, Pāśupata, Yakṣa-Praśna, sage-tales |
| `/agnatavasa`    | Agnātavāsa    | The year of hidden disguise in Virāṭa — six aliases, Kīcaka, the Revelation |
| `/krishna`       | Krishna       | The Yādava — eight nāmas, avatāra-purpose (Gītā 4.7–8), ten defining episodes |
| `/vishwarupa`    | Vishwarūpa    | Chapter 11 *darśana* — animated radial stage, Gītā 11.32 (*kālo'smi*) and 11.55 |
| `/kurukshetra`   | Kurukshetra   | All 18 days of war with day-picker, commanders, and fallen |
| `/gita`          | Bhagavad Gītā | 12 defining shlokas with seven thematic filters |
| `/houses`        | Houses        | 23 noble houses with seven side filters and full modal chronicles |
| `/family-tree`   | Lineage       | Recursive Chandravaṁśa from Soma to Parīkṣit |
| `/kshetras`      | Kshetras      | 12 sacred sites — Kurukṣetra, Mathurā, Vṛndāvana, Dvārakā, Naimiṣāraṇya… |

---

## Quickstart

```powershell
npm install
npm run dev      # http://localhost:5173/
npm run build    # production bundle in dist/
npm run preview  # serve the production bundle locally
```

Requirements: Node 18+.

---

## Architecture

```
data/         # All epic data — types-checked, single source of truth
  characters.ts    parvas.ts        episodes.ts
  houses.ts        kshetras.ts      gita.ts
  kurukshetra.ts   lineage.ts
components/   # Shared presentational components
  Navigation Hero SectionTitle Footer
  CharacterCard CharacterModal ParvaTile ParvaModal
pages/        # One file per route (13 total)
App.tsx       # Router shell — Navigation + <Routes> + Footer
index.tsx     # HashRouter entry (GitHub Pages friendly)
index.html    # Tailwind via CDN + premium devotional CSS system
types.ts      # All shared types
```

The design system (palette, fonts, animated `.vishwarupa-stage`, `.shloka-card`, `.ft-tree`, `.codex-card`, etc.) lives entirely in [index.html](index.html).

### Routing

`HashRouter` is used so that GitHub Pages deep-links (`/Mahabharat/#/characters`) survive a hard refresh without a server-side SPA fallback.

### Deploy

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds on push to `main` and publishes to the GitHub Pages environment using `actions/deploy-pages@v4`. Repo Settings → Pages source must be set to **GitHub Actions**.

---

## Credits

Built and maintained by [**Unigalactix**](https://github.com/Unigalactix). The text is the author's retelling; the design is original; the source — the Mahābhārata of Kṛṣṇa-Dvaipāyana Vyāsa — belongs to no one and to everyone.

> *सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।*<br>
> *सर्वे भद्राणि पश्यन्तु। मा कश्चिद् दुःखभाग्भवेत्॥*
