import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { UPAKHYANAS } from '../data/upakhyanas';
import { Upakhyana } from '../types';

type ThemeFilter = 'all' | 'Devotion' | 'Dharma' | 'Wisdom' | 'Cosmic' | 'Love';

const FILTERS: { key: ThemeFilter; label: string; sanskrit: string }[] = [
  { key: 'all',      label: 'All',      sanskrit: 'सर्वम्' },
  { key: 'Devotion', label: 'Devotion', sanskrit: 'भक्तिः' },
  { key: 'Dharma',   label: 'Dharma',   sanskrit: 'धर्मः' },
  { key: 'Wisdom',   label: 'Wisdom',   sanskrit: 'ज्ञानम्' },
  { key: 'Cosmic',   label: 'Cosmic',   sanskrit: 'ब्रह्माण्डम्' },
  { key: 'Love',     label: 'Love',     sanskrit: 'प्रेमः' },
];

export const UpakhyanasPage: React.FC = () => {
  const [theme, setTheme] = useState<ThemeFilter>('all');
  const [open, setOpen] = useState<Upakhyana | null>(null);

  const filtered = useMemo(
    () => (theme === 'all' ? UPAKHYANAS : UPAKHYANAS.filter((u) => u.theme === theme)),
    [theme]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="उपाख्यानानि"
        title="The Upākhyānas — Tales Inside the Tale"
        subtitle="When the Pāṇḍavas suffered in the forest, sages did not console them with sermons — they told them other stories. Each Upākhyāna is a self-contained epic the Mahābhārata carries inside itself, offered as proof that others have endured and dharma has held."
      />

      {/* Theme filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setTheme(f.key)}
            className={`pill text-xs sm:text-sm ${
              theme === f.key
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
        Showing {filtered.length} of {UPAKHYANAS.length}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((u) => (
          <article
            key={u.id}
            className="glass glass-hover p-6 flex flex-col cursor-pointer"
            style={{ borderColor: `${u.accent}40` }}
            onClick={() => setOpen(u)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpen(u);
              }
            }}
          >
            <div className="flex items-start gap-4 mb-3">
              <div
                aria-hidden
                className="text-5xl shrink-0"
                style={{ filter: `drop-shadow(0 0 12px ${u.accent})` }}
              >
                {u.glyph}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                  {u.parva} · {u.theme}
                </p>
                <p className="font-sanskrit text-goldlight/85 text-sm mb-1">{u.sanskrit}</p>
                <h3 className="font-display text-xl sm:text-2xl leading-tight" style={{ color: u.accent }}>
                  {u.title}
                </h3>
              </div>
            </div>

            <p
              className="text-parchment/85 leading-relaxed text-sm line-clamp-4"
              dangerouslySetInnerHTML={{
                __html: u.summary[0].replace(
                  /\*\*(.+?)\*\*/g,
                  `<strong style="color:${u.accent}">$1</strong>`
                ),
              }}
            />

            <div className="hr-ornate my-4" aria-hidden />

            <div className="flex items-center justify-between gap-3">
              <p className="text-parchment/55 text-[11px] truncate">
                Told by <span className="text-goldlight/80">{u.toldBy}</span>
              </p>
              <span
                className="pill text-[10px]"
                style={{ borderColor: `${u.accent}60`, color: u.accent }}
              >
                Hear the tale
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
                    {open.parva} · {open.theme}
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
                  Told by
                </p>
                <p className="text-parchment/90">{open.toldBy}</p>
              </div>
              <div
                className="rounded-md p-3 border"
                style={{ borderColor: `${open.accent}33`, background: `${open.accent}08` }}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-parchment/55 mb-1">
                  Told to
                </p>
                <p className="text-parchment/90">{open.toldTo}</p>
              </div>
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
                The moral the sage drew
              </p>
              <p
                className="text-parchment/90 italic font-quote"
                dangerouslySetInnerHTML={{
                  __html: open.moral.replace(
                    /\*\*(.+?)\*\*/g,
                    `<strong style="color:${open.accent}">$1</strong>`
                  ),
                }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
