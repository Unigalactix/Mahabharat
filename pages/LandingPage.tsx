import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'drop'|'expand'|'show'|'done'>('drop');
  const [skipped, setSkipped] = useState(false);
  const pathRef = useRef<SVGPathElement | null>(null);

  // SVG path definitions for smooth morphing
  const circlePath = "M 60 0 A 60 60 0 1 1 59.99 0 Z"; // Circle (r=60)
  const rectPath = "M 0 0 L 450 0 L 450 150 L 0 150 Z"; // Rectangle (450x150)

  // Prefetch home page bundle during animation
  useEffect(() => {
    // Prefetch the home page to speed up navigation
    import('./HomePage').catch(() => {
      // Prefetch failed, but that's okay - navigation will still work
    });
  }, []);

  const skipAnimation = () => {
    setSkipped(true);
    setPhase('done');
    navigate('/home');
  };

  useEffect(() => {
    if (skipped) return;
    
    // Animate SVG path morphing through phases
    const t1 = setTimeout(() => setPhase('expand'), 800);
    const t2 = setTimeout(() => setPhase('show'), 1600);
    const t3 = setTimeout(() => { setPhase('done'); navigate('/home'); }, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [navigate, skipped]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black/80" />

        {/* Skip button */}
        {phase !== 'done' && !skipped && (
          <button
            onClick={skipAnimation}
            className="absolute top-8 right-8 z-30 bg-amber-600/20 hover:bg-amber-500/30 text-amber-200 px-4 py-2 rounded-lg border border-amber-500/30 backdrop-blur-sm transition-all duration-200"
          >
            Skip Animation
          </button>
        )}

        {/* SVG Container for morphing shape */}
        <div className={`relative z-20 transition-all duration-700 ease-in-out ${
          phase === 'drop' ? '-translate-y-96 scale-50 opacity-0' : ''
        } ${phase === 'expand' ? 'translate-y-0 scale-75 opacity-100' : ''} ${phase === 'show' ? 'scale-110 opacity-100' : ''}`}>
          
          <svg 
            width={phase === 'show' ? 900 : 120} 
            height={phase === 'show' ? 300 : 120}
            viewBox={phase === 'show' ? "0 0 450 150" : "0 0 120 120"}
            className="transition-all duration-700 ease-in-out"
          >
            <defs>
              <radialGradient id="morphGradient" cx="30%" cy="20%">
                <stop offset="0%" stopColor="rgba(255,200,50,0.12)" />
                <stop offset="40%" stopColor="rgba(255,140,0,0.06)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0.6)" />
              </radialGradient>
              <filter id="blur">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            
            <path
              ref={pathRef}
              d={phase === 'show' ? rectPath : circlePath}
              fill="url(#morphGradient)"
              filter="url(#blur)"
              className="transition-all duration-700 ease-in-out"
              transform={phase === 'show' ? "translate(225, 75)" : "translate(60, 60)"}
              style={{ transformOrigin: 'center' }}
            />
          </svg>

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            {phase !== 'show' && (
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl">🐘</div>
                <div className="mt-2 font-bold text-lg">GANESHA</div>
              </div>
            )}

            {phase === 'show' && (
              <div className="w-full h-full flex items-center justify-center px-8">
                <div>
                  <h1 className="text-6xl font-extrabold tracking-tight text-amber-300">The Mahabharata</h1>
                  <p className="mt-4 text-slate-300 text-xl">An interactive odyssey of story, duty and destiny</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
