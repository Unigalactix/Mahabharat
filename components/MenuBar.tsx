import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MENU_OPTIONS = [
  { label: 'Home', path: '/' },
  { label: 'Family Tree', path: '/family-tree' },
  { label: 'Parvas', path: '/parvas' },
  { label: 'Kurukshetra', path: '/kurukshetra' },
  { label: 'Key Moments', path: '/key-moments' },
  { label: 'Participants', path: '/participants' },
];

const MenuBar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-center gap-8 py-6 bg-black/70 backdrop-blur-md rounded-xl shadow-lg mb-10">
      {MENU_OPTIONS.map(opt => (
        <Link
          key={opt.label}
          to={opt.path}
          className={`text-amber-300 font-semibold text-lg tracking-wide hover:text-white transition-colors duration-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 ${location.pathname === opt.path ? 'bg-amber-900/30' : ''}`}
        >
          {opt.label}
        </Link>
      ))}
    </nav>
  );
};

export default MenuBar;
