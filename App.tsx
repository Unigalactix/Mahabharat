import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { GlossaryDrawer } from './components/GlossaryDrawer';

// Home stays eager — it's the landing route, always needed first paint.
import { HomePage } from './pages/HomePage';

// All other pages are split into their own chunks; Vite gives each its own file.
const CharactersPage  = lazy(() => import('./pages/CharactersPage').then(m => ({ default: m.CharactersPage })));
const ParvasPage      = lazy(() => import('./pages/ParvasPage').then(m => ({ default: m.ParvasPage })));
const EpisodesPage    = lazy(() => import('./pages/EpisodesPage').then(m => ({ default: m.EpisodesPage })));
const BackstoriesPage = lazy(() => import('./pages/BackstoriesPage').then(m => ({ default: m.BackstoriesPage })));
const UpakhyanasPage  = lazy(() => import('./pages/UpakhyanasPage').then(m => ({ default: m.UpakhyanasPage })));
const VowsPage        = lazy(() => import('./pages/VowsPage').then(m => ({ default: m.VowsPage })));
const RelicsPage      = lazy(() => import('./pages/RelicsPage').then(m => ({ default: m.RelicsPage })));
const VanavasaPage    = lazy(() => import('./pages/VanavasaPage').then(m => ({ default: m.VanavasaPage })));
const AgnatavasaPage  = lazy(() => import('./pages/AgnatavasaPage').then(m => ({ default: m.AgnatavasaPage })));
const KrishnaPage     = lazy(() => import('./pages/KrishnaPage').then(m => ({ default: m.KrishnaPage })));
const VishwarupaPage  = lazy(() => import('./pages/VishwarupaPage').then(m => ({ default: m.VishwarupaPage })));
const KurukshetraPage = lazy(() => import('./pages/KurukshetraPage').then(m => ({ default: m.KurukshetraPage })));
const GitaPage        = lazy(() => import('./pages/GitaPage').then(m => ({ default: m.GitaPage })));
const TeachingsPage   = lazy(() => import('./pages/TeachingsPage').then(m => ({ default: m.TeachingsPage })));
const HousesPage      = lazy(() => import('./pages/HousesPage').then(m => ({ default: m.HousesPage })));
const FamilyTreePage  = lazy(() => import('./pages/FamilyTreePage').then(m => ({ default: m.FamilyTreePage })));
const KshetrasPage    = lazy(() => import('./pages/KshetrasPage').then(m => ({ default: m.KshetrasPage })));
const AntyaPage       = lazy(() => import('./pages/AntyaPage').then(m => ({ default: m.AntyaPage })));

// Per-route document titles. Keeps the browser tab + bookmarks honest, and helps
// search-engine crawlers (Google does execute hash routes for SPAs).
const ROUTE_TITLES: Record<string, string> = {
  '/':            'Mahābhārata Codex — Vyāsa\'s Eternal Epic',
  '/characters':  'Characters · Mahābhārata Codex',
  '/parvas':      'The 18 Parvas · Mahābhārata Codex',
  '/episodes':    'Episodes · Mahābhārata Codex',
  '/backstories': 'Ādi-Parva Backstories · Mahābhārata Codex',
  '/upakhyanas':  'Upākhyānas — Inset Tales · Mahābhārata Codex',
  '/vows':        'Pratijñās & Śāpas — Vows & Curses · Mahābhārata Codex',
  '/relics':      'Astras, Conches & Chariots · Mahābhārata Codex',
  '/vanavasa':    'Vanavāsa — The Forest Years · Mahābhārata Codex',
  '/agnatavasa':  'Agnātavāsa — The Hidden Year · Mahābhārata Codex',
  '/krishna':     'Kṛṣṇa · Mahābhārata Codex',
  '/vishwarupa':  'Viśvarūpa — The Cosmic Form · Mahābhārata Codex',
  '/kurukshetra': 'Kurukṣetra — 18 Days · Mahābhārata Codex',
  '/gita':        'Bhagavad Gītā · Mahābhārata Codex',
  '/teachings':   'Śānti & Anuśāsana Teachings · Mahābhārata Codex',
  '/houses':      'Noble Houses · Mahābhārata Codex',
  '/family-tree': 'Lineage of the Lunar Dynasty · Mahābhārata Codex',
  '/kshetras':    'Sacred Kshetras · Mahābhārata Codex',
  '/antya':       'The Antya Parvas — How the Story Ends · Mahābhārata Codex',
};

const RouteTitle: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = ROUTE_TITLES[pathname] ?? 'Mahābhārata Codex';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const PageLoader: React.FC = () => (
  <div className="max-w-7xl mx-auto px-6 py-24 text-center">
    <div className="inline-flex items-center gap-3 text-parchment/60">
      <span className="text-3xl animate-pulse">🕉️</span>
      <span className="font-sanskrit text-goldlight/80">क्षणं प्रतीक्षस्व…</span>
    </div>
  </div>
);

const App: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-ink text-parchment">
    <RouteTitle />
    <Navigation />

    <div className="flex-1">
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/antya"        element={<AntyaPage />} />
          <Route path="*"             element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>

    <Footer />

    {/* Global UI: ⌘K palette + Sanskrit glossary drawer */}
    <CommandPalette />
    <GlossaryDrawer />
  </div>
);

export default App;
