import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { GITA_SHLOKAS } from '../data/gita';

const VR_1132 = GITA_SHLOKAS.find((s) => s.verse === '11.32');
const VR_1155 = GITA_SHLOKAS.find((s) => s.verse === '11.55');

const FORMS: { glyph: string; sanskrit: string; title: string; line: string; accent: string }[] = [
  { glyph: '☀️', accent: '#F5D061', sanskrit: 'सूर्य-सहस्रम्',  title: 'A Thousand Suns',
    line: 'If a thousand suns burst into the sky at once — that splendour would be the splendour of the Great One.' },
  { glyph: '🔥', accent: '#FF8C42', sanskrit: 'कालः',           title: 'Time, the Devourer',
    line: 'I am Time grown mighty — come to consume the worlds. Even without you, none of these warriors will live.' },
  { glyph: '👁️', accent: '#E879F9', sanskrit: 'सहस्रनेत्रः',     title: 'A Thousand Eyes',
    line: 'Suns and moons for eyes, blazing fire for a mouth — burning the universe with the radiance of itself.' },
  { glyph: '🐍', accent: '#0E7C7B', sanskrit: 'विश्वम्',          title: 'The All-Form',
    line: 'Gods, sages, rivers, mountains, the Pāṇḍavas, the sons of Dhṛtarāṣṭra — all rush into your flaming mouths.' },
];

export const VishwarupaPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="विश्वरूप दर्शनम्"
        title="The Universal Form"
        subtitle="Bhagavad Gītā, Chapter Eleven. Arjuna asks to see — and is given the divya-cakṣus, the divine eye, with which the unbearable may be borne."
      />

      {/* The stage */}
      <div className="vishwarupa-stage mb-12">
        <div className="vishwarupa-rays" aria-hidden />
        <div className="vishwarupa-halo" aria-hidden />
        <div className="text-center relative z-10">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-3"
            style={{ color: 'rgba(245,208,97,.85)' }}
          >
            divya-cakṣus · the divine eye
          </p>
          <div className="vishwarupa-aum">ॐ</div>
          <p
            className="font-sanskrit text-lg sm:text-xl max-w-2xl mx-auto mt-4 relative z-10"
            style={{ color: 'rgba(253,244,214,.95)' }}
          >
            पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः ।
          </p>
          <p className="text-parchment/85 italic font-quote text-base sm:text-lg mt-2 max-w-2xl mx-auto">
            “Behold, Pārtha — my forms by the hundred, by the thousand. Behold what no human eye has seen.”
          </p>
        </div>
      </div>

      {/* Forms */}
      <SectionTitle
        sanskrit="चत्वारि रूपाणि"
        title="Four Glimpses of the Limitless"
        align="center"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {FORMS.map((f) => (
          <article
            key={f.title}
            className="glass glass-hover p-5 text-center relative overflow-hidden"
            style={{ borderColor: `${f.accent}55` }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-15"
              style={{ background: `radial-gradient(circle at 50% 0%, ${f.accent}, transparent 70%)` }}
            />
            <div className="text-4xl mb-3 relative z-10" style={{ filter: `drop-shadow(0 0 14px ${f.accent})` }}>
              {f.glyph}
            </div>
            <p className="font-sanskrit text-goldlight/85 text-sm relative z-10">{f.sanskrit}</p>
            <h3 className="font-display text-lg mb-2 relative z-10" style={{ color: f.accent }}>
              {f.title}
            </h3>
            <p className="text-parchment/80 text-sm italic font-quote relative z-10">{f.line}</p>
          </article>
        ))}
      </div>

      {/* Kālo'smi shloka — 11.32 */}
      {VR_1132 && (
        <section className="shloka-card mb-8">
          <span className="shloka-num">Gītā · {VR_1132.verse}</span>
          <p className="font-sanskrit text-goldlight text-lg sm:text-xl leading-loose whitespace-pre-line text-center">
            {VR_1132.sanskrit}
          </p>
          <p className="text-parchment/70 text-sm italic mt-3 text-center whitespace-pre-line">
            {VR_1132.transliteration}
          </p>
          <p className="text-parchment/95 mt-4 text-center font-quote italic">
            “{VR_1132.translation}”
          </p>
          <div className="hr-ornate my-4" aria-hidden />
          <p className="text-parchment/75 text-sm text-center">{VR_1132.meaning}</p>
        </section>
      )}

      {/* Closing — 11.55 */}
      {VR_1155 && (
        <section className="shloka-card">
          <span className="shloka-num">Gītā · {VR_1155.verse}</span>
          <p className="font-sanskrit text-goldlight text-lg leading-loose whitespace-pre-line text-center">
            {VR_1155.sanskrit}
          </p>
          <p className="text-parchment/95 mt-4 text-center font-quote italic">
            “{VR_1155.translation}”
          </p>
          <div className="hr-ornate my-4" aria-hidden />
          <p className="text-parchment/75 text-sm text-center">{VR_1155.meaning}</p>
        </section>
      )}

      <div className="text-center mt-10">
        <Link
          to="/gita"
          className="pill text-sm text-goldlight border-gold/60 hover:bg-gold/10"
        >
          Read the full Bhagavad Gītā →
        </Link>
      </div>
    </main>
  );
};

export default VishwarupaPage;
