import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { CharacterCard } from '../components/CharacterCard';
import { CharacterModal } from '../components/CharacterModal';
import { CHARACTERS } from '../data/characters';
import { Character } from '../types';

type FilterKey = 'all' | 'pandava' | 'kaurava' | 'divine' | 'elder' | 'ally';

interface FilterDef {
  key: FilterKey;
  label: string;
  sanskrit: string;
  match: (c: Character) => boolean;
}

const FILTERS: FilterDef[] = [
  { key: 'all',     label: 'All',       sanskrit: 'सर्वे',     match: () => true },
  {
    key: 'pandava', label: 'Pandavas',  sanskrit: 'पाण्डवाः',
    match: (c) =>
      ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva', 'draupadi',
       'abhimanyu', 'ghatotkacha', 'kunti', 'pandu', 'subhadra'].includes(c.id),
  },
  {
    key: 'kaurava', label: 'Kauravas',  sanskrit: 'कौरवाः',
    match: (c) =>
      ['duryodhana', 'dushasana', 'karna', 'shakuni', 'jayadratha',
       'ashwatthama', 'dhritarashtra', 'gandhari'].includes(c.id),
  },
  {
    key: 'divine',  label: 'Divine',    sanskrit: 'दिव्याः',
    match: (c) =>
      ['krishna', 'balarama', 'vyasa'].includes(c.id) || c.rarity === 'mythic',
  },
  {
    key: 'elder',   label: 'Elders',    sanskrit: 'गुरवः',
    match: (c) =>
      ['bhishma', 'drona', 'kripa', 'vidura', 'dhritarashtra',
       'gandhari', 'kunti', 'pandu', 'vyasa'].includes(c.id),
  },
  {
    key: 'ally',    label: 'Allies',    sanskrit: 'मित्राणि',
    match: (c) =>
      ['satyaki', 'dhrishtadyumna', 'shikhandi', 'drupada', 'virata',
       'subhadra'].includes(c.id),
  },
];

export const CharactersPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [open, setOpen] = useState<Character | null>(null);

  const filtered = useMemo(() => {
    const def = FILTERS.find((f) => f.key === filter) ?? FILTERS[0];
    return CHARACTERS.filter(def.match);
  }, [filter]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="महाभारत पात्राणि"
        title="The Characters of the Codex"
        subtitle="Thirty souls — Pandavas, Kauravas, divinities, elders, and allies — whose vows, curses, and choices wove the eighteen-day war."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => {
          const active = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`pill text-xs sm:text-sm ${
                active
                  ? 'bg-gold/20 border-gold/70 text-goldlight shadow-[0_0_18px_rgba(212,175,55,.35)]'
                  : 'text-parchment/80 hover:text-goldlight'
              }`}
            >
              <span className="font-sanskrit mr-2 opacity-80">{f.sanskrit}</span>
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="text-center text-parchment/55 text-xs uppercase tracking-[0.3em] mb-6">
        Showing {filtered.length} of {CHARACTERS.length}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-parchment/60">
          No characters match this filter.
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filtered.map((c) => (
            <CharacterCard key={c.id} character={c} onOpen={setOpen} />
          ))}
        </div>
      )}

      <p className="text-center text-parchment/55 text-xs mt-8 italic">
        Tap a card to flip · click <em>Read Full Profile</em> for lore & key moments
      </p>

      <CharacterModal character={open} onClose={() => setOpen(null)} />
    </main>
  );
};

export default CharactersPage;
