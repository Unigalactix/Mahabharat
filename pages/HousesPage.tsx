import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { HOUSES } from '../data/houses';
import { House } from '../types';

type SideKey = 'all' | 'Pandava' | 'Allied-Pandava' | 'Kaurava' | 'Allied-Kaurava' | 'Neutral' | 'Divine';

const SIDE_FILTERS: { key: SideKey; label: string; sanskrit: string; accent: string }[] = [
  { key: 'all',             label: 'All',              sanskrit: 'सर्वे',         accent: '#FFD700' },
  { key: 'Pandava',         label: 'Pandava',          sanskrit: 'पाण्डव-पक्षः',  accent: '#10B981' },
  { key: 'Allied-Pandava',  label: 'Allied · Pandava', sanskrit: 'पाण्डव-मित्रम्', accent: '#34D399' },
  { key: 'Kaurava',         label: 'Kaurava',          sanskrit: 'कौरव-पक्षः',   accent: '#B91C1C' },
  { key: 'Allied-Kaurava',  label: 'Allied · Kaurava', sanskrit: 'कौरव-मित्रम्',  accent: '#F87171' },
  { key: 'Neutral',         label: 'Neutral',          sanskrit: 'उदासीनः',       accent: '#94A3B8' },
  { key: 'Divine',          label: 'Divine',           sanskrit: 'दिव्यः',         accent: '#E879F9' },
];

const HouseCard: React.FC<{ h: House; onOpen: (h: House) => void }> = ({ h, onOpen }) => (
  <button
    type="button"
    onClick={() => onOpen(h)}
    className="codex-card text-left w-full"
    style={{ borderColor: `${h.accent}55` }}
    aria-label={`Open house of ${h.name}`}
  >
    <div className="flex items-start gap-3">
      <div
        className="codex-glyph shrink-0"
        style={{
          background: `radial-gradient(circle, ${h.accent}33, ${h.accent}11)`,
          border: `1px solid ${h.accent}88`,
          boxShadow: `0 0 18px ${h.accent}66`,
          color: h.accent,
          fontSize: 28,
        }}
      >
        {h.banner}
      </div>
      <div className="min-w-0">
        <p className="font-sanskrit text-goldlight/85 text-sm">{h.sanskrit}</p>
        <h3 className="font-display text-lg leading-tight" style={{ color: h.accent }}>
          {h.name}
        </h3>
        <p className="text-parchment/65 text-[11px] mt-1 uppercase tracking-[0.2em]">
          {h.capital} · {h.side}
        </p>
      </div>
    </div>
    <p className="text-parchment/80 text-sm leading-relaxed line-clamp-3">{h.description}</p>
  </button>
);

const HouseModal: React.FC<{ h: House | null; onClose: () => void }> = ({ h, onClose }) => {
  React.useEffect(() => {
    if (!h) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [h, onClose]);

  if (!h) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(8,6,15,.85)', backdropFilter: 'blur(6px)' }}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <article
        className="glass max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 relative"
        style={{ borderColor: `${h.accent}80`, boxShadow: `0 0 60px ${h.accent}55` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-parchment/60 hover:text-goldlight text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-start gap-4 mb-5">
          <div
            className="codex-glyph shrink-0"
            style={{
              background: `radial-gradient(circle, ${h.accent}44, ${h.accent}11)`,
              border: `1px solid ${h.accent}`,
              boxShadow: `0 0 24px ${h.accent}88`,
              color: h.accent, fontSize: 36,
            }}
          >
            {h.banner}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55">{h.side}</p>
            <p className="font-sanskrit text-goldlight text-lg">{h.sanskrit}</p>
            <h2 className="font-display text-3xl" style={{ color: h.accent }}>{h.name}</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mb-5 text-sm">
          <div>
            <p className="text-parchment/55 text-[10px] uppercase tracking-[0.25em]">Capital</p>
            <p className="text-parchment/95">{h.capital}</p>
          </div>
          <div>
            <p className="text-parchment/55 text-[10px] uppercase tracking-[0.25em]">Region</p>
            <p className="text-parchment/95">{h.region}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-parchment/55 text-[10px] uppercase tracking-[0.25em]">Patriarch</p>
            <p className="text-parchment/95">{h.patriarch}</p>
          </div>
        </div>
        <p className="text-parchment/85 leading-relaxed mb-4">{h.description}</p>
        <div className="hr-ornate my-4" aria-hidden />
        <h4 className="text-parchment/60 uppercase tracking-[0.3em] text-xs mb-2">
          Notable members
        </h4>
        <ul className="flex flex-wrap gap-2 mb-5">
          {h.notableMembers.map((m, i) => (
            <li
              key={i}
              className="pill text-[11px]"
              style={{ borderColor: `${h.accent}55`, color: 'rgba(245,232,201,.85)' }}
            >
              {m}
            </li>
          ))}
        </ul>
        <div className="hr-ornate my-4" aria-hidden />
        <h4 className="text-parchment/60 uppercase tracking-[0.3em] text-xs mb-2">Legacy</h4>
        <p className="text-parchment/85 italic font-quote leading-relaxed">{h.legacy}</p>
      </article>
    </div>
  );
};

export const HousesPage: React.FC = () => {
  const [side, setSide] = useState<SideKey>('all');
  const [open, setOpen] = useState<House | null>(null);

  const filtered = useMemo(() => {
    if (side === 'all') return HOUSES;
    return HOUSES.filter((h) => h.side === side);
  }, [side]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="कुलानि भारतवर्षस्य"
        title="The Noble Houses of Bhāratavarṣa"
        subtitle="Twenty-three royal lines whose chariots, alliances, and grudges shaped the eighteen days. Sides are marked as they stood on the final day of the war."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {SIDE_FILTERS.map((f) => {
          const active = f.key === side;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setSide(f.key)}
              className="rounded-full px-3 py-1.5 text-xs font-display border transition"
              style={{
                background: active ? `${f.accent}30` : 'transparent',
                borderColor: active ? f.accent : `${f.accent}55`,
                color: active ? '#fdf4d6' : `${f.accent}cc`,
                boxShadow: active ? `0 0 14px ${f.accent}88` : 'none',
              }}
              aria-pressed={active}
            >
              <span className="font-sanskrit mr-2 opacity-80">{f.sanskrit}</span>
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="text-center text-parchment/55 text-xs uppercase tracking-[0.3em] mb-6">
        Showing {filtered.length} of {HOUSES.length}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((h) => (
          <HouseCard key={h.id} h={h} onOpen={setOpen} />
        ))}
      </div>

      <HouseModal h={open} onClose={() => setOpen(null)} />

      <p className="text-center text-parchment/55 text-xs mt-10 italic">
        Click any house to read its full chronicle
      </p>
    </main>
  );
};

export default HousesPage;
