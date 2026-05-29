import React from 'react';

interface SectionTitleProps {
  sanskrit?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  sanskrit,
  title,
  subtitle,
  align = 'center',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-10 ${alignClass}`}>
      {sanskrit && (
        <p className="font-sanskrit text-goldlight/80 text-lg sm:text-xl tracking-wide mb-2">
          {sanskrit}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-5xl text-gradient-gold">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-parchment/75 text-base sm:text-lg max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      {align === 'center' && <div className="hr-ornate mt-6" aria-hidden />}
    </div>
  );
};

export default SectionTitle;
