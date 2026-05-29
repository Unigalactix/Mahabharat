import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { GITA_SHLOKAS } from '../data/gita';
import { Shloka } from '../types';

type Theme = 'all' | 'arjuna' | 'atman' | 'karma' | 'bhakti' | 'vishwarupa' | 'sharanagati';

interface ThemeDef {
  key: Theme;
  label: string;
  sanskrit: string;
  verses: string[]; // verse strings to include
}

const THEMES: ThemeDef[] = [
  { key: 'all',         label: 'All',              sanskrit: 'सर्वम्',
    verses: GITA_SHLOKAS.map((s) => s.verse) },
  { key: 'arjuna',      label: 'Arjuna’s Surrender', sanskrit: 'अर्जुन-विषादः',
    verses: ['1.1', '2.7'] },
  { key: 'atman',       label: 'The Eternal Self', sanskrit: 'आत्म-तत्त्वम्',
    verses: ['2.20', '2.55'] },
  { key: 'karma',       label: 'Karma Yoga',       sanskrit: 'कर्मयोगः',
    verses: ['2.47', '2.48', '6.5'] },
  { key: 'bhakti',      label: 'Devotion',         sanskrit: 'भक्तियोगः',
    verses: ['4.7-8', '9.22'] },
  { key: 'vishwarupa',  label: 'The Universal Form', sanskrit: 'विश्वरूपम्',
    verses: ['11.32', '11.55'] },
  { key: 'sharanagati', label: 'Total Surrender',  sanskrit: 'शरणागतिः',
    verses: ['18.66'] },
];

const ShlokaCard: React.FC<{ s: Shloka }> = ({ s }) => (
  <article className="shloka-card">
    <span className="shloka-num">Chapter {s.chapter} · {s.verse}</span>
    <p className="font-sanskrit text-goldlight text-lg sm:text-xl leading-loose whitespace-pre-line text-center mt-2">
      {s.sanskrit}
    </p>
    <p className="text-parchment/65 text-xs sm:text-sm italic text-center mt-3 whitespace-pre-line">
      {s.transliteration}
    </p>
    <p className="text-parchment/95 mt-4 text-center font-quote italic">
      “{s.translation}”
    </p>
    <div className="hr-ornate my-4" aria-hidden />
    <p className="text-parchment/75 text-sm text-center">{s.meaning}</p>
  </article>
);

export const GitaPage: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('all');

  const shown = useMemo(() => {
    const def = THEMES.find((t) => t.key === theme) ?? THEMES[0];
    const order = new Map(def.verses.map((v, i) => [v, i]));
    return GITA_SHLOKAS
      .filter((s) => order.has(s.verse))
      .sort((a, b) => (order.get(a.verse)! - order.get(b.verse)!));
  }, [theme]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="श्रीमद्भगवद्गीता"
        title="The Bhagavad Gītā"
        subtitle="Seven hundred verses sung by Kṛṣṇa to Arjuna in the eighteen minutes before the war — and through them, to the world. Here are twelve of the most defining."
      />

      {/* Opening invocation */}
      <section
        className="glass p-6 sm:p-8 mb-12 text-center relative overflow-hidden"
        style={{ borderColor: '#FFD70055' }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(circle at 50% 0%, #FFD700, transparent 70%)' }}
        />
        <p className="font-sanskrit text-goldlight text-lg sm:text-2xl leading-loose relative z-10">
          ॐ पार्थाय प्रतिबोधितां भगवता नारायणेन स्वयम् ।<br />
          व्यासेन ग्रथितां पुराणमुनिना मध्ये महाभारतम् ॥
        </p>
        <p className="font-quote italic text-parchment/85 mt-4 relative z-10">
          “Awakening Pārtha, sung by the Lord Nārāyaṇa himself, woven by the ancient sage Vyāsa
          in the middle of the Mahābhārata — to that Mother Gītā, of eighteen chapters and a
          purifier of the world, I bow.”
        </p>
      </section>

      {/* Theme filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {THEMES.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTheme(t.key)}
            className={`pill text-xs sm:text-sm ${
              theme === t.key
                ? 'bg-gold/20 border-gold/70 text-goldlight shadow-[0_0_18px_rgba(212,175,55,.35)]'
                : 'text-parchment/80 hover:text-goldlight'
            }`}
          >
            <span className="font-sanskrit mr-2 opacity-80">{t.sanskrit}</span>
            {t.label}
          </button>
        ))}
      </div>

      <p className="text-center text-parchment/55 text-xs uppercase tracking-[0.3em] mb-8">
        Showing {shown.length} of {GITA_SHLOKAS.length}
      </p>

      <div className="space-y-6 mb-12">
        {shown.map((s) => <ShlokaCard key={s.verse} s={s} />)}
      </div>

      <div className="text-center">
        <Link
          to="/vishwarupa"
          className="pill text-sm text-lotus border-lotus/60 hover:bg-lotus/10"
        >
          See Chapter 11 — the Universal Form →
        </Link>
      </div>

      <p className="text-center text-parchment/55 text-xs mt-10 italic">
        यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।<br />
        तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥<br />
        Where Kṛṣṇa is, and the Pārtha with his bow — there is fortune, victory, prosperity, and unwavering justice.
      </p>
    </main>
  );
};

export default GitaPage;
