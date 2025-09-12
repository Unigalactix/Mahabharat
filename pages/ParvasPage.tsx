import React from 'react';
import ParvasSection from '../components/ParvasSection';

const ParvasPage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-bold text-amber-300 mb-8">Parvas</h2>
    <p className="text-lg mb-6 text-slate-300">The 18 Parvas (principal allies and warriors) of the Pandavas in Vyasa's Mahabharata, with brief descriptions and key moments:</p>
    <ParvasSection />
  </div>
);

export default ParvasPage;
