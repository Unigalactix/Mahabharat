import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-gold/15 bg-ink/50">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <div className="text-3xl mb-3 select-none">🕉️</div>
        <p className="font-sanskrit text-goldlight/85 text-base">
          सर्वे भवन्तु सुखिनः · सर्वे सन्तु निरामयाः
        </p>
        <p className="font-quote italic text-parchment/65 text-sm mt-1">
          May all beings be happy · May all beings be free from illness
        </p>
        <div className="hr-ornate my-6" aria-hidden />
        <p className="text-parchment/60 text-xs tracking-widest uppercase">
          Mahabharata Codex · A devotional retelling of Vyāsa&rsquo;s epic
        </p>
        <p className="text-parchment/40 text-[11px] mt-1">
          Crafted with reverence by{' '}
          <a
            href="https://github.com/Unigalactix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-goldlight/70 hover:text-goldlight underline-offset-2 hover:underline"
          >
            Unigalactix
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
