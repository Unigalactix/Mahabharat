import React, { useEffect } from 'react';
import { Parva } from '../types';

interface ParvaModalProps {
  parva: Parva | null;
  onClose: () => void;
}

export const ParvaModal: React.FC<ParvaModalProps> = ({ parva, onClose }) => {
  useEffect(() => {
    if (!parva) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [parva, onClose]);

  if (!parva) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="parva-modal-title"
    >
      <div
        className="glass max-w-3xl w-full my-8 p-6 sm:p-10 relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderColor: `${parva.accent}55`,
          boxShadow: `0 30px 80px -20px ${parva.accent}44, 0 0 0 1px ${parva.accent}22 inset`,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full border border-gold/30 text-goldlight hover:bg-gold/15 transition text-lg leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <div className="text-center">
          <div
            className="font-display text-5xl mb-2"
            style={{ color: parva.accent, textShadow: `0 0 24px ${parva.accent}66` }}
          >
            {String(parva.number).padStart(2, '0')}
          </div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-parchment/55">Maha-Parva</p>
          <p className="font-sanskrit text-goldlight/85 text-xl mt-3">{parva.sanskrit}</p>
          <h2
            id="parva-modal-title"
            className="font-display text-3xl sm:text-4xl mt-1"
            style={{ color: parva.accent }}
          >
            {parva.name}
          </h2>
          <p className="font-quote italic text-parchment/75 mt-1">{parva.meaning}</p>
        </div>

        <div className="hr-ornate my-6" aria-hidden />

        <div>
          <h3 className="font-display text-gold tracking-wide text-lg mb-2">Narrative</h3>
          <p className="text-parchment/85 leading-relaxed whitespace-pre-line">{parva.summary}</p>
        </div>

        {parva.keyEvents && parva.keyEvents.length > 0 && (
          <div className="mt-6">
            <h3 className="font-display text-gold tracking-wide text-lg mb-3">Key Events</h3>
            <ol className="space-y-2">
              {parva.keyEvents.map((event, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-parchment/85 text-sm leading-relaxed border-l-2 pl-4 py-1"
                  style={{ borderColor: parva.accent }}
                >
                  <span
                    className="font-display text-sm shrink-0"
                    style={{ color: parva.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{event}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParvaModal;
