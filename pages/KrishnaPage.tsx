import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { Hero } from '../components/Hero';
import { EPISODES } from '../data/episodes';
import { CHARACTERS } from '../data/characters';

const KRISHNA_EP_IDS = [
  'krishna-janma', 'govardhan-lila', 'kalinga-mardana', 'kamsa-vadha', 'sudarshan-charka',
  'draupadi-swayamvara', 'krishna-shanti-duta', 'vishwarupa-darshana',
  'jayadratha-vadha', 'karna-vadha',
];

const krishna = CHARACTERS.find((c) => c.id === 'krishna');

const NAMES: { sanskrit: string; name: string; meaning: string }[] = [
  { sanskrit: 'गोविन्दः',      name: 'Govinda',      meaning: 'Lord of cows; finder of the senses' },
  { sanskrit: 'वासुदेवः',       name: 'Vāsudeva',     meaning: 'Son of Vasudeva; the indweller of all' },
  { sanskrit: 'मधुसूदनः',     name: 'Madhusūdana',  meaning: 'Slayer of the demon Madhu' },
  { sanskrit: 'पार्थसारथिः',   name: 'Pārtha-sārathi', meaning: 'Charioteer of Pārtha (Arjuna)' },
  { sanskrit: 'योगेश्वरः',      name: 'Yogeśvara',    meaning: 'Lord of yoga' },
  { sanskrit: 'जगन्नाथः',      name: 'Jagannātha',   meaning: 'Master of the universe' },
  { sanskrit: 'मुरारिः',         name: 'Murāri',       meaning: 'Foe of the demon Mura' },
  { sanskrit: 'द्वारकाधीशः',  name: 'Dvārakādhīśa', meaning: 'Sovereign of Dvārakā' },
];

const AVATARA_PURPOSE = [
  { glyph: '⚖️', accent: '#FFD700',
    title: 'paritrāṇāya sādhūnām', sanskrit: 'परित्राणाय साधूनाम्',
    line: 'For the protection of the good',
  },
  { glyph: '🗡️', accent: '#B91C1C',
    title: 'vināśāya ca duṣkṛtām', sanskrit: 'विनाशाय च दुष्कृताम्',
    line: 'For the destruction of evildoers',
  },
  { glyph: '🪷', accent: '#E879F9',
    title: 'dharma-saṁsthāpanārthāya', sanskrit: 'धर्मसंस्थापनार्थाय',
    line: 'For the re-establishment of dharma',
  },
  { glyph: '🌌', accent: '#0EA5E9',
    title: 'sambhavāmi yuge yuge', sanskrit: 'सम्भवामि युगे युगे',
    line: 'I take birth, age after age',
  },
];

export const KrishnaPage: React.FC = () => {
  const episodes = EPISODES.filter((e) => KRISHNA_EP_IDS.includes(e.id));

  return (
    <>
      <Hero
        sanskrit="वासुदेवाय नमः"
        title="Krishna — the Eighth"
        subtitle="Yādava prince, cowherd of Vṛndāvana, sovereign of Dvārakā, charioteer of Arjuna, singer of the Gītā."
        tagline="Pūrṇa-avatāra of Viṣṇu — the dark-blue flame in whose flute the universe forgets itself."
        glyph="🪈"
      />

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Identity card */}
        {krishna && (
          <section
            className="glass p-6 sm:p-8 mb-12 relative overflow-hidden"
            style={{ borderColor: `${krishna.accent}55` }}
          >
            <div
              aria-hidden
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-25"
              style={{ background: `radial-gradient(circle, ${krishna.accent}, transparent 70%)` }}
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55 mb-2">
              {krishna.epithet}
            </p>
            <p className="font-sanskrit text-goldlight/85 text-2xl mb-2">{krishna.sanskrit}</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-4" style={{ color: krishna.accent }}>
              {krishna.name}
            </h2>
            <p className="font-quote text-xl italic text-parchment/90 mb-4">“{krishna.quote}”</p>
            <p className="text-parchment/85 leading-relaxed">{krishna.lore}</p>
          </section>
        )}

        {/* Sahasranama — 8 chosen names */}
        <SectionTitle
          sanskrit="नामावली"
          title="Eight Names of the Many"
          subtitle="The Viṣṇu-sahasranāma lists a thousand. Eight will do for a beginning."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {NAMES.map((n) => (
            <div key={n.name} className="glass glass-hover p-4 text-center">
              <p className="font-sanskrit text-goldlight text-xl mb-1">{n.sanskrit}</p>
              <p className="font-display text-base text-parchment/95">{n.name}</p>
              <p className="text-parchment/65 text-xs italic mt-1">{n.meaning}</p>
            </div>
          ))}
        </div>

        {/* Avatāra purpose — Gita 4.7-8 */}
        <section className="glass p-6 sm:p-8 mb-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55 mb-2">
            Bhagavad Gītā · 4.7 – 4.8
          </p>
          <p className="font-sanskrit text-goldlight/85 text-base sm:text-lg leading-loose mb-3">
            यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।<br />
            अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥
          </p>
          <p className="font-quote italic text-parchment/85 max-w-2xl mx-auto mb-6">
            “Whenever dharma decays and adharma rises, O Bhārata, then I send forth myself.”
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AVATARA_PURPOSE.map((a) => (
              <div
                key={a.title}
                className="rounded-xl p-4 border"
                style={{
                  background: `linear-gradient(135deg, ${a.accent}22, transparent)`,
                  borderColor: `${a.accent}55`,
                }}
              >
                <div className="text-3xl mb-2">{a.glyph}</div>
                <p className="font-sanskrit text-goldlight/85 text-sm">{a.sanskrit}</p>
                <p className="font-display text-base mt-1" style={{ color: a.accent }}>
                  {a.title}
                </p>
                <p className="text-parchment/75 text-xs italic mt-1">{a.line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Episodes of Krishna */}
        <SectionTitle
          sanskrit="कृष्ण-लीला"
          title="Ten Acts of the Yādava"
          subtitle="From the prison of Mathurā to the chariot of Pārtha."
          align="center"
        />
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {episodes.map((e) => (
            <article
              key={e.id}
              className="glass glass-hover p-5"
              style={{ borderColor: `${e.accent}40` }}
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span
                  aria-hidden
                  className="text-2xl"
                  style={{ filter: `drop-shadow(0 0 8px ${e.accent}aa)` }}
                >
                  {e.glyph}
                </span>
                <div>
                  {e.sanskrit && (
                    <p className="font-sanskrit text-goldlight/85 text-sm">{e.sanskrit}</p>
                  )}
                  <h3 className="font-display text-lg" style={{ color: e.accent }}>{e.title}</h3>
                </div>
              </div>
              <p className="text-parchment/80 text-sm leading-relaxed">{e.summary}</p>
            </article>
          ))}
        </div>

        {/* CTAs to Vishwarupa and Gita */}
        <div className="grid sm:grid-cols-2 gap-5">
          <Link
            to="/vishwarupa"
            className="glass glass-hover p-6 group relative overflow-hidden"
            style={{ borderColor: '#F472B655' }}
          >
            <div
              aria-hidden
              className="absolute -right-12 -top-12 w-40 h-40 rounded-full opacity-25 group-hover:opacity-50 transition-opacity"
              style={{ background: 'radial-gradient(circle, #F472B6, transparent 70%)' }}
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55">Chapter 11</p>
            <p className="font-sanskrit text-goldlight/85 text-lg mt-1">विश्वरूप दर्शनम्</p>
            <h3 className="font-display text-2xl text-lotus mt-1">The Universal Form →</h3>
            <p className="text-parchment/75 text-sm mt-2">
              See the form for which Arjuna asked — and from which he begged release.
            </p>
          </Link>
          <Link
            to="/gita"
            className="glass glass-hover p-6 group relative overflow-hidden"
            style={{ borderColor: '#FFD70055' }}
          >
            <div
              aria-hidden
              className="absolute -right-12 -top-12 w-40 h-40 rounded-full opacity-25 group-hover:opacity-50 transition-opacity"
              style={{ background: 'radial-gradient(circle, #FFD700, transparent 70%)' }}
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55">Song of the Lord</p>
            <p className="font-sanskrit text-goldlight/85 text-lg mt-1">श्रीमद्भगवद्गीता</p>
            <h3 className="font-display text-2xl text-goldlight mt-1">The Bhagavad Gītā →</h3>
            <p className="text-parchment/75 text-sm mt-2">
              Seven hundred verses sung between two armies — the curriculum compressed.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default KrishnaPage;
