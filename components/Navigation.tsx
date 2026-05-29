import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  to: string;
  label: string;
  glyph: string;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/',             label: 'Home',         glyph: '🕉️' },
  { to: '/characters',   label: 'Characters',   glyph: '🏹' },
  { to: '/parvas',       label: 'Parvas',       glyph: '📜' },
  { to: '/episodes',     label: 'Episodes',     glyph: '✨' },
  { to: '/backstories',  label: 'Backstories',  glyph: '📜' },
  { to: '/upakhyanas',   label: 'Upākhyānas',   glyph: '📚' },
  { to: '/vows',         label: 'Vows & Curses', glyph: '⚖️' },
  { to: '/relics',       label: 'Relics',       glyph: '🏹' },
  { to: '/vanavasa',     label: 'Vanavāsa',     glyph: '🌲' },
  { to: '/agnatavasa',   label: 'Agnātavāsa',   glyph: '🎭' },
  { to: '/krishna',      label: 'Krishna',      glyph: '🪈' },
  { to: '/vishwarupa',   label: 'Vishwarūpa',   glyph: '🌌' },
  { to: '/kurukshetra',  label: 'Kurukshetra',  glyph: '⚔️' },
  { to: '/gita',         label: 'Gītā',         glyph: '📖' },
  { to: '/teachings',    label: 'Teachings',    glyph: '🪴' },
  { to: '/houses',       label: 'Houses',       glyph: '👑' },
  { to: '/family-tree',  label: 'Lineage',      glyph: '🌳' },
  { to: '/kshetras',     label: 'Kshetras',     glyph: '🛕' },
  { to: '/antya',        label: 'Antya',        glyph: '🌅' },
];

export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink/70 border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
        <NavLink to="/" className="flex items-center gap-2 group shrink-0">
          <span className="text-3xl group-hover:scale-110 transition-transform">🕉️</span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-gold tracking-wider text-base sm:text-lg">
              Mahabharata
            </span>
            <span className="font-sanskrit text-goldlight/70 text-xs">
              महाभारत · कोडेक्स
            </span>
          </div>
        </NavLink>

        <nav className="flex flex-wrap gap-2 ml-auto">
          {NAV_ITEMS.slice(1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `pill text-xs sm:text-[13px] ${
                  isActive
                    ? 'bg-gold/20 border-gold/70 text-goldlight shadow-[0_0_16px_rgba(212,175,55,.35)]'
                    : 'text-parchment/80 hover:text-goldlight'
                }`
              }
            >
              <span className="mr-1.5">{item.glyph}</span>
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('mbh:open-search'))}
            title="Search the codex (⌘K or /)"
            aria-label="Open search palette"
            className="pill text-xs sm:text-[13px] text-parchment/80 hover:text-goldlight border-gold/30 flex items-center gap-1.5"
          >
            <span aria-hidden>🔍</span>
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:inline-block text-[9px] border border-parchment/25 rounded px-1 ml-1">
              ⌘K
            </kbd>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
