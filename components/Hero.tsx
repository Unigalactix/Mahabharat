import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  sanskrit?: string;
  subtitle?: string;
  tagline?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  glyph?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  sanskrit,
  subtitle,
  tagline,
  primaryCta,
  secondaryCta,
  glyph = '🕉️',
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(14,124,123,0.15), transparent 55%), radial-gradient(ellipse at 75% 75%, rgba(255,140,66,0.10), transparent 50%)',
        }}
      />
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
        <div className="text-6xl sm:text-7xl mb-6 vishwarupa-aum select-none">{glyph}</div>

        {sanskrit && (
          <p className="font-sanskrit text-goldlight/85 text-xl sm:text-2xl tracking-wide mb-3">
            {sanskrit}
          </p>
        )}

        <h1 className="font-display text-4xl sm:text-6xl text-gradient-gold leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 text-parchment/85 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {tagline && (
          <p className="mt-4 italic font-quote text-goldlight/80 text-base sm:text-lg max-w-2xl mx-auto">
            “{tagline}”
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {primaryCta && (
              <Link to={primaryCta.to} className="btn-gold">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.to} className="btn-ghost">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        <div className="hr-ornate mt-14" aria-hidden />
      </div>
    </section>
  );
};

export default Hero;
