import React, { useState } from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  onOpen?: (character: Character) => void;
}

const RARITY_LABEL: Record<Character['rarity'], string> = {
  mythic: 'MYTHIC',
  legendary: 'LEGENDARY',
  epic: 'EPIC',
  rare: 'RARE',
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onOpen }) => {
  const [flipped, setFlipped] = useState(false);

  const accentStyle = { ['--accent' as any]: character.accent } as React.CSSProperties;

  return (
    <div
      className="tc-shell"
      style={{ perspective: '1400px', width: 260, height: 380 }}
    >
      <div
        className={`tc ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-label={`${character.name} card`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        style={accentStyle}
      >
        {/* FRONT */}
        <div className="tc-face">
          <div className="tc-inner">
            <div className="tc-holo" aria-hidden />

            <div className="tc-portrait">
              <span className="tc-glyph" style={{ color: character.accent }}>
                {character.glyph}
              </span>
            </div>

            <div className="px-4 pb-1">
              <p className="font-sanskrit text-center text-goldlight/85 text-sm tracking-wide">
                {character.sanskrit}
              </p>
              <h3 className="tc-name">{character.name}</h3>
              <p className="tc-epithet">{character.epithet}</p>
            </div>

            <div className="tc-stats">
              {character.stats.slice(0, 4).map((s) => (
                <div className="tc-stat" key={s.label}>
                  <span className="w-16 truncate">{s.label}</span>
                  <span className="tc-stat-bar">
                    <span
                      className="tc-stat-fill"
                      style={{ width: `${Math.min(100, s.value)}%` }}
                    />
                  </span>
                  <span className="tc-stat-val">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Overlays — outside .tc-inner so they aren't clipped */}
          <div className="tc-corner tl" aria-hidden />
          <div className="tc-corner br" aria-hidden />
          <div
            className="tc-rarity-badge"
            style={{ color: character.accent, borderColor: character.accent }}
          >
            {RARITY_LABEL[character.rarity]}
          </div>
          {/* Gold frame — its own element so mask-composite only clips the frame, not the content */}
          <div className={`tc-frame rarity-${character.rarity}`} aria-hidden />
        </div>

        {/* BACK */}
        <div className="tc-face tc-back">
          <div className="tc-back-inner">
            <div className="tc-back-title">{character.name}</div>
            <p className="font-sanskrit text-center text-goldlight/80 text-sm">
              {character.sanskrit}
            </p>

            <blockquote className="tc-quote">{character.quote}</blockquote>

            <div className="space-y-1.5 px-1">
              <div className="tc-fact-row">
                <strong>Affiliation</strong>
                <span>{character.affiliation}</span>
              </div>
              <div className="tc-fact-row">
                <strong>Weapon</strong>
                <span>{character.weapon}</span>
              </div>
              <div className="tc-fact-row">
                <strong>Origin</strong>
                <span>{character.origin}</span>
              </div>
              <div className="tc-fact-row">
                <strong>Era</strong>
                <span>{character.era}</span>
              </div>
            </div>

            {onOpen && (
              <button
                type="button"
                className="mt-auto btn-ghost text-[11px] py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen(character);
                }}
              >
                Read Full Profile
              </button>
            )}
          </div>
          {/* Gold frame overlay for back face too */}
          <div className={`tc-frame rarity-${character.rarity}`} aria-hidden />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
