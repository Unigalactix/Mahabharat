
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center text-center bg-cover bg-center text-white animated-bg transition-all duration-500 ease-in-out ${isScrolled ? 'h-20 shadow-lg' : 'h-80 sm:h-96'}`}
        style={{ backgroundImage: 'url(https://picsum.photos/seed/kurukshetra/1920/1080)' }}
      >
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isScrolled ? 'bg-opacity-90 backdrop-blur-md' : 'bg-opacity-70 backdrop-blur-sm'}`}></div>
        <div className="relative z-10 px-4 transition-all duration-500 ease-in-out">
          <h1 className={`font-bold tracking-wider leading-tight text-amber-300 drop-shadow-lg transition-all duration-500 ease-in-out ${isScrolled ? 'text-3xl' : 'text-5xl md:text-7xl'}`}>
            The Mahabharata
          </h1>
          <p className={`font-light text-slate-200 drop-shadow-md transition-all duration-300 ease-in-out overflow-hidden ${isScrolled ? 'opacity-0 max-h-0 mt-0' : 'opacity-100 max-h-screen mt-4 text-xl md:text-2xl'}`}>
            Lineage, Conflict, and Philosophical Legacy
          </p>
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