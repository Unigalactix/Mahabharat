import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { EPISODES } from '../data/episodes';
import { Episode } from '../types';

type Phase = 'all' | 'krishna' | 'pre-war' | 'exile' | 'war' | 'post-war';

const KRISHNA_IDS = new Set([
  'krishna-janma', 'govardhan-lila', 'kalinga-mardana', 'kamsa-vadha', 'sudarshan-charka',
]);

const PHASE_FILTERS: { key: Phase; label: string; sanskrit: string; match: (e: Episode) => boolean }[] = [
  { key: 'all',      label: 'All',            sanskrit: 'सर्वम्',         match: () => true },
  { key: 'krishna',  label: "Krishna's Lila", sanskrit: 'कृष्ण लीला',     match: (e) => KRISHNA_IDS.has(e.id) },
  { key: 'pre-war',  label: 'Pre-War',        sanskrit: 'युद्धात् पूर्वम्',
    match: (e) => /Pre-War/i.test(e.era) && !KRISHNA_IDS.has(e.id) },
  { key: 'exile',    label: 'Exile',          sanskrit: 'वनवासः',         match: (e) => /Exile/i.test(e.era) },
  { key: 'war',      label: 'The 18 Days',    sanskrit: 'कुरुक्षेत्रम्',    match: (e) => /^War —/i.test(e.era) },
  { key: 'post-war', label: 'Post-War',       sanskrit: 'युद्धोत्तरम्',    match: (e) => /Post-War/i.test(e.era) },
];

export const EpisodesPage: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('all');

  const filtered = useMemo(() => {
    const def = PHASE_FILTERS.find((p) => p.key === phase) ?? PHASE_FILTERS[0];
    return EPISODES.filter(def.match);
  }, [phase]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="महाभारत प्रसङ्गाः"
        title="Twenty-Two Defining Episodes"
        subtitle="From Krishna's birth in the prison of Mathura to Yudhishthira's ascent up Mount Meru — the moments by which the Mahabharata is remembered."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {PHASE_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setPhase(f.key)}
            className={`pill text-xs sm:text-sm ${
              phase === f.key
                ? 'bg-gold/20 border-gold/70 text-goldlight shadow-[0_0_18px_rgba(212,175,55,.35)]'
                : 'text-parchment/80 hover:text-goldlight'
            }`}
          >
            <span className="font-sanskrit mr-2 opacity-80">{f.sanskrit}</span>
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-center text-parchment/55 text-xs uppercase tracking-[0.3em] mb-8">
        Showing {filtered.length} of {EPISODES.length}
      </p>

      {/* Vertical timeline */}
      <ol className="relative border-l-2 border-gold/25 ml-3 sm:ml-6 space-y-8">
        {filtered.map((e, i) => (
          <li key={e.id} className="pl-6 sm:pl-10 relative">
            <span
              aria-hidden
              className="absolute -left-[14px] sm:-left-[18px] top-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-base sm:text-lg border-2 border-ink"
              style={{
                background: `radial-gradient(circle, ${e.accent}, ${e.accent}88)`,
                boxShadow: `0 0 18px ${e.accent}88`,
              }}
            >
              {e.glyph}
            </span>
            <article
              className="glass glass-hover p-5 sm:p-6"
              style={{ borderColor: `${e.accent}40` }}
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55">
                  Episode {String(i + 1).padStart(2, '0')} · {e.era}
                </p>
                <span
                  className="pill text-[10px]"
                  style={{ borderColor: `${e.accent}60`, color: e.accent }}
                >
                  {e.era.split('—')[0].trim()}
                </span>
              </div>
              {e.sanskrit && (
                <p className="font-sanskrit text-goldlight/85 text-base mb-1">{e.sanskrit}</p>
              )}
              <h3 className="font-display text-xl sm:text-2xl" style={{ color: e.accent }}>
                {e.title}
              </h3>
              <p className="text-parchment/85 leading-relaxed mt-3">{e.summary}</p>
              <div className="hr-ornate my-4" aria-hidden />
              <p className="text-parchment/75 italic font-quote">{e.significance}</p>
            </article>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default EpisodesPage;
