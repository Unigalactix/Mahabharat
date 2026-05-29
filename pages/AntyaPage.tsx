import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ANTYA, ARC_META } from '../data/antya';
import { AntyaScene } from '../types';

type ArcFilter = 'all' | AntyaScene['arc'];

const ARC_FILTERS: { key: ArcFilter; label: string; sanskrit: string }[] = [
  { key: 'all',            label: 'All',          sanskrit: 'सर्वम्' },
  { key: 'Mausala',        label: 'Mausala',      sanskrit: 'मौसल' },
  { key: 'Mahaprasthana',  label: 'Mahāprasthāna',sanskrit: 'महाप्रस्थान' },
  { key: 'Svargarohana',   label: 'Svargārohaṇa', sanskrit: 'स्वर्गारोहण' },
  { key: 'Sarpa-Yajna',    label: 'Sarpa-Yajña',  sanskrit: 'सर्पयज्ञ' },
];

const renderBold = (s: string, accent: string) =>
  s.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${accent}">$1</strong>`);

export const AntyaPage: React.FC = () => {
  const [arc, setArc] = useState<ArcFilter>('all');
  const [open, setOpen] = useState<AntyaScene | null>(null);

  const filtered = useMemo(
    () =>
      (arc === 'all' ? ANTYA : ANTYA.filter((s) => s.arc === arc)).slice()
        .sort((a, b) => {
          const order: AntyaScene['arc'][] = ['Mausala', 'Mahaprasthana', 'Svargarohana', 'Sarpa-Yajna'];
          const ai = order.indexOf(a.arc);
          const bi = order.indexOf(b.arc);
          if (ai !== bi) return ai - bi;
          return a.order - b.order;
        }),
    [arc]
  );

  // Group by arc when "all"
  const grouped = useMemo(() => {
    const map = new Map<AntyaScene['arc'], AntyaScene[]>();
    filtered.forEach((s) => {
      if (!map.has(s.arc)) map.set(s.arc, []);
      map.get(s.arc)!.push(s);
    });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="अन्त्यपर्वाणि"
        title="The Antya Parvas — How the Story Ends"
        subtitle="The grandfather has died. The war is thirty-six years gone. Now the Yādavas turn the reeds into clubs, the brothers walk into snow, a dog reveals himself as Dharma, a king refuses heaven for hell, and a boy at a snake-altar hears the epic sung for the first time. Eighteen parvas. Fourteen scenes. The wheel closes."
      />

      {/* Arc filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {ARC_FILTERS.map((f) => {
          const isActive = arc === f.key;
          const meta = f.key !== 'all' ? ARC_META[f.key] : null;
          const activeColor = meta?.accent ?? '#D4AF37';
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setArc(f.key)}
              className={`pill text-xs sm:text-sm ${
                isActive ? 'text-goldlight' : 'text-parchment/80 hover:text-goldlight'
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
        {filtered.length} of {ANTYA.length} scenes
      </p>

      {/* Arc sections */}
      <div className="space-y-14">
        {grouped.map(([arcKey, scenes]) => {
          const meta = ARC_META[arcKey];
          return (
            <section key={arcKey}>
              {/* Arc header */}
              <header
                className="glass p-5 sm:p-6 mb-6 flex items-start gap-4 border"
                style={{
                  borderColor: `${meta.accent}55`,
                  background: `linear-gradient(135deg, ${meta.accent}18, transparent 70%)`,
                }}
              >
                <span
                  aria-hidden
                  className="text-5xl shrink-0"
                  style={{ filter: `drop-shadow(0 0 14px ${meta.accent})` }}
                >
                  {meta.glyph}
                </span>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-parchment/55 mb-1">
                    {meta.parva}
                  </p>
                  <p className="font-sanskrit text-goldlight/85 text-lg leading-tight">
                    {meta.sanskrit}
                  </p>
                  <h3
                    className="font-display text-2xl sm:text-3xl leading-tight mb-2"
                    style={{ color: meta.accent }}
                  >
                    {meta.label}
                  </h3>
                  <p className="text-parchment/85 italic font-quote">{meta.tagline}</p>
                </div>
              </header>

              {/* Timeline-style scene list */}
              <ol className="relative border-l-2 pl-6 ml-3 space-y-5"
                  style={{ borderColor: `${meta.accent}55` }}>
                {scenes.map((s) => (
                  <li key={s.id} className="relative">
                    {/* Node */}
                    <span
                      className="absolute -left-[34px] top-3 w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs"
                      style={{
                        borderColor: meta.accent,
                        background: '#0b0a16',
                        boxShadow: `0 0 12px ${meta.accent}`,
                      }}
                      aria-hidden
                    >
                      {s.order}
                    </span>
                    <article
                      className="glass glass-hover p-5 cursor-pointer"
                      style={{ borderColor: `${s.accent}40` }}
                      onClick={() => setOpen(s)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setOpen(s);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <span
                          aria-hidden
                          className="text-3xl"
                          style={{ filter: `drop-shadow(0 0 10px ${s.accent})` }}
                        >
                          {s.glyph}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-sanskrit text-goldlight/80 text-xs mb-0.5">
                            {s.sanskrit}
                          </p>
                          <h4
                            className="font-display text-lg sm:text-xl leading-tight"
                            style={{ color: s.accent }}
                          >
                            {s.title}
                          </h4>
                        </div>
                      </div>
                      <p
                        className="text-parchment/80 text-sm leading-relaxed line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: renderBold(s.setting, s.accent) }}
                      />
                      <div className="flex items-center justify-between gap-2 mt-3">
                        <p className="text-parchment/55 text-[11px] truncate">
                          {s.characters.slice(0, 4).join(' · ')}
                          {s.characters.length > 4 ? '…' : ''}
                        </p>
                        <span
                          className="pill text-[10px]"
                          style={{ borderColor: `${s.accent}60`, color: s.accent }}
                        >
                          Unfold
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </section>
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
                    {ARC_META[open.arc].label} · scene {open.order}
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

            <div
              className="rounded-lg p-4 mb-5 border italic font-quote text-parchment/90 leading-relaxed"
              style={{
                borderColor: `${open.accent}55`,
                background: `linear-gradient(90deg, ${open.accent}11, transparent)`,
              }}
              dangerouslySetInnerHTML={{ __html: renderBold(open.setting, open.accent) }}
            />

            <div className="flex flex-wrap gap-1.5 mb-5">
              {open.characters.map((c) => (
                <span
                  key={c}
                  className="pill text-[10px]"
                  style={{ borderColor: `${open.accent}40`, color: open.accent }}
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="space-y-3 mb-5">
              {open.narrative.map((p, i) => (
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
                  Vyāsa's reflection
                </p>
                <p className="text-parchment/90 font-quote italic">{open.reflection}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
