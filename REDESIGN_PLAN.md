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

## 🟢 Phase 12 — App.tsx wiring + build polish (DONE)
**Files:** [`App.tsx`](App.tsx) · [`index.tsx`](index.tsx) · [`components/Navigation.tsx`](components/Navigation.tsx) · [`README.md`](README.md)
- App.tsx: mounts `Navigation` + `<Routes>` of all 13 pages + `Footer` in a flex-column shell; unknown paths redirect to `/`.
- index.tsx: wraps with `HashRouter` — chosen over `BrowserRouter` so
  GitHub Pages deep-links (e.g. `/Mahabharat/#/characters`) survive a hard
  refresh without a server-side SPA fallback.
- Navigation extended to 13 items: added Vanavāsa, Agnātavāsa, Vishvarūpa.
- Cleanup: removed `utils/sound.ts`, `backend/`, `public/sounds/`,
  `public/fonts/`, `public/_redirects` (Netlify-only).
- README rewritten to reflect the new structure.
- Bundle: 410 KB JS / 129 KB gzipped (react-router added). Live deploy
  will pick this up automatically on push.
- ✅ Commit: `feat(app): wire router + cleanup (Phase 12)`

## 🟢 Phase 13 — Deploy verification (DONE — the rebuild is LIVE)
- GitHub Actions run for `637b794` succeeded in 35s
  (`actions/deploy-pages@v4`).
- `https://unigalactix.github.io/Mahabharat/` now serves the production
  bundle `assets/index-CnQhDEW8.js` (401 KB / 130 KB gzipped) — the exact
  build hash from Phase 12. The `जय` placeholder is gone.
- All 13 routes are present in the deployed bundle (verified 42 path
  references). Deep-link `/#/characters` returns HTTP 200, confirming
  HashRouter behavior across hard refreshes.
- ✅ The Mahabharata Codex rebuild is complete and live for the world.

---

## 🙏 Project Complete

13 phases. 13 pages. 30 characters, 18 parvas, 22 episodes, 23 noble
houses, 12 sacred kshetras, 12 Gītā shlokas, an 18-day Kurukshetra
timeline, and the Chandravansha lineage tree — all rendered as a
devotional codex inspired by the Ramayana Codex, authored end-to-end
as **Unigalactix**.

> *सर्वे भवन्तु सुखिनः । सर्वे सन्तु निरामयाः ।*
>
> *सर्वे भद्राणि पश्यन्तु मा कश्चिद् दुःखभाग् भवेत् ।*
>
> May all be happy. May all be free from illness.
> May all see auspiciousness. May none suffer.

## ✅ Phase 14 — Ādi Parva backstories
**New file:** `data/backstories.ts` · **New page:** `pages/BackstoriesPage.tsx` · **Route:** `/backstories`
The lineage stories that set the stage *before* the dice game. Each card has
sanskrit title, glyph, accent, a 2-paragraph telling, and a "why it matters"
note that links forward into the main story.
- **Śāntanu & Gaṅgā** — the river-bride who drowns seven sons; the eighth becomes Devavrata.
- **Bhīṣma-Pratijñā** — Devavrata's terrible vow of celibacy for his father's love of Satyavatī.
- **Satyavatī & Parāśara** — the fisherwoman who would bear Vyāsa on an island in the Yamunā.
- **Ambā · Ambikā · Ambālikā** — Bhīṣma's abduction, Ambā's curse, the Niyoga of Vyāsa.
- **Pāṇḍu's curse** — the deer in coitus, the king who must not love his queens.
- **Karṇa-janma** — Kuntī's mantra, the Sun-god, the basket on the Aśva river.
- **Drona & Drupada** — the broken friendship that births a son born of fire to kill the teacher.
- **Lākṣāgṛha** — the wax-palace at Vāraṇāvata and the tunnel of Vidura's mole.
- **Bakāsura · Hiḍimba · Hiḍimbī** — the forest demons of the exile years that pre-figure Ghaṭotkaca.
- **Draupadī-svayaṃvara** — the fish-eye target, the brāhmaṇa-disguised Arjuna, the unintended five-husband vow.
- ✅ Commit: `feat(pages): Adi Parva backstories (Phase 14)`

## ✅ Phase 15 — Upākhyānas (the inset tales)
**New file:** `data/upakhyanas.ts` · **New page:** `pages/UpakhyanasPage.tsx` · **Route:** `/upakhyanas`
The great epic carries other epics inside it. The forest sages tell these to
the Pāṇḍavas to console them; we tell them as their own codex cards.
- **Nala & Damayantī** (Vana Parva) — the gambling king and the queen who finds him again.
- **Sāvitrī & Satyavān** (Vana Parva) — the wife who out-argues Yama himself.
- **Śakuntalā & Duṣyanta** (Ādi Parva) — the origin of the very name *Bhārata*.
- **Yayāti** (Ādi Parva) — the king who borrowed his son's youth and learned its cost.
- **Aṣṭāvakra** (Vana Parva) — the eight-bent sage who silenced the court of Janaka.
- **Rāma-kathā** (Vana Parva, *Rāmopākhyāna*) — the Rāmāyaṇa retold to Yudhiṣṭhira by Mārkaṇḍeya.
- **Mudgala** (Vana Parva) — the sage who refused heaven itself.
- **Mātsya** (Vana Parva) — the first avatāra & the great flood.
- ✅ Commit: `feat(pages): Upakhyanas (Phase 15)`

## ⬜ Phase 16 — Pratijñās & Śāpas (Vows & Curses)
**New file:** `data/vows.ts` · **New page:** `pages/VowsPage.tsx` · **Route:** `/vows-and-curses`
Two parallel codex grids on one page — the iron oaths and the karmic
sentences that run the entire epic like clockwork.
- **Vows (pratijñā):**
  - Bhīṣma's celibacy.
  - Draupadī's vow on her hair (untied until washed in Duḥśāsana's blood).
  - Bhīma's two vows (Duḥśāsana's blood; Duryodhana's thigh).
  - Arjuna's "by sundown or self-immolation" (Jayadratha-vadha).
  - Karṇa's "I will not refuse a brāhmaṇa" (and the cost: his kavaca-kuṇḍala).
  - Kṛṣṇa's "I will not lift a weapon" (and the Sudarśana raised twice).
- **Curses (śāpa):**
  - Karṇa cursed by Paraśurāma (mantra forgotten in the hour of need).
  - Karṇa cursed by the brāhmaṇa (chariot wheel swallowed by earth).
  - Aśvatthāmā cursed by Kṛṣṇa (3,000 years wandering, festering).
  - Gāndhārī's curse on Kṛṣṇa (the Yādava-mausala).
  - Urvaśī's curse on Arjuna (one year as a eunuch — which saves the Agnātavāsa).
  - Pāṇḍu's hunting curse from sage Kindama.
  - Yudhiṣṭhira's curse on women ("no woman shall keep a secret again").
- ✅ Commit: `feat(pages): Pratijnas and Shapas (Phase 16)`

## ⬜ Phase 17 — Astras, Conches & Chariots
**New file:** `data/astras.ts` · **New page:** `pages/AstrasPage.tsx` · **Route:** `/astras`
The arsenal of the epic — divine weapons, sounding-conches, banner-chariots,
armor and bows. Codex cards with origin, owner, invocation, counter, and the
one battle that decided everything for it.
- **Astras** — Pāśupata, Brahmāstra, Brahmaśiras, Nārāyaṇāstra, Vaiṣṇavāstra, Āgneyāstra, Vāruṇāstra, Vāyavyāstra, Nāgāstra, Añjalikāstra, Sammohanāstra.
- **Discus & mace** — Sudarśana-cakra (Kṛṣṇa), Kaumodakī (Kṛṣṇa's mace), Bhīma's mace.
- **Bows** — Gāṇḍīva (Arjuna), Vijaya (Karṇa), Śārṅga (Kṛṣṇa).
- **Conches (śaṅkha)** — Pāñcajanya (Kṛṣṇa), Devadatta (Arjuna), Pauṇḍra (Bhīma), Anantavijaya (Yudhiṣṭhira), Sughoṣa (Nakula), Maṇipuṣpaka (Sahadeva).
- **Chariots & banners** — Kapidhvaja (Arjuna, Hanumān-flag), Mayūradhvaja, the white horses of Kṛṣṇa.
- **Armor (kavaca)** — Karṇa's birth-kavaca, Abhimanyu's gift-kavaca.
- ✅ Commit: `feat(pages): Astras and divine arms (Phase 17)`

## ⬜ Phase 18 — Śānti & Anuśāsana — Bhīṣma's deathbed teachings
**New file:** `data/teachings.ts` · **New page:** `pages/TeachingsPage.tsx` · **Route:** `/teachings`
Bhīṣma on the bed of arrows is the longest single discourse in world
literature. We render four pillars as glass-cards with a representative
shloka each, plus a short summary.
- **Rāja-dharma-parva** — the duties of a king (Yudhiṣṭhira's first lesson).
- **Āpad-dharma-parva** — dharma in times of catastrophe.
- **Mokṣa-dharma-parva** — the path of liberation; the highest yoga.
- **Dāna-dharma-parva** (Anuśāsana) — the dharma of giving.
- **Viṣṇu-sahasranāma** — the 1000 names taught to Yudhiṣṭhira at Bhīṣma's request; we render 24 chosen names with meanings.
- ✅ Commit: `feat(pages): Shanti and Anushasana teachings (Phase 18)`

## ⬜ Phase 19 — Antya: Mausala · Mahāprasthāna · Svargārohaṇa
**New file:** `data/antya.ts` · **New page:** `pages/AntyaPage.tsx` · **Route:** `/antya`
The end-rites of the epic — the quiet, devastating closing parvas that are
usually skipped in retellings.
- **The Yādava-Mausala** — the iron-pestle prophecy, the seaside drunken brawl, the destruction of the Vṛṣṇis.
- **Kṛṣṇa under the pīpal** — the hunter Jara, the mistaken arrow, the avatāra returning to Vaikuṇṭha.
- **Dwārakā into the sea** — Arjuna leads the survivors out; the city drowns behind them.
- **Arjuna's lost Gāṇḍīva** — robbed by tribal forest-dwellers; he cannot lift it.
- **Mahāprasthāna** — the six Pāṇḍavas + Draupadī + the dog of dharma walking north to the Himālaya.
- **The fallings** — Draupadī first; then Sahadeva, Nakula, Arjuna, Bhīma; each with their named flaw.
- **Yudhiṣṭhira & the dog** — Indra's chariot, the refusal of heaven without the dog who is Dharma.
- **Svargārohaṇa** — the vision of hell, the truth of heaven, Janamejaya's final sarpa-yajña, the epic closes.
- ✅ Commit: `feat(pages): Antya Parvas (Phase 19)`

## ⬜ Phase 20 — Cross-cutting polish
Quality-of-life features that lift the whole codex:
- **Global search** (`Ctrl+K`) — fuzzy match across characters, parvas, episodes, houses, kshetras, astras, vows, teachings.
- **Glossary** of Sanskrit terms (dharma, karma, mokṣa, yajña, tapasya, brāhmaṇa, kṣatriya, vaiśya, śūdra, varṇa, āśrama, saṃsāra, ātman, brahman, …) as a side-drawer with anchor links.
- **Cross-links** — clicking a character name inside any episode/house/teaching navigates to that character's modal/page.
- **Shloka of the day** on the homepage (rotates daily across all collected shlokas).
- **SEO** — per-route `<title>` and `<meta description>` via `react-helmet-async`.
- **Open Graph share cards** — pre-rendered 1200x630 PNGs for each route so links unfurl beautifully on social.
- ✅ Commit: `feat(qol): search, glossary, cross-links, SEO, share cards (Phase 20)`

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
| 11 | Pages IV — Houses / Family Tree / Kshetras | ✅ done | `b33e7e3` |
| 12 | App.tsx wiring + build polish | ✅ done | `637b794` |
| 13 | Deploy verification | ✅ done | `9ee0741` |
| — | Post-launch fix: cards content + lineage expand/collapse | ✅ done | `556e6c2` |
| — | Hardening: ErrorBoundary + GH-Pages 404.html SPA fallback | ✅ done | `6c478d8` |
| 14 | Ādi Parva backstories | ✅ done | `6c478d8` |
| 15 | Upākhyānas (inset tales) | ✅ done | _this commit_ |
| 16 | Pratijñās & Śāpas (vows & curses) | ⬜ next | — |
| 17 | Astras, Conches & Chariots | ⬜ | — |
| 18 | Śānti & Anuśāsana teachings | ⬜ | — |
| 19 | Antya: Mausala · Mahāprasthāna · Svargārohaa | ⬜ | — |
| 20 | Cross-cutting polish: search, glossary, SEO, share cards | ⬜ | — |

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
- **2026-05-29** — Phase 12 (router wiring + cleanup) completed. App.tsx now mounts Navigation + Routes (13 pages) + Footer; index.tsx wraps with HashRouter (chosen over BrowserRouter so GitHub Pages deep-links survive a refresh without a SPA fallback). Navigation extended to 13 items adding Vanavāsa, Agnātavāsa, Vishvarūpa. Obsolete files removed: `utils/sound.ts`, `backend/`, `public/sounds/`, `public/fonts/`, `public/_redirects`. README rewritten. Bundle: 410 KB JS / 129 KB gzipped (react-router added). Live deploy will pick this up automatically.
- **2026-05-29** — Phase 13 (deploy verification) completed. GitHub Actions deploy for commit `637b794` finished in 35s. The live site `https://unigalactix.github.io/Mahabharat/` now serves the production bundle `assets/index-CnQhDEW8.js` (the exact hash from Phase 12). 13 routes present (42 path refs in bundle); deep-link `/#/characters` returns 200. The placeholder is gone. 🙏 The Mahabharata Codex rebuild is complete.
- **2026-05-29** — Post-launch fix `556e6c2`: (1) character cards were rendering empty rings because `tc-frame` (which uses `mask-composite: exclude` to draw a hollow gold border) was applied to the same element as `tc-face`, masking away ALL face content. Split `tc-frame` into its own overlay element inside each face; lifted `tc-corner` + `tc-rarity-badge` out of `tc-inner` so they aren't blanketed by the inner radial gradient. (2) `FamilyTreePage` is now expand/collapse: each node with descendants shows a gold +/− toggle with child count; page-level controls Expand all / Default view / Collapse all (implemented via `key` remount). Added `.ft-toggle` / `.ft-toggle-count` / `.pill-active` styles.
- **2026-05-29** — Roadmap extended with **Phases 14–20** (story-reference expansion):
  - **14** · Ādi Parva backstories — Śāntanu-Gaṅgā, Bhīṣma's vow, Satyāvatī, Ambā/Ambikā/Ambālikā, Pāṇḍu's curse, Karṇa-janma, Lākṣāgṛha, Bakāsura/Hiḍimbā, Draupadī-svayaa.
  - **15** · Upākhyānas — the inset epics: Nala-Damayantī, Sāvitrī-Satyavān, Śakuntalā-Duṣyanta, Yayāti, Aṣṭāvakra, Rāmāyaṇa retold to Yudhiṣṭhira.
  - **16** · Pratijñās & Śāpas — a parallel codex of every great vow (Bhīṣma, Draupadī's hair, Bhīma's two oaths, Arjuna's sunset oath…) and every great curse (Karṇa from Paraśurāma, Karṇa from the brāhmaṇa, Aśvatthāmā from Kṛṣṇa, Gāndhārī on Kṛṣṇa, Urvaśī on Arjuna).
  - **17** · Astras & Relics — Pāśupata, Brahmāstra, Nārāyaṇāstra, Vaiṣṇavāstra, Sudarśana, Gāṇḍīva, Vijaya, all six Pāṇḍava conches, Kapidhvaja chariot, Karṇa's birth-kavaca.
  - **18** · Śānti & Anuśāsana teachings — Rāja-dharma, Āpad-dharma, Mokṣa-dharma, Dāna-dharma, and 24 names from Viṣṇu-sahasranāma.
  - **19** · Antya parvas — Yādava-Mausala, Kṛṣṇa under the pīpal, Dvārakā into the sea, Mahāprasthāna (the falling Five), Yudhiṣṭhira and the dog, Svargārohaṇa, Janamejaya's sarpa-yajña.
  - **20** · Cross-cutting polish — Ctrl+K global search, Sanskrit glossary drawer, cross-links between characters/episodes/houses, shloka-of-the-day, per-route SEO via react-helmet-async, Open Graph share cards.
  Each phase keeps the existing working agreement: one phase per session, committed & pushed as **Unigalactix**, REDESIGN_PLAN.md updated at the close of each phase.
- **2026-05-29** — Hardening + **Phase 14** in one session.
  - "Blank page" report turned out to be a stale browser cache: live site `index-DGjxCppG.js` was already serving the post-fix bundle (31 cards verified rendering, 7536px page height, headings present).
  - **Fix-forever hardening:**
    - Added `components/ErrorBoundary.tsx` and wrapped `<App />` in `index.tsx`. Any future runtime exception now shows a devotional "Reload / Return Home" panel instead of a blank screen.
    - Added `public/404.html` SPA fallback. Even non-hash deep-links like `/Mahabharat/characters` now bounce to `/Mahabharat/#/characters` instead of GH-Pages' default 404.
  - **Phase 14 — Ādi Parva backstories** shipped: new `Backstory` type, `data/backstories.ts` with 10 lineage tales (Śāntanu-Gaṅgā, Bhīṣma-pratijñā, Satyāvatī-Parāśara, Ambā, Pāṇḍu's curse, Karṇa-janma, Droṇa-Drupada, Lākṣāgṛha, forest asuras, Draupadī-svayaṃvara), `pages/BackstoriesPage.tsx` with era filter (All / Pre-Bhārata / Pre-Kuru / Pre-Pāṇḍava) + click-to-expand modal (supports `**bold**` accent emphasis + "Why it matters" footer card). Wired into `App.tsx` (`/backstories`) and `Navigation.tsx` (📜 Backstories, between Episodes and Vanavāsa). Nav now 14 items.
  - Build: 73 modules, 429.69 kB JS / 135.69 kB gzipped, 1.46s.
- **2026-05-29** — **Phase 15 — Upākhyānas (inset tales)** shipped.
  - New `Upakhyana` type with theme axis (Devotion / Dharma / Wisdom / Cosmic / Love) and `toldBy` / `toldTo` framing fields so the page can show *who* tells *whom* — preserving the Mahābhārata's frame-tale form.
  - `data/upakhyanas.ts` with 8 self-contained inset epics: **Nala & Damayantī** (Bṛhadaśva → Yudhiṣṭhira), **Sāvitrī & Satyavān** (Mārkaṇḍeya), **Śakuntalā & Duṣyanta** — origin of *Bhārata* (Vyāsa → Janamejaya), **Yayāti** (Vyāsa), **Aṣṭāvakra** (Lomaśa), **Rāmopākhyāna** — the entire Rāmāyaṇa retold inside the Mahābhārata (Mārkaṇḍeya), **Mātsya & the Flood** (Mārkaṇḍeya), **Mudgala who refused heaven** (Vyāsa). Each tale has 3-paragraph telling with `**bold**` accent emphasis on key names and a "moral the sage drew" footer card.
  - `pages/UpakhyanasPage.tsx` with 6 theme pills, frame-card grid (`md:grid-cols-2`), and click-to-expand modal that surfaces the *toldBy / toldTo* pair in their own accent-tinted cards before the narrative.
  - Wired into `App.tsx` (`/upakhyanas`) and `Navigation.tsx` (📚 Upākhyānas, between Backstories and Vanavāsa). Nav now 15 items.
