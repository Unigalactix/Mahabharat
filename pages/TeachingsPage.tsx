import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { TEACHINGS, SAHASRANAMA, BRANCH_META } from '../data/teachings';
import { Teaching } from '../types';

type Mode = 'teachings' | 'names';
type BranchFilter = 'all' | Teaching['branch'];

const BRANCH_FILTERS: { key: BranchFilter; label: string; sanskrit: string }[] = [
  { key: 'all',            label: 'All',          sanskrit: 'सर्वम्' },
  { key: 'Raja-dharma',    label: 'Rāja',         sanskrit: 'राजधर्मः' },
  { key: 'Apad-dharma',    label: 'Āpad',         sanskrit: 'आपद्धर्मः' },
  { key: 'Moksha-dharma',  label: 'Mokṣa',        sanskrit: 'मोक्षधर्मः' },
  { key: 'Dana-dharma',    label: 'Dāna',         sanskrit: 'दानधर्मः' },
];

const renderBold = (s: string, accent: string) =>
  s.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${accent}">$1</strong>`);

export const TeachingsPage: React.FC = () => {
  const [mode, setMode] = useState<Mode>('teachings');
  const [branch, setBranch] = useState<BranchFilter>('all');
  const [open, setOpen] = useState<Teaching | null>(null);

  const filtered = useMemo(
    () => (branch === 'all' ? TEACHINGS : TEACHINGS.filter((t) => t.branch === branch)),
    [branch]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="शान्तिश्चानुशासनं च"
        title="Śānti & Anuśāsana — Bhīṣma's Last Teaching"
        subtitle="The war is over. The grandfather lies on his bed of arrows, waiting for the northern solstice. The new king cannot rule for grief. Bhīṣma calls Yudhiṣṭhira to his side and pours out a lifetime of dharma — the longest single instructional passage in any epic literature in history."
      />

      {/* Mode switcher */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          type="button"
          onClick={() => setMode('teachings')}
          className={`pill text-xs sm:text-sm ${
            mode === 'teachings'
              ? 'bg-gold/20 border-gold/70 text-goldlight shadow-[0_0_18px_rgba(212,175,55,.35)]'
              : 'text-parchment/80 hover:text-goldlight'
          }`}
        >
          <span className="font-sanskrit mr-2 opacity-80">शिक्षाः</span>
          The Four Dharmas
        </button>
        <button
          type="button"
          onClick={() => setMode('names')}
          className={`pill text-xs sm:text-sm ${
            mode === 'names'
              ? 'bg-gold/20 border-gold/70 text-goldlight shadow-[0_0_18px_rgba(212,175,55,.35)]'
              : 'text-parchment/80 hover:text-goldlight'
          }`}
        >
          <span className="font-sanskrit mr-2 opacity-80">सहस्रनाम</span>
          Viṣṇu-Sahasranāma (24 of 1000)
        </button>
      </div>

      {mode === 'teachings' ? (
        <>
          {/* Branch filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {BRANCH_FILTERS.map((f) => {
              const isActive = branch === f.key;
              const meta = f.key !== 'all' ? BRANCH_META[f.key] : null;
              const activeColor = meta?.accent ?? '#D4AF37';
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setBranch(f.key)}
                  className={`pill text-xs sm:text-sm ${
                    isActive
                      ? 'text-goldlight'
                      : 'text-parchment/80 hover:text-goldlight'
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: `${activeColor}aa`,
                          background: `${activeColor}22`,
                          boxShadow: `0 0 18px ${activeColor}55`,
                        }
                      : undefined
                  }
                >
                  <span className="font-sanskrit mr-2 opacity-80">{f.sanskrit}</span>
                  {f.label}
                </button>
              );
            })}
          </div>

          <p className="text-center text-parchment/55 text-xs uppercase tracking-[0.3em] mb-10">
            Showing {filtered.length} of {TEACHINGS.length} teachings
          </p>

          {/* Branch headers + grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((t) => {
              const meta = BRANCH_META[t.branch];
              return (
                <article
                  key={t.id}
                  className="glass glass-hover p-6 flex flex-col cursor-pointer"
                  style={{ borderColor: `${t.accent}40` }}
                  onClick={() => setOpen(t)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpen(t);
                    }
                  }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      aria-hidden
                      className="text-5xl shrink-0"
                      style={{ filter: `drop-shadow(0 0 12px ${t.accent})` }}
                    >
                      {t.glyph}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                        {meta.label}
                      </p>
                      <p className="font-sanskrit text-goldlight/85 text-sm mb-1">{t.sanskrit}</p>
                      <h3 className="font-display text-lg sm:text-xl leading-tight" style={{ color: t.accent }}>
                        {t.title}
                      </h3>
                    </div>
                  </div>

                  <blockquote
                    className="border-l-2 pl-3 italic font-quote text-parchment/85 text-sm leading-relaxed line-clamp-4 mb-3"
                    style={{ borderColor: t.accent }}
                    dangerouslySetInnerHTML={{ __html: renderBold(t.precept, t.accent) }}
                  />

                  <div className="hr-ornate my-3" aria-hidden />

                  <div className="flex items-center justify-between gap-3">
                    <p className="text-parchment/55 text-[11px] truncate">{t.source}</p>
                    <span
                      className="pill text-[10px]"
                      style={{ borderColor: `${t.accent}60`, color: t.accent }}
                    >
                      Unfold
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </>
      ) : (
        /* Sahasranama mode */
        <>
          <p className="text-center text-parchment/55 text-xs uppercase tracking-[0.3em] mb-8">
            A sampling of {SAHASRANAMA.length} from the 1000 names — recited at Yudhiṣṭhira's bedside request
          </p>
          <div className="glass p-4 sm:p-6 max-w-4xl mx-auto mb-8">
            <p className="font-quote italic text-parchment/85 text-center text-sm sm:text-base leading-relaxed">
              “He who reads these thousand names of Vāsudeva, the lord of the worlds,<br />
              every morning with a clear mind — fear of him departs from death, sorrow, and sin.”
              <br />
              <span className="text-parchment/60 text-xs not-italic mt-2 inline-block">
                — Anuśāsana Parva, the phala-śruti of the Sahasranāma
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAHASRANAMA.map((n) => (
              <article
                key={n.id}
                className="glass p-4 flex items-start gap-3 border-gold/25"
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-gold border border-gold/40 bg-gold/10 text-xs"
                  aria-hidden
                >
                  {n.number}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sanskrit text-goldlight text-base leading-tight">{n.sanskrit}</p>
                  <p className="font-display text-parchment text-sm">{n.name}</p>
                  <p className="text-parchment/65 text-xs mt-1 leading-snug">{n.meaning}</p>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {/* Modal for teachings */}
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
                    {BRANCH_META[open.branch].label}
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

            <p className="text-parchment/55 text-xs italic mb-4">{open.source}</p>

            <blockquote
              className="border-l-4 pl-4 py-2 italic font-quote text-parchment text-lg leading-relaxed mb-5"
              style={{
                borderColor: open.accent,
                background: `linear-gradient(90deg, ${open.accent}11, transparent)`,
              }}
              dangerouslySetInnerHTML={{ __html: `“${renderBold(open.precept, open.accent)}”` }}
            />

            <div className="space-y-3 mb-5">
              {open.exposition.map((p, i) => (
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
              <span aria-hidden className="text-2xl" style={{ color: open.accent }}>🪔</span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                  Exemplar in the epic
                </p>
                <p
                  className="text-parchment/90 font-quote italic"
                  dangerouslySetInnerHTML={{ __html: renderBold(open.exemplar, open.accent) }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
