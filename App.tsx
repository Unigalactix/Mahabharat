import React from 'react';
import { CHARACTERS } from './data/characters';

// Temporary scaffold during the phased Mahabharata Codex redesign.
// Replaced in Phase 12 by the full router and pages.
const App: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center px-6 py-24">
    <div className="glass max-w-2xl w-full p-10 text-center">
      <div className="font-cinzel text-[11px] tracking-[.4em] uppercase text-goldlight/80 mb-4">
        Mahabharata Codex · under construction
      </div>
      <h1 className="font-display text-4xl md:text-6xl text-gradient-gold leading-tight">
        जय
      </h1>
      <p className="mt-6 font-serif-q italic text-[#ece2c8]">
        The Codex is being rebuilt phase by phase.
      </p>
      <p className="mt-4 text-xs tracking-widest uppercase text-[#c9bd9b]">
        {CHARACTERS.length} characters · {' '}foundation ready
      </p>
      <div className="hr-ornate mt-8"><span>✦</span></div>
    </div>
  </div>
);

export default App;
