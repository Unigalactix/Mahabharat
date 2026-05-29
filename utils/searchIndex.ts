// Build a flat, lazy-evaluated search index of every named entity in the codex
// — characters, parvas, episodes, houses, kshetras, backstories, upākhyānas,
// vows/curses, relics, teachings, sahasranāma names, and antya scenes.
//
// Each entry knows where to navigate to, what to display, and a haystack of
// searchable text. The ⌘K palette uses this directly. Lazy import keeps it out
// of the initial bundle.

export type SearchKind =
  | 'page'
  | 'character'
  | 'parva'
  | 'episode'
  | 'house'
  | 'kshetra'
  | 'backstory'
  | 'upakhyana'
  | 'vow'
  | 'relic'
  | 'teaching'
  | 'name'
  | 'antya';

export interface SearchEntry {
  id: string;
  kind: SearchKind;
  label: string;       // primary display text
  sublabel?: string;   // secondary line (sanskrit, epithet, parva, etc.)
  glyph: string;
  accent: string;
  to: string;          // route to navigate to
  haystack: string;    // lowercased searchable blob
}

const STATIC_PAGES: Omit<SearchEntry, 'haystack'>[] = [
  { id: 'p-home',         kind: 'page', label: 'Home',                sublabel: 'The threshold',                         glyph: '🕉️', accent: '#D4AF37', to: '/' },
  { id: 'p-characters',   kind: 'page', label: 'Characters',          sublabel: 'The dramatis personae',                 glyph: '🏹', accent: '#D4AF37', to: '/characters' },
  { id: 'p-parvas',       kind: 'page', label: 'The 18 Parvas',       sublabel: 'The books of the epic',                 glyph: '📜', accent: '#D4AF37', to: '/parvas' },
  { id: 'p-episodes',     kind: 'page', label: 'Episodes',            sublabel: 'Key scenes of the story',               glyph: '✨', accent: '#D4AF37', to: '/episodes' },
  { id: 'p-backstories',  kind: 'page', label: 'Backstories',         sublabel: 'Ādi-Parva — before the brothers',       glyph: '📜', accent: '#D4AF37', to: '/backstories' },
  { id: 'p-upakhyanas',   kind: 'page', label: 'Upākhyānas',          sublabel: 'Inset tales',                           glyph: '📚', accent: '#D4AF37', to: '/upakhyanas' },
  { id: 'p-vows',         kind: 'page', label: 'Vows & Curses',       sublabel: 'Pratijñā & Śāpa',                       glyph: '⚖️', accent: '#D4AF37', to: '/vows' },
  { id: 'p-relics',       kind: 'page', label: 'Relics',              sublabel: 'Astras, conches, chariots',             glyph: '🏹', accent: '#D4AF37', to: '/relics' },
  { id: 'p-vanavasa',     kind: 'page', label: 'Vanavāsa',            sublabel: 'The twelve forest years',               glyph: '🌲', accent: '#D4AF37', to: '/vanavasa' },
  { id: 'p-agnatavasa',   kind: 'page', label: 'Agnātavāsa',          sublabel: 'The thirteenth year, hidden',           glyph: '🎭', accent: '#D4AF37', to: '/agnatavasa' },
  { id: 'p-krishna',      kind: 'page', label: 'Kṛṣṇa',               sublabel: 'The eighth avatāra',                    glyph: '🪈', accent: '#D4AF37', to: '/krishna' },
  { id: 'p-vishwarupa',   kind: 'page', label: 'Viśvarūpa',           sublabel: 'The cosmic form',                       glyph: '🌌', accent: '#D4AF37', to: '/vishwarupa' },
  { id: 'p-kurukshetra',  kind: 'page', label: 'Kurukṣetra',          sublabel: 'Eighteen days of war',                  glyph: '⚔️', accent: '#D4AF37', to: '/kurukshetra' },
  { id: 'p-gita',         kind: 'page', label: 'Bhagavad Gītā',       sublabel: 'The song of the Lord',                  glyph: '📖', accent: '#D4AF37', to: '/gita' },
  { id: 'p-teachings',    kind: 'page', label: 'Teachings',           sublabel: 'Śānti & Anuśāsana',                     glyph: '🪴', accent: '#D4AF37', to: '/teachings' },
  { id: 'p-houses',       kind: 'page', label: 'Houses',              sublabel: 'Noble lineages',                        glyph: '👑', accent: '#D4AF37', to: '/houses' },
  { id: 'p-lineage',      kind: 'page', label: 'Lineage',             sublabel: 'The lunar dynasty tree',                glyph: '🌳', accent: '#D4AF37', to: '/family-tree' },
  { id: 'p-kshetras',     kind: 'page', label: 'Kshetras',            sublabel: 'Sacred lands',                          glyph: '🛕', accent: '#D4AF37', to: '/kshetras' },
  { id: 'p-antya',        kind: 'page', label: 'Antya',               sublabel: 'How the story ends',                    glyph: '🌅', accent: '#D4AF37', to: '/antya' },
];

let cached: SearchEntry[] | null = null;

export async function loadSearchIndex(): Promise<SearchEntry[]> {
  if (cached) return cached;

  const [
    { CHARACTERS },
    { PARVAS },
    { EPISODES },
    { HOUSES },
    { KSHETRAS },
    { BACKSTORIES },
    { UPAKHYANAS },
    { VOWS },
    { RELICS },
    { TEACHINGS, SAHASRANAMA },
    { ANTYA, ARC_META },
  ] = await Promise.all([
    import('../data/characters'),
    import('../data/parvas'),
    import('../data/episodes'),
    import('../data/houses'),
    import('../data/kshetras'),
    import('../data/backstories'),
    import('../data/upakhyanas'),
    import('../data/vows'),
    import('../data/relics'),
    import('../data/teachings'),
    import('../data/antya'),
  ]);

  const out: SearchEntry[] = [];

  STATIC_PAGES.forEach((p) =>
    out.push({ ...p, haystack: `${p.label} ${p.sublabel ?? ''}`.toLowerCase() })
  );

  CHARACTERS.forEach((c) =>
    out.push({
      id: `c-${c.id}`,
      kind: 'character',
      label: c.name,
      sublabel: c.epithet,
      glyph: c.glyph,
      accent: c.accent,
      to: '/characters',
      haystack: `${c.name} ${c.sanskrit} ${c.epithet} ${c.affiliation} ${c.origin} ${c.weapon}`.toLowerCase(),
    })
  );

  PARVAS.forEach((p) =>
    out.push({
      id: `pa-${p.number}`,
      kind: 'parva',
      label: `${p.number}. ${p.name}`,
      sublabel: p.meaning,
      glyph: '📜',
      accent: p.accent,
      to: '/parvas',
      haystack: `${p.name} ${p.sanskrit} ${p.meaning} ${p.summary}`.toLowerCase(),
    })
  );

  EPISODES.forEach((e) =>
    out.push({
      id: `e-${e.id}`,
      kind: 'episode',
      label: e.title,
      sublabel: e.era,
      glyph: e.glyph,
      accent: e.accent,
      to: '/episodes',
      haystack: `${e.title} ${e.sanskrit ?? ''} ${e.era} ${e.summary}`.toLowerCase(),
    })
  );

  HOUSES.forEach((h) =>
    out.push({
      id: `h-${h.id}`,
      kind: 'house',
      label: `House of ${h.name}`,
      sublabel: `${h.capital} · ${h.side}`,
      glyph: h.banner,
      accent: h.accent,
      to: '/houses',
      haystack: `${h.name} ${h.sanskrit} ${h.capital} ${h.region} ${h.patriarch} ${h.notableMembers.join(' ')}`.toLowerCase(),
    })
  );

  KSHETRAS.forEach((k) =>
    out.push({
      id: `k-${k.id}`,
      kind: 'kshetra',
      label: k.name,
      sublabel: k.location,
      glyph: k.glyph,
      accent: k.accent,
      to: '/kshetras',
      haystack: `${k.name} ${k.location} ${k.story}`.toLowerCase(),
    })
  );

  BACKSTORIES.forEach((b) =>
    out.push({
      id: `b-${b.id}`,
      kind: 'backstory',
      label: b.title,
      sublabel: b.parva,
      glyph: b.glyph,
      accent: b.accent,
      to: '/backstories',
      haystack: `${b.title} ${b.sanskrit} ${b.parva} ${b.characters.join(' ')} ${b.summary.join(' ')}`.toLowerCase(),
    })
  );

  UPAKHYANAS.forEach((u) =>
    out.push({
      id: `u-${u.id}`,
      kind: 'upakhyana',
      label: u.title,
      sublabel: `told by ${u.toldBy}`,
      glyph: u.glyph,
      accent: u.accent,
      to: '/upakhyanas',
      haystack: `${u.title} ${u.sanskrit} ${u.toldBy} ${u.theme} ${u.characters.join(' ')} ${u.summary.join(' ')}`.toLowerCase(),
    })
  );

  VOWS.forEach((v) =>
    out.push({
      id: `v-${v.id}`,
      kind: 'vow',
      label: v.title,
      sublabel: `${v.kind} · ${v.utteredBy}`,
      glyph: v.glyph,
      accent: v.accent,
      to: '/vows',
      haystack: `${v.title} ${v.sanskrit} ${v.utteredBy} ${v.utteredOn} ${v.occasion} ${v.oath}`.toLowerCase(),
    })
  );

  RELICS.forEach((r) =>
    out.push({
      id: `r-${r.id}`,
      kind: 'relic',
      label: r.name,
      sublabel: `${r.kind} · ${r.wielder}`,
      glyph: r.glyph,
      accent: r.accent,
      to: '/relics',
      haystack: `${r.name} ${r.sanskrit} ${r.kind} ${r.wielder} ${r.origin} ${r.power}`.toLowerCase(),
    })
  );

  TEACHINGS.forEach((t) =>
    out.push({
      id: `t-${t.id}`,
      kind: 'teaching',
      label: t.title,
      sublabel: t.branch.replace('-', ' '),
      glyph: t.glyph,
      accent: t.accent,
      to: '/teachings',
      haystack: `${t.title} ${t.sanskrit} ${t.branch} ${t.precept} ${t.exposition.join(' ')}`.toLowerCase(),
    })
  );

  SAHASRANAMA.forEach((n) =>
    out.push({
      id: `n-${n.id}`,
      kind: 'name',
      label: n.name,
      sublabel: `#${n.number} · ${n.meaning}`,
      glyph: '📿',
      accent: '#E879F9',
      to: '/teachings',
      haystack: `${n.name} ${n.sanskrit} ${n.meaning}`.toLowerCase(),
    })
  );

  ANTYA.forEach((s) => {
    const arc = ARC_META[s.arc];
    out.push({
      id: `a-${s.id}`,
      kind: 'antya',
      label: s.title,
      sublabel: arc.label,
      glyph: s.glyph,
      accent: s.accent,
      to: '/antya',
      haystack: `${s.title} ${s.sanskrit} ${arc.label} ${s.characters.join(' ')} ${s.narrative.join(' ')}`.toLowerCase(),
    });
  });

  cached = out;
  return out;
}

export const KIND_LABEL: Record<SearchKind, string> = {
  page:      'Page',
  character: 'Character',
  parva:     'Parva',
  episode:   'Episode',
  house:     'House',
  kshetra:   'Kshetra',
  backstory: 'Backstory',
  upakhyana: 'Upākhyāna',
  vow:       'Vow / Curse',
  relic:     'Relic',
  teaching:  'Teaching',
  name:      'Divine name',
  antya:     'Antya scene',
};
