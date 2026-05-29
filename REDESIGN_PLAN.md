# Mahabharata Codex — Redesign Plan

A phased rebuild inspired by the [Ramayana Codex](https://unigalactix.github.io/RAMAYANA/).
Each phase is **small, self-contained, and committable**. We complete one phase per
session, then wait for confirmation before starting the next. All commits & pushes
are authored as **Unigalactix**.

Author identity for git:
```
git -c user.name="Unigalactix" -c user.email="unigalactix@users.noreply.github.com" commit ...
git -c user.name="Unigalactix" -c user.email="unigalactix@users.noreply.github.com" push ...
```

Design tokens (already in `index.html`):
- **Palette**: ink `#08060F`, royal `#15101F`, gold `#D4AF37`, goldlight `#F5D061`,
  saffron `#FF8C42`, crimson `#B91C1C`, peacock `#0E7C7B`, lotus `#E879F9`,
  parchment `#F5E8C9`.
- **Fonts**: Cinzel Decorative (display), Cinzel (headings), Cormorant Garamond
  (quotes), Tiro Devanagari Sanskrit (shlokas), Inter (body).
- **Card system**: `.tc`, `.tc-frame`, `.tc-inner`, `.tc-portrait`, `.tc-glyph`,
  rarity badges (mythic / legendary / epic / rare).
- **Sections**: `.glass`, `.glass-hover`, `.parva-tile`, `.codex-card`,
  `.battle-grid`, `.vishwarupa-stage`, `.shloka-card`, `.ft-tree`.

---

## ✅ Phase 0 — Discovery & Cleanup (DONE)
- Studied the live Ramayana Codex and its source.
- Deleted legacy `pages/`, `components/`, `App.tsx`, `constants.ts`, `parvas.ts`,
  `types.ts`, `index.html`.
- Recreated empty `pages/` and `components/` directories.

## ✅ Phase 1 — Foundation (DONE)
- `index.html` — full design system (Tailwind config, palette, fonts, card CSS,
  glass panels, vishwarupa stage, shloka card, navigation pill).
- `types.ts` — `Character`, `Parva`, `House`, `Episode`, `Shloka`, `Kshetra`,
  `FamilyTreeNode`, `ThemeBlock`, `StatBlock`, `KurukshetraDay`.

---

## ✅ Phase 2 — Data: Characters (DONE)
**File:** [`data/characters.ts`](data/characters.ts) — 30 holographic entries.
- Krishna (mythic), Arjuna, Yudhishthira, Bhima, Nakula, Sahadeva, Draupadi,
  Abhimanyu, Ghatotkacha.
- Duryodhana, Karna, Dushasana, Shakuni, Jayadratha, Ashwatthama.
- Bhishma, Drona, Kripa, Vidura, Dhritarashtra, Gandhari, Kunti, Pandu.
- Balarama, Subhadra, Vyasa.
- Satyaki, Dhrishtadyumna, Shikhandi, Drupada, Virata.
- Placeholder `App.tsx` added so the build stays green.
- ✅ Commit `0618a29` — *feat(codex): Phase 1-2 — devotional foundation + character codex data*

## 🟡 Phase 3 — Data: Parvas (DONE)
**File:** [`data/parvas.ts`](data/parvas.ts)
- All **18 Maha-Parvas** — Adi, Sabha, Vana, Virata, Udyoga, Bhishma, Drona,
  Karna, Shalya, Sauptika, Stri, Shanti, Anushasana, Ashvamedhika,
  Ashramavasika, Mausala, Mahaprasthanika, Svargarohana.
- Each with `number`, `sanskrit`, `meaning`, `summary`, `keyEvents[]`, `accent`.
- ✅ Commit: `data: add 18 parvas (Phase 3)`

## 🟢 Phase 4 — Data: Episodes (DONE)
**File:** [`data/episodes.ts`](data/episodes.ts)
- **22 defining episodes** from Krishna's birth in Mathura to Yudhishthira's
  ascent. Includes Govardhan, Kaliya, Kamsa, Sudarshana, Khandava, Draupadi's
  swayamvara, Rajasuya & Shishupala, dice game, vastraharan, vanavasa,
  agnatavasa, peace embassy, Vishvarupa, Bhishma’s shar-shayya, Abhimanyu &
  Chakravyuha, Jayadratha vadha, Karna vadha, Duryodhana’s thigh, sauptika
  night, Parikshit rescue, and the great departure.
- ✅ Commit: `data: add Mahabharata episodes (Phase 4)`

## 🟢 Phase 5 — Data: Houses (DONE)
**File:** [`data/houses.ts`](data/houses.ts)
- **23 noble houses** of the epic with capital, region, side at Kurukshetra,
  patriarch, notable members, banner, accent, description and legacy.
- Coverage: Kuru, Panchala, Matsya, Yadava/Vrishni, Magadha, Sindhu, Gandhara,
  Kashi, Kekaya, Madra, Chedi, Anga, Vidarbha, Pragjyotisha, Pandya, Kalinga,
  Trigarta, Nishadha, Kunti-Bhoja, Avanti, Manipura, Salwa, Naga.
- ✅ Commit: `data: add noble houses (Phase 5)`

## 🟢 Phase 6 — Data: Kshetras + Lineage + Gita + Kurukshetra (DONE)
**Files:** [`data/kshetras.ts`](data/kshetras.ts) · [`data/lineage.ts`](data/lineage.ts) · [`data/gita.ts`](data/gita.ts) · [`data/kurukshetra.ts`](data/kurukshetra.ts)
- **kshetras.ts** — 12 sacred sites: Kurukshetra, Hastinapura, Indraprastha,
  Mathura, Vrindavan, Dwaraka, Prabhasa, Naimisharanya, Gandhamadana,
  Khandavaprastha, Upaplavya, Badarikashrama.
- **lineage.ts** — Chandravansha tree from Soma → Yayati → Puru / Yadu →
  Bharata → Kuru → Shantanu → Pandavas + Kauravas → Upapandavas + Abhimanyu →
  Parikshit → Janamejaya.
- **gita.ts** — 12 defining shlokas including 1.1, 2.7, 2.20, 2.47, 2.48, 2.55,
  4.7-8, 6.5, 9.22, 11.32 (Vishvarupa), 11.55, 18.66 (charama).
- **kurukshetra.ts** — all 18 days with Kaurava commander, defining moment,
  named fallen warriors.
- ✅ Commit: `data: add kshetras, lineage, gita, kurukshetra days (Phase 6)`

## 🟢 Phase 7 — Shared components (DONE)
**Files:** [`components/Navigation.tsx`](components/Navigation.tsx) · [`components/Hero.tsx`](components/Hero.tsx) · [`components/SectionTitle.tsx`](components/SectionTitle.tsx) · [`components/CharacterCard.tsx`](components/CharacterCard.tsx) · [`components/CharacterModal.tsx`](components/CharacterModal.tsx) · [`components/ParvaTile.tsx`](components/ParvaTile.tsx) · [`components/ParvaModal.tsx`](components/ParvaModal.tsx) · [`components/Footer.tsx`](components/Footer.tsx)
- All 8 presentational components built on the [`index.html`](index.html)
  design system.
- `Navigation` uses react-router `NavLink` with 10 routes; `Hero` & modals
  composable; `CharacterCard` is the flippable trading card.
- Components compile clean but are tree-shaken until Phase 8 imports them.
- ✅ Commit: `feat: shared devotional components (Phase 7)`

## 🟢 Phase 8 — Pages I: Home / Characters / Parvas (DONE)
**Files:** [`pages/HomePage.tsx`](pages/HomePage.tsx) · [`pages/CharactersPage.tsx`](pages/CharactersPage.tsx) · [`pages/ParvasPage.tsx`](pages/ParvasPage.tsx)
- HomePage: hero, four dharma themes (Dharma/Karma/Bhakti/Moksha), stats
  strip, count chips, six featured characters, five featured parvas, four
  devotional CTA panels (Krishna/Kurukshetra/Gita/Houses), closing
  charama-shloka 18.66.
- CharactersPage: filter pills (All / Pandavas / Kauravas / Divine / Elders /
  Allies) over all 30 flippable CharacterCards with CharacterModal wired.
- ParvasPage: 3-column responsive grid of all 18 ParvaTiles with ParvaModal.
- ✅ Commit: `feat(pages): Home, Characters, Parvas (Phase 8)`

## 🟢 Phase 9 — Pages II: Episodes / Vanavasa / Agnatavasa (DONE)
**Files:** [`pages/EpisodesPage.tsx`](pages/EpisodesPage.tsx) · [`pages/VanavasaPage.tsx`](pages/VanavasaPage.tsx) · [`pages/AgnatavasaPage.tsx`](pages/AgnatavasaPage.tsx)
- EpisodesPage: vertical timeline of all 22 episodes from Krishna-janma to
  mahāprasthāna, with six phase-filters (All / Krishna’s Līlā / Pre-War /
  Exile / The 18 Days / Post-War) and accent-coloured glyph markers.
- VanavasaPage: hero panel from EPISODES + nine curated forest stories
  (Akṣaya Pātra, Pāśupata-astra, Indraloka, Saugandhika & Hanumān,
  Ghoṣa-Yātrā, Jayadratha, Karṇa’s kavaca, Yakṣa-Praśna, Purāṇa-kathās) +
  Vana Parva keyEvents.
- AgnatavasaPage: hero + six disguises (Kaṅka, Vallabha, Bṛhannalā,
  Granthika, Tantipāla, Sairandhrī) + four closing events (Kīcaka-vadha,
  Goharaṇa, the Revelation, Uttarā–Abhimanyu) + Virāṭa Parva keyEvents.
- ✅ Commit: `feat(pages): Episodes, Vanavasa, Agnatavasa (Phase 9)`

## 🟢 Phase 10 — Pages III: Krishna / Vishwarupa / Kurukshetra / Gita (DONE)
**Files:** [`pages/KrishnaPage.tsx`](pages/KrishnaPage.tsx) · [`pages/VishwarupaPage.tsx`](pages/VishwarupaPage.tsx) · [`pages/KurukshetraPage.tsx`](pages/KurukshetraPage.tsx) · [`pages/GitaPage.tsx`](pages/GitaPage.tsx)
- KrishnaPage: Hero, identity card from CHARACTERS.krishna, eight nāmas, the
  avatāra-purpose (Gītā 4.7–8) as four glyph-cards, ten Krishna
  episodes from EPISODES, CTAs to Vishwarupa & Gitā.
- VishwarupaPage: full `.vishwarupa-stage` darshan with rotating rays, halo,
  and aum; four glimpses of the limitless; Gītā 11.32 (kālo'smi) and 11.55
  shloka cards.
- KurukshetraPage: Hero + pill day-picker for all 18 days + active-day panel
  with commander/highlight/fallen + full chronicle list. Commander accents:
  Bhishma gold, Drona saffron, Karna crimson, Shalya peacock, Ashwatthama
  lotus.
- GitaPage: opening invocation + seven thematic filters (All / Arjuna /
  Ātman / Karma / Bhakti / Vishwarupa / Śaranāgati) over all 12 shlokas
  rendered with `.shloka-card`.
- ✅ Commit: `feat(pages): Krishna, Vishwarupa, Kurukshetra, Gita (Phase 10)`

## 🟢 Phase 11 — Pages IV: Houses / Family Tree / Kshetras (DONE)
**Files:** [`pages/HousesPage.tsx`](pages/HousesPage.tsx) · [`pages/FamilyTreePage.tsx`](pages/FamilyTreePage.tsx) · [`pages/KshetrasPage.tsx`](pages/KshetrasPage.tsx)
- HousesPage: side-accented codex cards over all 23 houses, with 7
  filter pills (All / Pāṇḍava / Allied-Pāṇḍava / Kaurava /
  Allied-Kaurava / Neutral / Divine) and a full HouseModal showing
  capital, region, patriarch, notable members, description, and legacy.
- FamilyTreePage: recursive Chandravansha render using `.ft-tree`,
  `.ft-row`, `.ft-node`, `.ft-name`, `.ft-spouse`, `.ft-connector` from
  index.html; horizontally scrollable on small screens; with legend.
- KshetrasPage: codex-card grid of all 12 sacred sites with story +
  significance + accent-glyph.
- ✅ Commit: `feat(pages): Houses, Family Tree, Kshetras (Phase 11)`

## ⬜ Phase 12 — App.tsx wiring + build polish (NEXT)
**Files:** `App.tsx`, `pages/*` index re-exports, cleanup of obsolete files
- Wire `BrowserRouter` with `basename="/Mahabharat"`; mount Navigation
  + Footer wrapper around `<Routes>` of all 12 pages.
- Replace the placeholder App.tsx with the real router shell.
- Remove obsolete files: `utils/sound.ts`, `public/sounds/*`,
  `public/fonts/Storm Gust.ttf`, `backend/` (if unused), and any leftover
  `constants.ts` / `parvas.ts` at the repo root.
- Final build verification; live deploy should pick up the change.
- ✅ Commit: `feat(app): wire router + cleanup (Phase 12)`

## ⬜ Phase 4 — Data: Episodes (Krishna lila, Vanavasa, Agnatavasa, Bhishma vow…)
**File:** `data/episodes.ts`
- 18–24 episodes spanning: Krishna's birth & lila, Govardhan, Sudarshan, the
  Rajasuya, the dice game, Draupadi's vastraharan, the 12-year **Vanavasa**, the
  1-year **Agnatavasa** in Matsya, the failed peace embassy, Vishwarupa, Bhishma
  Pratigya, Abhimanyu & the Chakravyuha, Karna vs Arjuna, the night of
  Ashwatthama, Parikshit's rescue, Yudhishthira's ascent.
- ✅ Commit: `data: add Mahabharata episodes (Phase 4)`

## ⬜ Phase 5 — Data: Noble Houses
**File:** `data/houses.ts`
- All houses including small but important ones: Kuru, Panchala, Matsya, Yadava
  (Vrishni), Magadha, Sindhu, Gandhara, Kashi, Kekaya, Madra, Chedi, Anga,
  Vidarbha, Pragjyotisha, Pandya, Kalinga, Trigarta, Nishadha, Kunti-Bhoja,
  Salwa, Avanti, Manipura, Naga (Uloopi).
- ✅ Commit: `data: add noble houses (Phase 5)`

## ⬜ Phase 6 — Data: Kshetras + Family Tree + Gita Shlokas + Kurukshetra Days
**Files:** `data/kshetras.ts`, `data/lineage.ts`, `data/gita.ts`, `data/kurukshetra.ts`
- **Kshetras**: Kurukshetra, Hastinapura, Indraprastha, Dwaraka, Mathura,
  Vrindavan, Jyotisar, Somnath, Prabhasa.
- **Lineage**: Chandravansha tree from Brahma → Soma → Yayati → Puru → Kuru →
  Shantanu → Pandavas/Kauravas → Parikshit.
- **Gita**: ~10 hand-picked shlokas (2.47, 2.20, 4.7-8, 6.5, 9.22, 11.32, 18.66
  + Vishwarupa verses).
- **Kurukshetra Days**: 18-day timeline.
- ✅ Commit: `data: add kshetras, lineage, gita, kurukshetra (Phase 6)`

---

## ⬜ Phase 7 — Shared Components
- `components/Navigation.tsx` — sticky pill nav.
- `components/Hero.tsx` — Cinzel Decorative title, chakra SVG, devotional shloka.
- `components/SectionTitle.tsx`.
- `components/CharacterCard.tsx` + `components/CharacterModal.tsx`.
- `components/ParvaTile.tsx` + `components/ParvaModal.tsx`.
- `components/Footer.tsx` — Jaya invocation.
- ✅ Commit: `feat: shared codex components (Phase 7)`

## ⬜ Phase 8 — Pages I (Devotional core)
- `pages/HomePage.tsx` — hero, Mangala-charanam invocation, stats, pantheon
  preview, parva preview, CTAs.
- `pages/CharactersPage.tsx` — full holographic pantheon grid.
- `pages/ParvasPage.tsx` — 18 numbered tiles.
- ✅ Commit: `feat: home + characters + parvas pages (Phase 8)`

## ⬜ Phase 9 — Pages II (Story arcs)
- `pages/EpisodesPage.tsx` — episode codex grid.
- `pages/VanavasaPage.tsx` — 12-year forest exile timeline + key encounters
  (Yaksha Prashna, Hidimba, Bakasura, Jayadratha's abduction).
- `pages/AgnatavasaPage.tsx` — Matsya disguises (Kanka, Vallabha, Brihannala,
  Granthika, Tantipala, Sairandhri), Kichaka, Virata war.
- ✅ Commit: `feat: episodes + vanavasa + agnatavasa pages (Phase 9)`

## ⬜ Phase 10 — Pages III (Krishna & War)
- `pages/KrishnaPage.tsx` — birth, lila, Govardhan, Sudarshan, friendship with
  Arjuna, peace embassy, Sarathya (charioteer).
- `pages/VishwarupaPage.tsx` — full-screen Vishwarupa stage with conic rays,
  Aum glyph, Gita 11 verses, Arjuna's awe & surrender.
- `pages/KurukshetraPage.tsx` — battle-grid (Pandavas vs Kauravas), 18-day
  timeline, commanders, day highlights.
- `pages/GitaPage.tsx` — shloka cards with Sanskrit + transliteration +
  translation + meaning.
- ✅ Commit: `feat: krishna + vishwarupa + kurukshetra + gita pages (Phase 10)`

## ⬜ Phase 11 — Pages IV (Geography & Lineage)
- `pages/HousesPage.tsx` — every noble house as a codex card with banner,
  capital, patriarch, notable members, alignment, legacy.
- `pages/FamilyTreePage.tsx` — Chandravansha tree using `.ft-node` blocks.
- `pages/KshetrasPage.tsx` — sacred geography map.
- ✅ Commit: `feat: houses + family tree + kshetras pages (Phase 11)`

## ⬜ Phase 12 — Composition & Polish
- `App.tsx` — router with all routes; replace landing/menu/chatbot.
- `index.tsx` — unchanged.
- Remove obsolete `utils/sound.ts` references if any.
- Update `vite.config.ts` `base` if needed (already `/Mahabharat/`).
- Update `README.md` to "Mahabharata Codex".
- Build verify: `npm run build`.
- ✅ Commit: `feat: wire router and polish (Phase 12)`

## ⬜ Phase 13 — Deploy
- Push `main` (triggers GitHub Pages workflow).
- ✅ Commit message: `release: Mahabharata Codex devotional redesign`.

---

## Working agreement
1. Agent completes **exactly one phase** per session.
2. Agent commits & pushes as **Unigalactix** at the end of each phase.
3. Agent stops and waits for user confirmation before starting the next phase.
4. No new markdown docs unless requested.
5. No phase mixes data + components + pages.

## Status board
| Phase | Title | Status | Commit |
|------:|-------|--------|--------|
| 0 | Discovery & Cleanup | ✅ done | — |
| 1 | Foundation (index.html, types.ts) | ✅ done | `0618a29` |
| 2 | Data: Characters | ✅ done | `0618a29` |
| 3 | Data: Parvas | ✅ done | `46234e7` |
| 4 | Data: Episodes | ✅ done | `7cc9f57` |
| 5 | Data: Houses | ✅ done | `b047373` |
| 6 | Data: Kshetras + Lineage + Gita + Kurukshetra days | ✅ done | `676fc8f` |
| 7 | Shared components | ✅ done | `d5b3ecd` |
| 8 | Pages I — Home / Characters / Parvas | ✅ done | `9c31e84` |
| 9 | Pages II — Episodes / Vanavasa / Agnatavasa | ✅ done | `a354930` |
| 10 | Pages III — Krishna / Vishwarupa / Kurukshetra / Gita | ✅ done | `f85c748` |
| 11 | Pages IV — Houses / Family Tree / Kshetras | ✅ done | _this commit_ |
| 12 | App.tsx wiring + build polish | 🟡 next | — |
| 13 | Deploy | ⬜ | — |

## Session log
- **2026-05-29** — Phases 0, 1, 2 completed in one session. Pushed as `0618a29`. Build verified (1.14s, 229 KB JS / 24 KB HTML).
- **2026-05-29** — Phase 3 (18 Parvas) completed. Pushed as `46234e7`.
- **2026-05-29** — Phase 4 (22 Episodes) completed. Also fixed deploy.yml: switched from `peaceiris/actions-gh-pages` (which needs gh-pages branch write) to the official `actions/deploy-pages@v4` using the GitHub Pages environment. Repo Settings → Pages source must be set to **GitHub Actions**.
- **2026-05-29** — Phase 5 (23 noble Houses) completed. Pushed as `b047373`.
- **2026-05-29** — Phase 6 (Kshetras 12 · Lineage tree · Gita 12 shlokas · 18 Kurukshetra days) completed. Data layer of the epic is now complete.
- **2026-05-29** — Phase 7 (8 shared components: Navigation, Hero, SectionTitle, CharacterCard, CharacterModal, ParvaTile, ParvaModal, Footer) completed. Live site `https://unigalactix.github.io/Mahabharat/` confirmed serving the placeholder — deploy pipeline healthy.
- **2026-05-29** — Phase 8 (HomePage, CharactersPage, ParvasPage) completed. Pages compile clean but are still tree-shaken until App.tsx wires the router in Phase 12.
- **2026-05-29** — Phase 9 (EpisodesPage with 6 phase-filters, VanavasaPage with 9 curated forest highlights + Vana Parva keyEvents, AgnatavasaPage with 6 disguises + 4 closing events + Virata Parva keyEvents) completed. All pages compile clean.
- **2026-05-29** — Phase 10 (KrishnaPage with 8 names + avatāra purpose + 10 episodes, VishwarupaPage with the `.vishwarupa-stage` darshan + Gītā 11.32 & 11.55 cards, KurukshetraPage with all 18 days driven by KURUKSHETRA_DAYS + commander-pill picker, GitaPage with 7 thematic filters over all 12 shlokas) completed. Build clean.
- **2026-05-29** — Phase 11 (HousesPage with 7 side-filters + house modal, FamilyTreePage with recursive CHANDRAVANSHA using `.ft-*` classes, KshetrasPage with all 12 sacred sites) completed. All twelve user-facing pages now exist; only Phase 12 (router wiring + cleanup) remains before the rebuild is live.
