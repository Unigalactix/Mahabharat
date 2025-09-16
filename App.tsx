import React from 'react';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import GaneshaChatbot from './components/GaneshaChatbot';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import FamilyTreePage from './pages/FamilyTreePage';
import ParvasPage from './pages/ParvasPage';
import KeyMomentsPage from './pages/KeyMomentsPage';
import ParticipantsPage from './pages/ParticipantsPage';
import KurukshetraPage from './pages/KurukshetraPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen text-slate-300 antialiased">
        <Header />
        <Navigation />
        <MenuBar />
        <main>
          <Routes>
            {/* Redirect root to /home */}
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/family-tree" element={<FamilyTreePage />} />
            <Route path="/parvas" element={<ParvasPage />} />
            <Route path="/kurukshetra" element={<KurukshetraPage />} />
            <Route path="/key-moments" element={<KeyMomentsPage />} />
            <Route path="/participants" element={<ParticipantsPage />} />
            {/* Catch-all route: redirect to /home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <footer className="text-center py-8 border-t border-slate-800 text-slate-500">
          <p>An Interactive Exploration of the Mahabharata</p>
        </footer>
        <GaneshaChatbot />
      </div>
    </Router>
  );
};

export default App;

