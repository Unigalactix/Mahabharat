import React from 'react';
import { Parva } from '../types';

interface ParvaTileProps {
  parva: Parva;
  onOpen?: (parva: Parva) => void;
}

export const ParvaTile: React.FC<ParvaTileProps> = ({ parva, onOpen }) => {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(parva)}
      className="glass glass-hover parva-tile text-left p-5 w-full h-full flex flex-col gap-3 relative overflow-hidden"
      style={{ borderColor: `${parva.accent}40` }}
    >
      <div
        aria-hidden
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20"
        style={{ background: `radial-gradient(circle, ${parva.accent}, transparent 70%)` }}
      />

      <div className="flex items-start justify-between gap-3 relative">
        <div
          className="parva-num font-display text-3xl"
          style={{ color: parva.accent, textShadow: `0 0 18px ${parva.accent}66` }}
        >
          {String(parva.number).padStart(2, '0')}
        </div>
        <span
          className="pill text-[10px] shrink-0"
          style={{ borderColor: `${parva.accent}60`, color: parva.accent }}
        >
          PARVA
        </span>
      </div>

      <div className="relative">
        <p className="font-sanskrit text-goldlight/85 text-base">{parva.sanskrit}</p>
        <h3 className="font-display text-xl text-gradient-gold mt-0.5">{parva.name}</h3>
        <p className="text-parchment/65 text-xs italic mt-1">{parva.meaning}</p>
      </div>

      <p className="text-parchment/80 text-sm leading-relaxed line-clamp-3 relative">
        {parva.summary}
      </p>

      <div className="mt-auto flex items-center justify-between pt-2 relative">
        <span className="text-[10px] uppercase tracking-widest text-parchment/55">
          {parva.keyEvents.length} key events
        </span>
        <span className="text-goldlight/80 text-sm">Read →</span>
      </div>
    </button>
  );
};

export default ParvaTile;
