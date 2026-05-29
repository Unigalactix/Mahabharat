import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { RELICS } from '../data/relics';
import { Relic } from '../types';

type KindFilter = 'all' | 'Astra' | 'Conch' | 'Chariot';

const FILTERS: { key: KindFilter; label: string; sanskrit: string }[] = [
  { key: 'all',     label: 'All',      sanskrit: 'सर्वम्' },
  { key: 'Astra',   label: 'Astras',   sanskrit: 'अस्त्राणि' },
  { key: 'Conch',   label: 'Conches',  sanskrit: 'शङ्खाः' },
  { key: 'Chariot', label: 'Chariots', sanskrit: 'रथाः' },
];

const KIND_META: Record<Relic['kind'], { label: string; sanskrit: string }> = {
  Astra:   { label: 'Astra · God-weapon', sanskrit: 'अस्त्रम्' },
  Conch:   { label: 'Śaṅkha · Conch',     sanskrit: 'शङ्खः' },
  Chariot: { label: 'Ratha · Chariot',    sanskrit: 'रथः' },
};

const renderBold = (s: string, accent: string) =>
  s.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${accent}">$1</strong>`);

export const RelicsPage: React.FC = () => {
  const [kind, setKind] = useState<KindFilter>('all');
  const [open, setOpen] = useState<Relic | null>(null);

  const filtered = useMemo(
    () => (kind === 'all' ? RELICS : RELICS.filter((r) => r.kind === kind)),
    [kind]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="अस्त्राणि शङ्खाश्च रथाश्च"
        title="Astras, Conches & Chariots"
        subtitle="Every great warrior at Kurukṣetra was identified by three things: what he could loose, what he blew, and what he rode. These are the relics that name him."
      />

      {/* Kind filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setKind(f.key)}
            className={`pill text-xs sm:text-sm ${
              kind === f.key
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
        Showing {filtered.length} of {RELICS.length}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r) => {
          const meta = KIND_META[r.kind];
          return (
            <article
              key={r.id}
              className="glass glass-hover p-6 flex flex-col cursor-pointer"
              style={{ borderColor: `${r.accent}40` }}
              onClick={() => setOpen(r)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(r);
                }
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  aria-hidden
                  className="text-5xl shrink-0"
                  style={{ filter: `drop-shadow(0 0 12px ${r.accent})` }}
                >
                  {r.glyph}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                    {meta.label}
                  </p>
                  <p className="font-sanskrit text-goldlight/85 text-sm mb-1 truncate">{r.sanskrit}</p>
                  <h3 className="font-display text-lg sm:text-xl leading-tight" style={{ color: r.accent }}>
                    {r.name}
                  </h3>
                </div>
              </div>

              <p
                className="text-parchment/85 leading-relaxed text-sm italic font-quote mb-3"
                dangerouslySetInnerHTML={{ __html: renderBold(r.power, r.accent) }}
              />

              <div className="hr-ornate my-3" aria-hidden />

              <div className="flex items-center justify-between gap-3">
                <p className="text-parchment/55 text-[11px] truncate">
                  <span className="text-goldlight/80">{r.wielder}</span>
                </p>
                <span
                  className="pill text-[10px]"
                  style={{ borderColor: `${r.accent}60`, color: r.accent }}
                >
                  Inspect
                </span>
              </div>
            </article>
          );
        })}
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
                    {KIND_META[open.kind].label}
                  </p>
                  <p className="font-sanskrit text-goldlight/85 text-sm">{open.sanskrit}</p>
                  <h2 className="font-display text-2xl sm:text-3xl" style={{ color: open.accent }}>
                    {open.name}
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

            {/* Quick-spec grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs">
              <div
                className="rounded-md p-3 border"
                style={{ borderColor: `${open.accent}33`, background: `${open.accent}08` }}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-parchment/55 mb-1">Wielder</p>
                <p className="text-parchment/90">{open.wielder}</p>
              </div>
              <div
                className="rounded-md p-3 border"
                style={{ borderColor: `${open.accent}33`, background: `${open.accent}08` }}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-parchment/55 mb-1">Origin</p>
                <p className="text-parchment/90">{open.origin}</p>
              </div>
              <div
                className="rounded-md p-3 border"
                style={{ borderColor: `${open.accent}33`, background: `${open.accent}08` }}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-parchment/55 mb-1">Invoked by</p>
                <p className="text-parchment/90">{open.invokedBy}</p>
              </div>
            </div>

            {/* Power as headline quote */}
            <blockquote
              className="border-l-4 pl-4 py-2 italic font-quote text-parchment text-lg leading-relaxed mb-5"
              style={{
                borderColor: open.accent,
                background: `linear-gradient(90deg, ${open.accent}11, transparent)`,
              }}
              dangerouslySetInnerHTML={{ __html: renderBold(open.power, open.accent) }}
            />

            <div className="space-y-3 mb-5">
              {open.description.map((p, i) => (
                <p
                  key={i}
                  className="text-parchment/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderBold(p, open.accent) }}
                />
              ))}
            </div>

            <div className="hr-ornate my-4" aria-hidden />

            <div
              className="rounded-lg p-4 border flex items-start gap-3"
              style={{
                borderColor: `${open.accent}55`,
                background: `linear-gradient(135deg, ${open.accent}11, transparent)`,
              }}
            >
              <span aria-hidden className="text-2xl" style={{ color: open.accent }}>⚔️</span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                  Used at
                </p>
                <p className="text-parchment/90 font-quote italic">{open.usedAt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
