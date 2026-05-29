import React, { useEffect, useMemo, useState } from 'react';
import { CATEGORIES, CATEGORY_ACCENT, GLOSSARY, GlossaryTerm } from '../data/glossary';

type CategoryFilter = 'all' | GlossaryTerm['category'];

export const GlossaryDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<CategoryFilter>('all');

  // Hotkey: Shift+G opens / closes the drawer (g alone collides too easily)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const inField =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        (target?.isContentEditable ?? false);
      if (!inField && e.shiftKey && (e.key === 'G' || e.key === 'g')) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    const onOpenEvt = () => setOpen(true);
    window.addEventListener('mbh:open-glossary', onOpenEvt as EventListener);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mbh:open-glossary', onOpenEvt as EventListener);
    };
  }, [open]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return GLOSSARY.filter((t) => {
      if (cat !== 'all' && t.category !== cat) return false;
      if (!needle) return true;
      return (
        t.term.toLowerCase().includes(needle) ||
        t.sanskrit.includes(needle) ||
        t.meaning.toLowerCase().includes(needle)
      );
    });
  }, [q, cat]);

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Sanskrit glossary (Shift + G)"
        aria-label="Open Sanskrit glossary"
        className="fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-ink/85 backdrop-blur-md border border-gold/40 text-goldlight text-xl flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,.35)] hover:scale-110 hover:bg-gold/20 transition"
      >
        <span aria-hidden className="font-sanskrit text-base">सं</span>
      </button>

      {!open ? null : (
        <div
          className="fixed inset-0 z-[55] bg-ink/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Sanskrit glossary"
        >
          <aside
            className="absolute right-0 top-0 h-full w-full max-w-md bg-ink/95 border-l border-gold/30 shadow-[-12px_0_40px_rgba(0,0,0,.6)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <header className="p-5 border-b border-gold/20 shrink-0">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55">
                    Glossary
                  </p>
                  <h2 className="font-display text-2xl text-gold leading-tight">
                    Sanskrit Lexicon
                  </h2>
                  <p className="font-sanskrit text-goldlight/85 text-sm">शब्दकोशः</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-parchment/60 hover:text-goldlight text-2xl leading-none"
                  aria-label="Close glossary"
                >
                  ×
                </button>
              </div>

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="dharma, mokṣa, gāṇḍīva, kṣetra…"
                className="w-full bg-parchment/5 border border-gold/20 rounded-md px-3 py-2 text-sm text-parchment placeholder:text-parchment/40 outline-none focus:border-gold/60"
                aria-label="Filter glossary"
              />

              <div className="flex flex-wrap gap-1.5 mt-3">
                <button
                  type="button"
                  onClick={() => setCat('all')}
                  className={`pill text-[10px] ${
                    cat === 'all'
                      ? 'bg-gold/20 border-gold/70 text-goldlight'
                      : 'text-parchment/75 hover:text-goldlight'
                  }`}
                >
                  All
                </button>
                {CATEGORIES.map((c) => {
                  const isActive = cat === c;
                  const accent = CATEGORY_ACCENT[c];
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCat(c)}
                      className={`pill text-[10px] ${
                        isActive ? 'text-goldlight' : 'text-parchment/75 hover:text-goldlight'
                      }`}
                      style={
                        isActive
                          ? {
                              borderColor: `${accent}aa`,
                              background: `${accent}22`,
                              boxShadow: `0 0 12px ${accent}55`,
                            }
                          : undefined
                      }
                    >
                      {c}
                    </button>
                  );
                })}
              </div>

              <p className="text-parchment/50 text-[10px] uppercase tracking-[0.25em] mt-3">
                {filtered.length} of {GLOSSARY.length} terms
              </p>
            </header>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {filtered.length === 0 ? (
                <p className="text-parchment/55 text-sm text-center py-10">
                  No terms match. Try a different lens.
                </p>
              ) : (
                filtered.map((t) => {
                  const accent = CATEGORY_ACCENT[t.category];
                  return (
                    <article
                      key={t.term}
                      className="glass p-4 border"
                      style={{ borderColor: `${accent}33` }}
                    >
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <h3 className="font-display text-lg" style={{ color: accent }}>
                          {t.term}
                        </h3>
                        <span
                          className="text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 rounded border shrink-0"
                          style={{ borderColor: `${accent}55`, color: accent }}
                        >
                          {t.category}
                        </span>
                      </div>
                      <p className="font-sanskrit text-goldlight/80 text-sm mb-2">{t.sanskrit}</p>
                      <p className="text-parchment/90 text-sm leading-relaxed mb-2">{t.meaning}</p>
                      <p className="text-parchment/65 text-xs italic font-quote leading-relaxed border-l-2 pl-2"
                         style={{ borderColor: `${accent}66` }}>
                        {t.context}
                      </p>
                    </article>
                  );
                })
              )}
            </div>

            <footer className="px-4 py-2 border-t border-gold/20 text-[10px] text-parchment/45 uppercase tracking-[0.25em] flex items-center justify-between shrink-0">
              <span>
                <kbd className="border border-parchment/20 rounded px-1">Shift+G</kbd> toggle
              </span>
              <span>
                <kbd className="border border-parchment/20 rounded px-1">ESC</kbd> close
              </span>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
};
