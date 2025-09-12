import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'drop'|'expand'|'show'|'done'>('drop');
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // drop -> expand -> show -> navigate
    const t1 = setTimeout(() => setPhase('expand'), 800);
    const t2 = setTimeout(() => setPhase('show'), 1600);
    const t3 = setTimeout(() => { setPhase('done'); navigate('/home'); }, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black/80" />

        <div
          ref={circleRef}
          className={`relative z-20 flex items-center justify-center text-center text-white transition-all duration-700 ease-in-out ${
            phase === 'drop' ? '-translate-y-96 scale-50 opacity-0' : ''
          } ${phase === 'expand' ? 'translate-y-0 scale-75 opacity-100' : ''} ${phase === 'show' ? 'scale-110 opacity-100' : ''}`}
          style={{
            width: phase === 'show' ? 900 : 120,
            height: phase === 'show' ? 300 : 120,
            borderRadius: phase === 'show' ? 20 : 9999,
            background: 'radial-gradient(circle at 30% 20%, rgba(255,200,50,0.12), rgba(255,140,0,0.06) 40%, rgba(10,10,10,0.6))',
            backdropFilter: 'blur(6px)'
          }}
        >
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
  );
};

export default LandingPage;
