import React, { useEffect } from 'react';
import { Character } from '../types';

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose }) => {
  useEffect(() => {
    if (!character) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [character, onClose]);

  if (!character) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="character-modal-title"
    >
      <div
        className="glass max-w-3xl w-full my-8 p-6 sm:p-10 relative"
        onClick={(e) => e.stopPropagation()}
        style={{ borderColor: `${character.accent}55`, boxShadow: `0 30px 80px -20px ${character.accent}44, 0 0 0 1px ${character.accent}22 inset` }}
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
          <div className="text-6xl mb-3" style={{ color: character.accent }}>
            {character.glyph}
          </div>
          <p className="font-sanskrit text-goldlight/85 text-xl">{character.sanskrit}</p>
          <h2
            id="character-modal-title"
            className="font-display text-3xl sm:text-4xl mt-1"
            style={{ color: character.accent }}
          >
            {character.name}
          </h2>
          <p className="font-quote italic text-parchment/80 mt-1">{character.epithet}</p>
        </div>

        <blockquote
          className="my-6 font-quote italic text-center text-lg sm:text-xl text-goldlight/90 px-4 py-4 border-y"
          style={{ borderColor: `${character.accent}40` }}
        >
          “{character.quote}”
        </blockquote>

        <div className="grid grid-cols-2 gap-3 text-sm text-parchment/90">
          <Fact label="Alignment" value={character.alignment} accent={character.accent} />
          <Fact label="Affiliation" value={character.affiliation} accent={character.accent} />
          <Fact label="Origin" value={character.origin} accent={character.accent} />
          <Fact label="Era" value={character.era} accent={character.accent} />
          <Fact label="Weapon" value={character.weapon} accent={character.accent} />
          <Fact label="Rarity" value={character.rarity.toUpperCase()} accent={character.accent} />
        </div>

        <div className="mt-7">
          <h3 className="font-display text-gold tracking-wide text-lg mb-2">Lore</h3>
          <p className="text-parchment/85 leading-relaxed whitespace-pre-line">{character.lore}</p>
        </div>

        {character.abilities && character.abilities.length > 0 && (
          <div className="mt-6">
            <h3 className="font-display text-gold tracking-wide text-lg mb-2">Divine Abilities</h3>
            <ul className="flex flex-wrap gap-2">
              {character.abilities.map((a) => (
                <li key={a} className="pill text-xs" style={{ borderColor: `${character.accent}66`, color: character.accent }}>
                  ✦ {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        {character.keyMoments && character.keyMoments.length > 0 && (
          <div className="mt-6">
            <h3 className="font-display text-gold tracking-wide text-lg mb-3">Key Moments</h3>
            <ol className="space-y-3">
              {character.keyMoments.map((km, i) => (
                <li key={i} className="border-l-2 pl-4" style={{ borderColor: character.accent }}>
                  <p className="font-display text-goldlight">{km.title}</p>
                  <p className="text-xs uppercase tracking-wider text-parchment/55">{km.parva}</p>
                  <p className="text-parchment/85 mt-1 text-sm leading-relaxed">{km.description}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

const Fact: React.FC<{ label: string; value: string; accent: string }> = ({ label, value, accent }) => (
  <div className="p-3 rounded-md border bg-royal/30" style={{ borderColor: `${accent}30` }}>
    <div className="text-[10px] tracking-widest uppercase text-parchment/55">{label}</div>
    <div className="font-display text-base" style={{ color: accent }}>{value}</div>
  </div>
);

export default CharacterModal;
