import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { BACKSTORIES } from '../data/backstories';
import { Backstory } from '../types';

type EraFilter = 'all' | 'Pre-Bharata' | 'Pre-Kuru' | 'Pre-Pandava';

const FILTERS: { key: EraFilter; label: string; sanskrit: string }[] = [
  { key: 'all',          label: 'All',           sanskrit: 'सर्वम्' },
  { key: 'Pre-Bharata',  label: 'Pre-Bhārata',   sanskrit: 'पूर्वम्' },
  { key: 'Pre-Kuru',     label: 'Pre-Kuru',      sanskrit: 'कुरुपूर्वम्' },
  { key: 'Pre-Pandava',  label: 'Pre-Pāṇḍava',   sanskrit: 'पाण्डवपूर्वम्' },
];

export const BackstoriesPage: React.FC = () => {
  const [era, setEra] = useState<EraFilter>('all');
  const [open, setOpen] = useState<Backstory | null>(null);

  const filtered = useMemo(
    () => (era === 'all' ? BACKSTORIES : BACKSTORIES.filter((b) => b.era === era)),
    [era]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="आदिपर्व कथाः"
        title="The Backstories of the Ādi Parva"
        subtitle="Before the dice game, before Kurukṣetra, before even the Pāṇḍavas — these are the lineage tales that set every later stage. Each begins a thread the epic will not let go."
      />

      {/* Era filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setEra(f.key)}
            className={`pill text-xs sm:text-sm ${
              era === f.key
                ? 'bg-gold/20 border-gold/70 text-goldlight shadow-[0_0_18px_rgba(212,175,55,.35)]'
                : 'text-parchment/80 hover:text-goldlight'
            }`}
          >
            <span className="font-sanskrit mr-2 opacity-80">{f.sanskrit}</span>
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-center text-parchment/55 text-xs uppercase tracking-[0.3em] mb-10">
        Showing {filtered.length} of {BACKSTORIES.length}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((b) => (
          <article
            key={b.id}
            className="glass glass-hover p-6 flex flex-col cursor-pointer"
            style={{ borderColor: `${b.accent}40` }}
            onClick={() => setOpen(b)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpen(b);
              }
            }}
          >
            <div className="flex items-start gap-4 mb-3">
              <div
                aria-hidden
                className="text-5xl shrink-0"
                style={{ filter: `drop-shadow(0 0 12px ${b.accent})` }}
              >
                {b.glyph}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                  {b.parva} · {b.era}
                </p>
                <p className="font-sanskrit text-goldlight/85 text-sm mb-1">{b.sanskrit}</p>
                <h3 className="font-display text-xl sm:text-2xl leading-tight" style={{ color: b.accent }}>
                  {b.title}
                </h3>
              </div>
            </div>

            <p className="text-parchment/85 leading-relaxed text-sm line-clamp-4">
              {b.summary[0]}
            </p>

            <div className="hr-ornate my-4" aria-hidden />

            <div className="flex items-center justify-between gap-3">
              <p className="text-parchment/55 text-[11px] truncate">
                {b.characters.slice(0, 3).join(' · ')}
              </p>
              <span
                className="pill text-[10px]"
                style={{ borderColor: `${b.accent}60`, color: b.accent }}
              >
                Read tale
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="glass max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8"
            style={{ borderColor: `${open.accent}66` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="text-5xl"
                  style={{ filter: `drop-shadow(0 0 16px ${open.accent})` }}
                >
                  {open.glyph}
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55">
                    {open.parva} · {open.era}
                  </p>
                  <p className="font-sanskrit text-goldlight/85 text-sm">{open.sanskrit}</p>
                  <h2 className="font-display text-2xl sm:text-3xl" style={{ color: open.accent }}>
                    {open.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="text-parchment/60 hover:text-goldlight text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="text-parchment/55 text-xs mb-4">
              <strong className="text-goldlight/80">Cast:</strong>{' '}
              {open.characters.join(' · ')}
            </p>

            <div className="space-y-4">
              {open.summary.map((p, i) => (
                <p
                  key={i}
                  className="text-parchment/90 leading-relaxed"
                  // The summaries contain **bold** markdown — render naively.
                  dangerouslySetInnerHTML={{
                    __html: p.replace(
                      /\*\*(.+?)\*\*/g,
                      `<strong style="color:${open.accent}">$1</strong>`
                    ),
                  }}
                />
              ))}
            </div>

            <div className="hr-ornate my-5" aria-hidden />

            <div
              className="rounded-lg p-4 border"
              style={{
                borderColor: `${open.accent}55`,
                background: `linear-gradient(135deg, ${open.accent}11, transparent)`,
              }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                Why it matters
              </p>
              <p
                className="text-parchment/90 italic font-quote"
                dangerouslySetInnerHTML={{
                  __html: open.whyItMatters.replace(
                    /\*\*(.+?)\*\*/g,
                    `<strong style="color:${open.accent}">$1</strong>`
                  ),
                }}
              />
            </div>
          </div>
        </div>
      )}

      <p className="text-center text-parchment/55 text-xs mt-12 italic max-w-2xl mx-auto">
        These ten threads — the river-bride, the terrible vow, the niyoga of
        Vyāsa, the deer of Kindama, the basket on the Aśva — are why
        Kurukṣetra was inevitable long before the first die was cast.
      </p>
    </main>
  );
};

export default BackstoriesPage;
