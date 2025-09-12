
import React, { useState, useEffect } from 'react';
import { playSound } from '../utils/sound';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Play hero sound on mount if not scrolled
    if (window.scrollY <= 50) {
      playSound('hero.mp3');
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center text-center bg-cover bg-center text-white transition-all duration-500 ease-in-out ${isScrolled ? 'h-20 shadow-lg' : 'h-80 sm:h-96'}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80'), "+
            "radial-gradient(ellipse at 50% 40%, #ff7cfb 0%, #3b82f6 40%, #0f172a 100%)"
        }}
      >
        <div className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-md' : 'bg-black bg-opacity-60 backdrop-blur-sm'}`}></div>
        <div className="relative z-10 px-4 transition-all duration-500 ease-in-out">
          <h1
            className={`font-bold tracking-wider leading-tight text-amber-300 transition-all duration-500 ease-in-out ${isScrolled ? 'text-3xl' : 'text-5xl md:text-7xl'}`}
            style={{
              textShadow: '0 4px 32px #ff9800, 0 2px 8px #ffb347, 0 1px 0 #000, 0 0 32px #fff',
              filter: 'drop-shadow(0 0 32px #ff9800) drop-shadow(0 0 16px #ffb347) drop-shadow(0 2px 8px #000)'
            }}
          >
            The Mahabharat
          </h1>
        </div>
      </header>
      {/* 
        Spacer div to prevent content from being obscured by the fixed header.
        It has the same height as the initial, non-scrolled header.
      */}
      <div className="h-80 sm:h-96" />
    </>
  );
};

export default Header;