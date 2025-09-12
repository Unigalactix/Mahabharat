
import React, { useState } from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 w-full h-80 sm:h-96 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped); }}
      aria-pressed={isFlipped}
      aria-label={`Learn more about ${character.name}`}
    >
      <div 
        className={`relative w-full h-full preserve-3d transition-all duration-700 ease-in-out group-hover:scale-105 ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg shadow-black/30 border-2 border-slate-700 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-amber-500/10">
          <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-2xl font-bold text-white tracking-wide">{character.name}</h3>
            <p className="text-amber-300">{character.clan}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-lg shadow-black/30 border-2 border-amber-400/50 bg-gray-900 p-5 flex flex-col justify-center transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-amber-500/20">
          <h4 className="text-xl font-bold text-amber-400 mb-2">{character.role}</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {character.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;