
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-amber-400">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
