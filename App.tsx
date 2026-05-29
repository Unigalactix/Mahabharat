import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { CharactersPage } from './pages/CharactersPage';
import { ParvasPage } from './pages/ParvasPage';
import { EpisodesPage } from './pages/EpisodesPage';
import { BackstoriesPage } from './pages/BackstoriesPage';
import { UpakhyanasPage } from './pages/UpakhyanasPage';
import { VowsPage } from './pages/VowsPage';
import { RelicsPage } from './pages/RelicsPage';
import { VanavasaPage } from './pages/VanavasaPage';
import { AgnatavasaPage } from './pages/AgnatavasaPage';
import { KrishnaPage } from './pages/KrishnaPage';
import { VishwarupaPage } from './pages/VishwarupaPage';
import { KurukshetraPage } from './pages/KurukshetraPage';
import { GitaPage } from './pages/GitaPage';
import { TeachingsPage } from './pages/TeachingsPage';
import { HousesPage } from './pages/HousesPage';
import { FamilyTreePage } from './pages/FamilyTreePage';
import { KshetrasPage } from './pages/KshetrasPage';

const App: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-ink text-parchment">
    <Navigation />

    <div className="flex-1">
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/characters"   element={<CharactersPage />} />
        <Route path="/parvas"       element={<ParvasPage />} />
        <Route path="/episodes"     element={<EpisodesPage />} />
        <Route path="/backstories"  element={<BackstoriesPage />} />
        <Route path="/upakhyanas"   element={<UpakhyanasPage />} />
        <Route path="/vows"         element={<VowsPage />} />
        <Route path="/relics"       element={<RelicsPage />} />
        <Route path="/vanavasa"     element={<VanavasaPage />} />
        <Route path="/agnatavasa"   element={<AgnatavasaPage />} />
        <Route path="/krishna"      element={<KrishnaPage />} />
        <Route path="/vishwarupa"   element={<VishwarupaPage />} />
        <Route path="/kurukshetra"  element={<KurukshetraPage />} />
        <Route path="/gita"         element={<GitaPage />} />
        <Route path="/teachings"    element={<TeachingsPage />} />
        <Route path="/houses"       element={<HousesPage />} />
        <Route path="/family-tree"  element={<FamilyTreePage />} />
        <Route path="/kshetras"     element={<KshetrasPage />} />
        <Route path="*"             element={<Navigate to="/" replace />} />
      </Routes>
    </div>

    <Footer />
  </div>
);

export default App;
