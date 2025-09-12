import React from 'react';
import Timeline from '../components/Timeline';

const KeyMomentsPage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-bold text-amber-300 mb-8">Key Moments in the Mahabharata</h2>
    <p className="text-lg mb-6 text-slate-300">Explore the pivotal events that shaped the Mahabharata: the dice game, Draupadi's humiliation, Abhimanyu's fall, and more.</p>
    <Timeline />
  </div>
);

export default KeyMomentsPage;
