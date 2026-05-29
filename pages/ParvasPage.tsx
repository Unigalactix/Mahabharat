import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ParvaTile } from '../components/ParvaTile';
import { ParvaModal } from '../components/ParvaModal';
import { PARVAS } from '../data/parvas';
import { Parva } from '../types';

export const ParvasPage: React.FC = () => {
  const [open, setOpen] = useState<Parva | null>(null);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="अष्टादश पर्वाणि"
        title="The Eighteen Maha-Parvas"
        subtitle="Vyāsa's epic is divided into eighteen books — a Bharata of one hundred thousand verses. Each parva is a world; together they are the story of the world."
      />

      {/* Three-column responsive timeline-grid of all 18 parvas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PARVAS.map((p) => (
          <ParvaTile key={p.number} parva={p} onOpen={setOpen} />
        ))}
      </div>

      <p className="text-center text-parchment/55 text-xs mt-10 italic">
        Click any parva to read its narrative and key events
      </p>

      <ParvaModal parva={open} onClose={() => setOpen(null)} />
    </main>
  );
};

export default ParvasPage;
