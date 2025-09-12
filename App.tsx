import React from 'react';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import GaneshaChatbot from './components/GaneshaChatbot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
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
        <MenuBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/family-tree" element={<FamilyTreePage />} />
            <Route path="/parvas" element={<ParvasPage />} />
            <Route path="/kurukshetra" element={<KurukshetraPage />} />
            <Route path="/key-moments" element={<KeyMomentsPage />} />
            <Route path="/participants" element={<ParticipantsPage />} />
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

