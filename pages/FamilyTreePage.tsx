import React from 'react';
import FamilyTree from '../components/FamilyTree';

const FamilyTreePage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-bold text-amber-300 mb-8">The Kuru-Bharata Dynasty</h2>
    <FamilyTree />
  </div>
);

export default FamilyTreePage;
