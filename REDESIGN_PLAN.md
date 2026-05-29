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

## 🟡 Phase 2 — Data: Characters (NEXT)
**File:** `data/characters.ts`
- ~30 holographic character entries with `glyph`, `accent`, `rarity`, `stats`,
  `abilities`, `quote`, `lore`, `keyMoments`.
- Coverage:
  - **Pandavas**: Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva, Draupadi,
    Abhimanyu, Ghatotkacha.
  - **Kauravas & allies**: Duryodhana, Dushasana, Karna, Shakuni, Jayadratha,
    Ashwatthama.
  - **Elders**: Bhishma, Drona, Kripacharya, Vidura, Dhritarashtra, Gandhari,
    Kunti, Pandu.
  - **Divine**: Krishna (mythic), Balarama, Vyasa, Subhadra.
  - **Panchala/Matsya**: Drupada, Dhrishtadyumna, Shikhandi, Virata, Uttara,
    Satyaki.
- ✅ Commit: `data: add character codex (Phase 2)`

## ⬜ Phase 3 — Data: Parvas
**File:** `data/parvas.ts`
- All **18 Parvas** with `number`, `sanskrit`, `meaning`, `summary`,
  `keyEvents[]`, `accent`.
- ✅ Commit: `data: add 18 parvas (Phase 3)`

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
| Phase | Title | Status |
|------:|-------|--------|
| 0 | Discovery & Cleanup | ✅ done |
| 1 | Foundation (index.html, types.ts) | ✅ done |
| 2 | Data: Characters | 🟡 next |
| 3 | Data: Parvas | ⬜ |
| 4 | Data: Episodes | ⬜ |
| 5 | Data: Houses | ⬜ |
| 6 | Data: Kshetras + Lineage + Gita + Kurukshetra days | ⬜ |
| 7 | Shared components | ⬜ |
| 8 | Pages I — Home / Characters / Parvas | ⬜ |
| 9 | Pages II — Episodes / Vanavasa / Agnatavasa | ⬜ |
| 10 | Pages III — Krishna / Vishwarupa / Kurukshetra / Gita | ⬜ |
| 11 | Pages IV — Houses / Family Tree / Kshetras | ⬜ |
| 12 | App.tsx wiring + build polish | ⬜ |
| 13 | Deploy | ⬜ |
