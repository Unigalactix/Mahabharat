import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { VOWS } from '../data/vows';
import { Vow } from '../types';

type KindFilter = 'all' | 'Pratijna' | 'Shapa';

const FILTERS: { key: KindFilter; label: string; sanskrit: string }[] = [
  { key: 'all',       label: 'All',       sanskrit: 'सर्वम्' },
  { key: 'Pratijna',  label: 'Pratijñās', sanskrit: 'प्रतिज्ञाः' },
  { key: 'Shapa',     label: 'Śāpas',     sanskrit: 'शापाः' },
];

const KIND_META: Record<Vow['kind'], { label: string; sanskrit: string; tagline: string }> = {
  Pratijna: {
    label: 'Pratijñā · Vow',
    sanskrit: 'प्रतिज्ञा',
    tagline: 'A word sworn that the universe will collect on, exactly.',
  },
  Shapa: {
    label: 'Śāpa · Curse',
    sanskrit: 'शापः',
    tagline: 'A word uttered in pain that history must obey.',
  },
};

const renderBold = (s: string, accent: string) =>
  s.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${accent}">$1</strong>`);

export const VowsPage: React.FC = () => {
  const [kind, setKind] = useState<KindFilter>('all');
  const [open, setOpen] = useState<Vow | null>(null);

  const filtered = useMemo(
    () => (kind === 'all' ? VOWS : VOWS.filter((v) => v.kind === kind)),
    [kind]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="प्रतिज्ञाः शापाश्च"
        title="Pratijñās & Śāpas — The Vows and Curses"
        subtitle="The Mahābhārata does not run on chance. Every major death is something someone said out loud decades earlier and could not unsay. These are the sworn words that hold the epic together."
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
        Showing {filtered.length} of {VOWS.length}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((v) => {
          const meta = KIND_META[v.kind];
          return (
            <article
              key={v.id}
              className="glass glass-hover p-6 flex flex-col cursor-pointer"
              style={{ borderColor: `${v.accent}40` }}
              onClick={() => setOpen(v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(v);
                }
              }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div
                  aria-hidden
                  className="text-5xl shrink-0"
                  style={{ filter: `drop-shadow(0 0 12px ${v.accent})` }}
                >
                  {v.glyph}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                    {meta.label} · {v.parva}
                  </p>
                  <p className="font-sanskrit text-goldlight/85 text-sm mb-1">{v.sanskrit}</p>
                  <h3 className="font-display text-xl sm:text-2xl leading-tight" style={{ color: v.accent }}>
                    {v.title}
                  </h3>
                </div>
              </div>

              {/* The oath itself, in quote-style */}
              <blockquote
                className="border-l-2 pl-3 italic font-quote text-parchment/85 text-sm leading-relaxed line-clamp-4"
                style={{ borderColor: v.accent }}
                dangerouslySetInnerHTML={{ __html: `“${renderBold(v.oath, v.accent)}”` }}
              />

              <div className="hr-ornate my-4" aria-hidden />

              <div className="flex items-center justify-between gap-3">
                <p className="text-parchment/55 text-[11px] truncate">
                  By <span className="text-goldlight/80">{v.utteredBy}</span>
                </p>
                <span
                  className="pill text-[10px]"
                  style={{ borderColor: `${v.accent}60`, color: v.accent }}
                >
                  See it cash in
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
                    {KIND_META[open.kind].label} · {open.parva}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
              <div
                className="rounded-md p-3 border"
                style={{ borderColor: `${open.accent}33`, background: `${open.accent}08` }}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-parchment/55 mb-1">
                  Uttered by
                </p>
                <p className="text-parchment/90">{open.utteredBy}</p>
              </div>
              <div
                className="rounded-md p-3 border"
                style={{ borderColor: `${open.accent}33`, background: `${open.accent}08` }}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-parchment/55 mb-1">
                  On
                </p>
                <p className="text-parchment/90">{open.utteredOn}</p>
              </div>
            </div>

            <p className="text-parchment/65 text-xs italic mb-4">{open.occasion}</p>

            {/* The oath, framed as the central quote */}
            <blockquote
              className="border-l-4 pl-4 py-2 italic font-quote text-parchment text-lg leading-relaxed mb-5"
              style={{
                borderColor: open.accent,
                background: `linear-gradient(90deg, ${open.accent}11, transparent)`,
              }}
              dangerouslySetInnerHTML={{ __html: `“${renderBold(open.oath, open.accent)}”` }}
            />

            <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-2">
              How it cashed in
            </p>
            <div className="space-y-3 mb-5">
              {open.consequence.map((p, i) => (
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
              <span aria-hidden className="text-2xl" style={{ color: open.accent }}>⚖️</span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                  Fulfilled at
                </p>
                <p className="text-parchment/90 font-quote italic">{open.fulfilledOn}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
