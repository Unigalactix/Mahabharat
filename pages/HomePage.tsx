import React from 'react';


const HomePage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-4xl font-bold text-amber-300 mb-8">Welcome to The Mahabharata Epic Infographic</h2>
    <p className="text-lg text-slate-300 mb-6">
      This interactive website is your gateway to exploring the legendary Indian epic, the Mahabharata. Dive into the stories, characters, and events that shaped one of the world’s greatest tales of duty, destiny, and dharma.
    </p>
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-amber-200 mb-2">What You’ll Find Here</h3>
      <ul className="list-disc pl-6 text-slate-200 space-y-2">
        <li><span className="text-amber-400 font-bold">Family Tree:</span> Visualize the dynasties, relationships, and key figures of the Kuru lineage.</li>
        <li><span className="text-amber-400 font-bold">Parvas:</span> Discover the 18 Parvas (books) of the Mahabharata, each with summaries and key moments.</li>
        <li><span className="text-amber-400 font-bold">Key Moments:</span> Relive the most dramatic and pivotal events of the epic.</li>
        <li><span className="text-amber-400 font-bold">Kurukshetra Battlefield:</span> Explore a mind map of the 18-day war, with participants and alliances visualized.</li>
        <li><span className="text-amber-400 font-bold">Participants:</span> Meet the heroes, villains, and legendary warriors who shaped the outcome.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-amber-200 mb-2">How to Use This Site</h3>
      <ul className="list-disc pl-6 text-slate-200 space-y-2">
        <li>Use the <span className="text-amber-400 font-bold">menu bar</span> at the top to navigate between sections.</li>
        <li>Click on <span className="text-amber-400 font-bold">nodes</span> in the Family Tree and Mind Map for more details.</li>
        <li>Enjoy sound effects and interactive pop-ups for a richer experience.</li>
        <li>All content is based on Vyasa’s Mahabharata, with a focus on clarity and visual storytelling.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-amber-200 mb-2">About the Mahabharata</h3>
      <p className="text-slate-300">The Mahabharata is an ancient Indian epic that tells the story of the Kuru dynasty, the great war of Kurukshetra, and the timeless lessons of dharma, fate, and family. Its stories, characters, and teachings continue to inspire millions around the world.</p>
    </div>
    <div className="text-center text-slate-400 mt-10">
      <span className="italic">May your journey through the Mahabharata be enlightening and inspiring!</span>
    </div>
  </div>
);

export default HomePage;
