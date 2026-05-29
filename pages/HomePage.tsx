import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { ParvaTile } from '../components/ParvaTile';
import { CHARACTERS } from '../data/characters';
import { PARVAS } from '../data/parvas';
import { EPISODES } from '../data/episodes';
import { HOUSES } from '../data/houses';
import { KSHETRAS } from '../data/kshetras';
import { GITA_SHLOKAS } from '../data/gita';

const THEMES = [
  {
    glyph: '⚖️',
    sanskrit: 'धर्म',
    title: 'Dharma',
    description:
      'The cosmic order that holds the worlds together. The epic\'s every choice, every battle, every silence is a question about it.',
    accent: '#D4AF37',
  },
  {
    glyph: '☸',
    sanskrit: 'कर्म',
    title: 'Karma',
    description:
      'Action without attachment, offered as a yajna. Krishna\'s answer to Arjuna\'s grief, and the spine of the Gita.',
    accent: '#FF8C42',
  },
  {
    glyph: '🪈',
    sanskrit: 'भक्ति',
    title: 'Bhakti',
    description:
      'Surrender as the highest yoga. Draupadi\'s open hands, Arjuna\'s steady gaze, Yudhishthira\'s walk with the dog.',
    accent: '#E879F9',
  },
  {
    glyph: '🕉️',
    sanskrit: 'मोक्ष',
    title: 'Moksha',
    description:
      'Liberation — the field of dharma is also the field on which the soul is freed. The war is fought so the war within can end.',
    accent: '#7BE0D2',
  },
];

const STATS = [
  { value: '100,000+', label: 'Shlokas' },
  { value: '18', label: 'Parvas' },
  { value: '18', label: 'Days of War' },
  { value: '18', label: 'Chapters of Gita' },
];

export const HomePage: React.FC = () => {
  const featuredCharacters = CHARACTERS.filter((c) =>
    ['krishna', 'arjuna', 'bhishma', 'karna', 'draupadi', 'yudhishthira'].includes(c.id),
  );
  const featuredParvas = PARVAS.filter((p) => [1, 5, 6, 8, 18].includes(p.number));
  const charamaShloka = GITA_SHLOKAS.find((s) => s.verse === '18.66');

  return (
    <>
      <Hero
        glyph="🕉️"
        sanskrit="यतो धर्मस्ततो जयः"
        title="The Mahabharata"
        subtitle="Vyāsa's eighteen-parva epic of dharma, devotion, and the war that shaped Bhārata — retold for new generations with reverence and wonder."
        tagline="Where there is dharma, there is victory."
        primaryCta={{ label: 'Enter the Codex', to: '/characters' }}
        secondaryCta={{ label: 'The 18 Parvas', to: '/parvas' }}
      />

      {/* THEMES */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <SectionTitle
          sanskrit="चतुर्वर्ग"
          title="The Four Pursuits of the Soul"
          subtitle="Every page of the epic is a meditation on one of these four — and on the moment when they collide."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {THEMES.map((t) => (
            <div
              key={t.title}
              className="glass glass-hover p-6 text-center"
              style={{ borderColor: `${t.accent}40` }}
            >
              <div className="text-4xl mb-2" style={{ color: t.accent }}>
                {t.glyph}
              </div>
              <p className="font-sanskrit text-goldlight/85 text-lg">{t.sanskrit}</p>
              <h3 className="font-display text-xl mt-1" style={{ color: t.accent }}>
                {t.title}
              </h3>
              <p className="text-parchment/75 text-sm mt-2 leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="glass p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl sm:text-4xl text-gradient-gold">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-parchment/60 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8 text-center">
          <CountChip n={CHARACTERS.length}    label="Characters" to="/characters" />
          <CountChip n={EPISODES.length}      label="Episodes"   to="/episodes" />
          <CountChip n={HOUSES.length}        label="Houses"     to="/houses" />
          <CountChip n={KSHETRAS.length}      label="Kshetras"   to="/kshetras" />
          <CountChip n={GITA_SHLOKAS.length}  label="Shlokas"    to="/gita" />
        </div>
      </section>

      {/* FEATURED CHARACTERS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <SectionTitle
          sanskrit="महावीराः"
          title="The Pillars of the Epic"
          subtitle="Six souls without whom Kurukshetra would not be Kurukshetra."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredCharacters.map((c) => (
            <Link
              key={c.id}
              to="/characters"
              className="glass glass-hover p-4 text-center"
              style={{ borderColor: `${c.accent}40` }}
            >
              <div className="text-4xl mb-2" style={{ color: c.accent }}>
                {c.glyph}
              </div>
              <div className="font-sanskrit text-goldlight/80 text-sm">{c.sanskrit}</div>
              <div className="font-display text-base" style={{ color: c.accent }}>
                {c.name}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-parchment/55 mt-1">
                {c.rarity}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/characters" className="btn-gold">
            All 30 Characters →
          </Link>
        </div>
      </section>

      {/* FEATURED PARVAS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <SectionTitle
          sanskrit="अष्टादश पर्वाणि"
          title="Five Pillars of the Eighteen"
          subtitle="The Adi sets the stage, the Udyoga warns, the Bhishma turns the cosmos, the Karna breaks the heart, the Svargarohana releases the soul."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredParvas.map((p) => (
            <div key={p.number}>
              <ParvaTile parva={p} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/parvas" className="btn-gold">
            All 18 Parvas →
          </Link>
        </div>
      </section>

      {/* DEVOTIONAL CTA PANELS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <SectionTitle
          sanskrit="परम् धाम"
          title="Walk Deeper into the Epic"
          subtitle="Four sanctums of the Mahabharata, each opening a different door."
        />
        <div className="grid sm:grid-cols-2 gap-5">
          <CtaPanel
            to="/krishna"
            glyph="🪈"
            accent="#0E7C7B"
            sanskrit="वासुदेव:"
            title="Krishna & the Vishvarupa"
            description="The flute-player who is also the wheel of time — from Govardhan to the Gita."
          />
          <CtaPanel
            to="/kurukshetra"
            glyph="⚔️"
            accent="#B91C1C"
            sanskrit="कुरुक्षेत्रम्"
            title="The 18 Days of Kurukshetra"
            description="Day by day on the field of dharma — commanders, vows, fallen."
          />
          <CtaPanel
            to="/gita"
            glyph="📖"
            accent="#D4AF37"
            sanskrit="भगवद्गीता"
            title="The Song of the Lord"
            description="The twelve defining shlokas of the Gita, with transliteration and meaning."
          />
          <CtaPanel
            to="/houses"
            glyph="👑"
            accent="#F5D061"
            sanskrit="राजवंशाः"
            title="The Noble Houses"
            description="All 23 royal lineages — Kuru, Panchala, Yadava, Magadha, and the kingdoms in between."
          />
        </div>
      </section>

      {/* CHARAMA SHLOKA — closing devotional moment */}
      {charamaShloka && (
        <section className="max-w-3xl mx-auto px-6 py-16">
          <div className="shloka-card text-center">
            <div className="shloka-num">गीता १८.६६</div>
            <p className="font-sanskrit text-goldlight text-xl leading-relaxed whitespace-pre-line">
              {charamaShloka.sanskrit}
            </p>
            <p className="mt-4 font-quote italic text-parchment/85 whitespace-pre-line">
              {charamaShloka.transliteration}
            </p>
            <div className="hr-ornate my-4" aria-hidden />
            <p className="text-parchment/90 leading-relaxed">{charamaShloka.translation}</p>
          </div>
        </section>
      )}
    </>
  );
};

const CountChip: React.FC<{ n: number; label: string; to: string }> = ({ n, label, to }) => (
  <Link
    to={to}
    className="glass glass-hover p-4 hover:scale-[1.02] transition-transform"
  >
    <div className="font-display text-2xl text-goldlight">{n}</div>
    <div className="text-[10px] uppercase tracking-[0.25em] text-parchment/60 mt-0.5">{label}</div>
  </Link>
);

const CtaPanel: React.FC<{
  to: string;
  glyph: string;
  accent: string;
  sanskrit: string;
  title: string;
  description: string;
}> = ({ to, glyph, accent, sanskrit, title, description }) => (
  <Link
    to={to}
    className="glass glass-hover p-6 relative overflow-hidden group"
    style={{ borderColor: `${accent}40` }}
  >
    <div
      aria-hidden
      className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 group-hover:opacity-40 transition"
      style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
    />
    <div className="relative flex items-start gap-4">
      <div className="text-4xl" style={{ color: accent }}>{glyph}</div>
      <div>
        <p className="font-sanskrit text-goldlight/80 text-sm">{sanskrit}</p>
        <h3 className="font-display text-xl" style={{ color: accent }}>{title}</h3>
        <p className="text-parchment/75 text-sm mt-1 leading-relaxed">{description}</p>
        <span className="inline-block mt-3 text-goldlight/80 text-sm">Enter →</span>
      </div>
    </div>
  </Link>
);

export default HomePage;
