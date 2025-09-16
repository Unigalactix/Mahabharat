import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/home', label: 'Home' },
  { path: '/parvas', label: 'Parvas' },
  { path: '/family-tree', label: 'Family Tree' },
  { path: '/kurukshetra', label: 'Kurukshetra' },
  { path: '/key-moments', label: 'Key Moments' },
  { path: '/participants', label: 'Participants' },
];

const Navigation: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="bg-slate-900 border-b border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" className="text-amber-300 text-xl font-bold">
            Mahabharat
          </Link>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-amber-600 text-white'
                    : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
