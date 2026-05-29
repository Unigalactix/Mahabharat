import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = { to: string; label: string; glyph: string };
type Divider = { divider: true };
type RailEntry = NavItem | Divider;

const isDivider = (e: RailEntry): e is Divider => (e as Divider).divider === true;

/**
 * Navigation rail — grouped thematically with subtle gold dividers.
 * The order matches the user's mental model of the codex; dividers mark
 * conceptual breaks (Story → Tales → Exile → Divine → War → World → End).
 */
const RAIL: RailEntry[] = [
  { to: '/', label: 'Home', glyph: '🕉️' },
  { to: '/characters', label: 'Characters', glyph: '👤' },
  { to: '/parvas', label: 'Parvas', glyph: '📜' },
  { to: '/episodes', label: 'Episodes', glyph: '🎭' },
  { divider: true },
  { to: '/backstories', label: 'Backstories', glyph: '🌿' },
  { to: '/upakhyanas', label: 'Upākhyānas', glyph: '📖' },
  { to: '/vows', label: 'Vows', glyph: '⚔️' },
  { to: '/relics', label: 'Relics', glyph: '🏹' },
  { divider: true },
  { to: '/vanavasa', label: 'Vanavāsa', glyph: '🌳' },
  { to: '/agnatavasa', label: 'Agnātavāsa', glyph: '🎭' },
  { divider: true },
  { to: '/krishna', label: 'Krishna', glyph: '🪷' },
  { to: '/vishwarupa', label: 'Vishwarūpa', glyph: '🌌' },
  { to: '/kurukshetra', label: 'Kurukshetra', glyph: '🔥' },
  { to: '/gita', label: 'Gītā', glyph: '🕉' },
  { to: '/teachings', label: 'Teachings', glyph: '📿' },
  { divider: true },
  { to: '/houses', label: 'Houses', glyph: '🏰' },
  { to: '/family-tree', label: 'Lineage', glyph: '🌳' },
  { to: '/kshetras', label: 'Kshetras', glyph: '🛕' },
  { divider: true },
  { to: '/antya', label: 'Antya', glyph: '🌅' },
];

const openSearch = () => window.dispatchEvent(new CustomEvent('mbh:open-search'));
const openGlossary = () => window.dispatchEvent(new CustomEvent('mbh:open-glossary'));

export const Navigation: React.FC = () => {
  return (
    <header className="nav-shell">
      {/* Tier 1 — Brand row + actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-2 flex items-center gap-3">
        <NavLink to="/" className="nav-brand flex items-center gap-3 group" aria-label="Mahabharata — Home">
          <span className="nav-brand-mark" aria-hidden="true">🕉️</span>
          <span className="flex flex-col leading-none">
            <span
              className="text-gold tracking-[0.18em] uppercase text-[15px] sm:text-[17px]"
              style={{ fontFamily: "'Cinzel Decorative', serif", fontWeight: 700 }}
            >
              Mahabharata
            </span>
            <span
              className="text-goldlight/70 text-[10px] sm:text-[11px] mt-1"
              style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: '0.04em' }}
            >
              महाभारत · कोडेक्स
            </span>
          </span>
        </NavLink>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={openGlossary}
            className="nav-action hidden md:inline-flex"
            aria-label="Open Sanskrit glossary"
            title="Sanskrit glossary (Shift+G)"
          >
            <span aria-hidden="true">सं</span>
            <span className="hidden lg:inline">Glossary</span>
            <kbd>⇧G</kbd>
          </button>
          <button
            type="button"
            onClick={openSearch}
            className="nav-action"
            aria-label="Open search"
            title="Search (⌘K)"
          >
            <span aria-hidden="true">🔍</span>
            <span className="hidden sm:inline">Search</span>
            <kbd>⌘K</kbd>
          </button>
        </div>
      </div>

      {/* Tier 2 — Horizontal rail with edge-fade masks */}
      <div className="max-w-7xl mx-auto nav-rail-wrap">
        <nav className="nav-rail" aria-label="Primary">
          {RAIL.map((entry, i) => {
            if (isDivider(entry)) {
              return <span key={`d-${i}`} className="nav-divider" aria-hidden="true" />;
            }
            return (
              <NavLink
                key={entry.to}
                to={entry.to}
                end={entry.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                <span className="nav-glyph" aria-hidden="true">{entry.glyph}</span>
                <span>{entry.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
