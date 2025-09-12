import React from 'react';
import CharactersSection from '../components/CharactersSection';
import { CHARACTERS } from '../constants';

const ParticipantsPage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-bold text-amber-300 mb-8">Key Participants in the War</h2>
    <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
      From the hundred Kaurava brothers to the many sons of the Pandavas, the war involved a vast network of individuals. Explore the key combatants, grandsires, gurus, and allies whose choices and fates defined the epic conflict. Click a card to learn more.
    </p>
    <CharactersSection characters={CHARACTERS} />
  </div>
);

export default ParticipantsPage;
