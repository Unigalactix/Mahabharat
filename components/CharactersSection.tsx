
import React from 'react';
import { Character } from '../types';
import CharacterCard from './CharacterCard';

interface CharactersSectionProps {
  characters: Character[];
}

const CharactersSection: React.FC<CharactersSectionProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {characters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </div>
  );
};

export default CharactersSection;
