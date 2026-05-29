import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { KSHETRAS } from '../data/kshetras';

export const KshetrasPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="द्वादश क्षेत्राणि"
        title="The Twelve Sacred Kshetras"
        subtitle="Geography is grammar in the Mahābhārata. Twelve places where the story turns — from Mathurā where Kṛṣṇa is born to Naimiṣāraṇya where the entire epic is told back to the ṛṣis."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {KSHETRAS.map((k) => (
          <article
            key={k.id}
            className="codex-card"
            style={{ borderColor: `${k.accent}55` }}
          >
            <div className="flex items-start gap-3">
              <div
                className="codex-glyph shrink-0"
                style={{
                  background: `radial-gradient(circle, ${k.accent}33, ${k.accent}11)`,
                  border: `1px solid ${k.accent}88`,
                  boxShadow: `0 0 18px ${k.accent}66`,
                  color: k.accent,
                  fontSize: 28,
                }}
              >
                {k.glyph}
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl leading-tight" style={{ color: k.accent }}>
                  {k.name}
                </h3>
                <p className="text-parchment/65 text-[11px] mt-1 italic">{k.location}</p>
              </div>
            </div>
            <div className="hr-ornate my-3" aria-hidden />
            <h4 className="text-parchment/55 uppercase tracking-[0.25em] text-[10px] mb-1">
              The story
            </h4>
            <p className="text-parchment/85 text-sm leading-relaxed">{k.story}</p>
            <h4 className="text-parchment/55 uppercase tracking-[0.25em] text-[10px] mt-3 mb-1">
              Why it matters
            </h4>
            <p className="text-parchment/80 text-sm leading-relaxed italic font-quote">
              {k.significance}
            </p>
          </article>
        ))}
      </div>

      <p className="text-center text-parchment/55 text-xs mt-10 italic max-w-2xl mx-auto">
        Every kṣetra is a teaching: a place becomes holy because something
        unforgettable happened there — and what is unforgettable is what we
        keep choosing to remember.
      </p>
    </main>
  );
};

export default KshetrasPage;
