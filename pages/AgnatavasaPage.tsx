import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PARVAS } from '../data/parvas';
import { EPISODES } from '../data/episodes';

interface Disguise {
  name: string;
  sanskrit: string;
  alias: string;
  aliasSanskrit: string;
  role: string;
  detail: string;
  accent: string;
  glyph: string;
}

const DISGUISES: Disguise[] = [
  {
    name: 'Yudhiṣṭhira', sanskrit: 'युधिष्ठिरः',
    alias: 'Kaṅka', aliasSanskrit: 'कङ्कः',
    role: 'Brāhmaṇa courtier & dice-master to King Virāṭa',
    detail: 'The Dharma-rāja stripped of his throne plays at dice for amusement — a quiet penance for the very vice that exiled him.',
    accent: '#FFD700', glyph: '🎲',
  },
  {
    name: 'Bhīma', sanskrit: 'भीमः',
    alias: 'Vallabha', aliasSanskrit: 'वल्लभः',
    role: 'Royal cook & wrestler in the king’s kitchen',
    detail: 'The mace-bearer of mountains spends a year stirring great cauldrons — and breaks the bones of any wrestler the king sets before him.',
    accent: '#FF8C42', glyph: '🍲',
  },
  {
    name: 'Arjuna', sanskrit: 'अर्जुनः',
    alias: 'Bṛhannalā', aliasSanskrit: 'बृहन्नला',
    role: 'Dance-master to princess Uttarā, in the women’s quarter',
    detail: 'Urvaśī’s curse of impotence — once a wound — now becomes the perfect cloak. The conqueror of the worlds teaches girls to dance.',
    accent: '#0EA5E9', glyph: '💃',
  },
  {
    name: 'Nakula', sanskrit: 'नकुलः',
    alias: 'Granthika', aliasSanskrit: 'ग्रन्थिकः',
    role: 'Keeper of horses in the royal stables',
    detail: 'The handsomest of the brothers, master of the Aśvinīs’ own science of horses, lives quietly among grooms.',
    accent: '#34D399', glyph: '🐎',
  },
  {
    name: 'Sahadeva', sanskrit: 'सहदेवः',
    alias: 'Tantipāla', aliasSanskrit: 'तन्तिपालः',
    role: 'Cowherd in Virāṭa’s pastures',
    detail: 'The wisest of the five — said to know the past, present, and future — quietly counts the king’s cattle in the open fields.',
    accent: '#A78BFA', glyph: '🐄',
  },
  {
    name: 'Draupadī', sanskrit: 'द्रौपदी',
    alias: 'Sairandhrī', aliasSanskrit: 'सैरन्ध्री',
    role: 'Lady-in-waiting to queen Sudeṣṇā',
    detail: 'The empress of Indraprastha braids the queen’s hair — and bides her time. Five gandharva-husbands, she says, watch over her.',
    accent: '#E879F9', glyph: '🌺',
  },
];

interface Event {
  glyph: string; accent: string;
  sanskrit: string; title: string; story: string;
}

const EVENTS: Event[] = [
  {
    glyph: '👹', accent: '#B91C1C',
    sanskrit: 'कीचकवधः', title: 'Kīcaka-Vadha',
    story: 'Sudeṣṇā’s brother Kīcaka — general of Matsya, a giant who slays tigers with his fists — desires Sairandhrī. When his hand falls on Draupadī in the court, only her glance at the dice-master stops a war. That night Bhīma waits in the dance-hall in Draupadī’s veil; by dawn Kīcaka is a ball of broken bone. The court declares it the work of her gandharva husbands.',
  },
  {
    glyph: '🐂', accent: '#FF8C42',
    sanskrit: 'गोहरणम्', title: 'Goharaṇa — The Cattle Raid',
    story: 'Suspecting the Pāṇḍavas hide in Matsya, the Kauravas raid Virāṭa’s herds from the north — Bhīṣma, Droṇa, Kṛpa, Karṇa, Aśvatthāmā, Duryodhana himself. Young prince Uttara boasts, then panics on the battlefield. Bṛhannalā the eunuch-charioteer takes the reins — and the bow.',
  },
  {
    glyph: '🏹', accent: '#0EA5E9',
    sanskrit: 'पाण्डवप्रकाशः', title: 'The Revelation',
    story: 'From a hollow śamī tree Arjuna draws the Gāṇḍīva and the divine quiver hidden there for a year. The Devadatta conch sounds. One man — wearing women’s bangles — stuns Bhīṣma, Droṇa, Karṇa, and Duryodhana in turn, lulling each warrior to sleep with the Sammohana-astra. The herds return. The thirteenth year is done.',
  },
  {
    glyph: '💒', accent: '#F5D061',
    sanskrit: 'उत्तरा-अभिमन्यु', title: 'Marriage of Uttarā & Abhimanyu',
    story: 'Virāṭa, in gratitude, offers Uttarā to Arjuna. Arjuna — who taught her dance — refuses for himself and accepts her for his son Abhimanyu. From this marriage will come Parīkṣit, in whose womb the very life of the Pāṇḍava line will be saved by Kṛṣṇa from Aśvatthāman’s brahmāstra.',
  },
];

const VIRATA = PARVAS.find((p) => p.number === 4)!;
const AGNATA_EP = EPISODES.find((e) => e.id === 'agnatavasa');

export const AgnatavasaPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="अज्ञातवासः"
        title="The Year of Hidden Service"
        subtitle="Virāṭa Parva — one year in which the five Pāṇḍavas and Draupadī must live unrecognised. If discovered, twelve more years of exile. They serve as cook, charioteer, herdsman, dance-master, dice-player, and maid in a king’s court — and win it."
      />

      {/* Hero quote */}
      {AGNATA_EP && (
        <section
          className="glass p-6 sm:p-8 mb-12 relative overflow-hidden"
          style={{ borderColor: `${AGNATA_EP.accent}55` }}
        >
          <div
            aria-hidden
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${AGNATA_EP.accent}, transparent 70%)` }}
          />
          <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55 mb-2">
            {AGNATA_EP.era}
          </p>
          {AGNATA_EP.sanskrit && (
            <p className="font-sanskrit text-goldlight/85 text-lg mb-1">{AGNATA_EP.sanskrit}</p>
          )}
          <h2 className="font-display text-3xl sm:text-4xl mb-3" style={{ color: AGNATA_EP.accent }}>
            {AGNATA_EP.title}
          </h2>
          <p className="text-parchment/85 leading-relaxed">{AGNATA_EP.summary}</p>
          <div className="hr-ornate my-5" aria-hidden />
          <p className="font-quote italic text-parchment/80">{AGNATA_EP.significance}</p>
        </section>
      )}

      {/* Six disguises */}
      <SectionTitle
        sanskrit="षट् छद्मवेषाः"
        title="Six Souls, Six Disguises"
        subtitle="The court of Virāṭa, unknowing, was for one year the safest house in all the world."
        align="center"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {DISGUISES.map((d) => (
          <article
            key={d.name}
            className="glass glass-hover p-5 relative overflow-hidden"
            style={{ borderColor: `${d.accent}40` }}
          >
            <div
              aria-hidden
              className="absolute -right-12 -top-12 w-36 h-36 rounded-full opacity-15"
              style={{ background: `radial-gradient(circle, ${d.accent}, transparent 70%)` }}
            />
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0"
                style={{
                  background: `radial-gradient(circle, ${d.accent}33, ${d.accent}11)`,
                  border: `1px solid ${d.accent}66`,
                  boxShadow: `0 0 18px ${d.accent}55`,
                }}
              >
                {d.glyph}
              </div>
              <div>
                <p className="font-sanskrit text-goldlight/85 text-sm">{d.sanskrit}</p>
                <p className="font-display text-lg text-parchment/90">{d.name}</p>
              </div>
            </div>
            <div className="border-t border-gold/15 pt-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/50">becomes</p>
              <p className="font-sanskrit text-goldlight/85 text-base mt-1">{d.aliasSanskrit}</p>
              <p className="font-display text-xl mb-2" style={{ color: d.accent }}>
                {d.alias}
              </p>
              <p className="text-parchment/75 text-xs italic mb-2">{d.role}</p>
              <p className="text-parchment/80 text-sm leading-relaxed">{d.detail}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Four key events */}
      <SectionTitle
        sanskrit="विराटयुद्धकथा"
        title="Four Events that Closed the Exile"
        align="center"
      />
      <div className="grid md:grid-cols-2 gap-5 mb-14">
        {EVENTS.map((e) => (
          <article
            key={e.title}
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
                <p className="font-sanskrit text-goldlight/85 text-base">{e.sanskrit}</p>
                <h3 className="font-display text-xl" style={{ color: e.accent }}>
                  {e.title}
                </h3>
              </div>
            </div>
            <p className="text-parchment/85 text-sm leading-relaxed">{e.story}</p>
          </article>
        ))}
      </div>

      {/* Source: Virata Parva */}
      <section className="glass p-6 sm:p-8" style={{ borderColor: `${VIRATA.accent}55` }}>
        <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55 mb-2">
          Source · Parva 04
        </p>
        <p className="font-sanskrit text-goldlight/85 text-lg mb-1">{VIRATA.sanskrit}</p>
        <h2 className="font-display text-2xl mb-3" style={{ color: VIRATA.accent }}>
          {VIRATA.name} — {VIRATA.meaning}
        </h2>
        <p className="text-parchment/80 leading-relaxed mb-5">{VIRATA.summary}</p>
        <h4 className="text-parchment/60 uppercase tracking-[0.3em] text-xs mb-3">Key events</h4>
        <ol className="space-y-2 list-decimal list-inside text-parchment/85">
          {VIRATA.keyEvents.map((ev, i) => (
            <li key={i} className="leading-relaxed">{ev}</li>
          ))}
        </ol>
      </section>

      <p className="text-center text-parchment/55 text-xs mt-10 italic">
        Thirteen years complete. Now: the embassy of peace — and the chariot drawn up between two armies.
      </p>
    </main>
  );
};

export default AgnatavasaPage;
