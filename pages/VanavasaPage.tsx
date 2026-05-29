import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PARVAS } from '../data/parvas';
import { EPISODES } from '../data/episodes';

// Curated highlights of the twelve-year forest exile (Aranya-vasa).
// Drawn from Vana Parva and the broader oral tradition.
const HIGHLIGHTS: { sanskrit: string; title: string; story: string; accent: string; glyph: string }[] = [
  {
    glyph: '🍚', accent: '#FFB300',
    sanskrit: 'अक्षयपात्रम्', title: 'The Akshaya Patra',
    story: 'On the first day of exile, the Sun-god Sūrya, pleased with Yudhishthira’s prayers, gifts him the Akshaya Patra — an inexhaustible bowl that yields any food until Draupadī herself has eaten. With it the Pāṇḍavas feed every sage and guest who finds their kuṭīra in the Kāmyaka forest.',
  },
  {
    glyph: '🏔️', accent: '#0EA5E9',
    sanskrit: 'पाशुपतास्त्रम्', title: 'Arjuna & the Kirāta',
    story: 'Arjuna ascends Indrakīla and stands on one toe in burning tapas. A wild hunter (Kirāta) appears; both shoot the same boar. The two grapple. When Arjuna’s every weapon shatters against the stranger, he bows — and Śiva reveals himself, granting the Pāśupata-astra, weapon of the end of time.',
  },
  {
    glyph: '☁️', accent: '#A78BFA',
    sanskrit: 'इन्द्रलोके', title: 'Arjuna in Indra’s Heaven',
    story: 'Carried to Amarāvatī by Mātali, Arjuna learns dance and song from Citrasena, gathers the Vajra, Brahmaśiras and a hundred celestial astras, and earns Urvaśī’s curse of impotence — the curse that will, one day, shield him as Bṛhannalā in Virāṭa’s court.',
  },
  {
    glyph: '🌸', accent: '#F472B6',
    sanskrit: 'सौगन्धिकम्', title: 'The Saugandhika Flower',
    story: 'A single thousand-petalled lotus drifts on the wind into Draupadī’s lap. Bhīma sets out to find more and storms north to Kubera’s garden — meeting on the way the old monkey Hanumān, his half-brother by Vāyu, who reminds him that strength without dharma is mere weight.',
  },
  {
    glyph: '🐂', accent: '#FF8C42',
    sanskrit: 'घोषयात्रा', title: 'The Ghoṣa-Yātrā',
    story: 'Duryodhana parades through the forest to flaunt his fortune before his exiled cousins, is captured by the Gandharva king Citrasena, and is freed only by Arjuna’s arrows — the very brothers he came to mock. Shame nearly drives him to fast unto death.',
  },
  {
    glyph: '⚔️', accent: '#B91C1C',
    sanskrit: 'जयद्रथापहरणम्', title: 'Jayadratha’s Attempt',
    story: 'While the brothers are away, the Sindhu-rāja Jayadratha tries to abduct Draupadī from the hermitage. Bhīma overtakes him, shaves his head leaving five tufts, and frees him at Yudhishthira’s word — planting the seed of a vow that will end on Day 14 at Kurukṣetra.',
  },
  {
    glyph: '🛡️', accent: '#FBBF24',
    sanskrit: 'कवच-कुण्डलदानम्', title: 'Karṇa’s Gift to Indra',
    story: 'Sūrya warns his son in a dream: Indra will come in a beggar’s guise to ask for the kavaca and kuṇḍala born with him. Karṇa, true to his vow never to refuse a brāhmaṇa at noon-prayer, peels them from his body with a knife — receiving the Śakti-astra in return, single-use, reserved for Arjuna and spent on Ghaṭotkaca.',
  },
  {
    glyph: '🐦', accent: '#34D399',
    sanskrit: 'यक्षप्रश्नम्', title: 'The Yakṣa-Praśna',
    story: 'Thirst drives the brothers, one by one, to a still lake — and one by one they fall. A crane-voice asks: answer my riddles, then drink. Only Yudhishthira answers. "What is the greatest wonder?" "Day after day countless beings die, yet the living believe they will not." The Yakṣa is Dharma in disguise; the brothers wake.',
  },
  {
    glyph: '📜', accent: '#E879F9',
    sanskrit: 'पुराण-कथाः', title: 'Tales Heard in the Forest',
    story: 'In the long evenings the sages narrate to console them — Nala and Damayantī, Sāvitrī who argued Yama out of her husband, Mārkaṇḍeya’s vision of pralaya, and the entire Rāmopākhyāna — a Rāmāyaṇa told to a king living in a forest by sages who knew the worth of stories.',
  },
];

const VANA = PARVAS.find((p) => p.number === 3)!;
const VANAVASA_EP = EPISODES.find((e) => e.id === 'vanavasa');

export const VanavasaPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="वनवासः"
        title="The Twelve Years of Exile"
        subtitle="Vana Parva — the longest book of the Mahabharata. Twelve monsoons in the Kāmyaka and Dvaita forests; twelve years in which the Pāṇḍavas gather astras, friends, and the patience of dharma."
      />

      {/* Hero quote panel */}
      {VANAVASA_EP && (
        <section
          className="glass p-6 sm:p-8 mb-12 relative overflow-hidden"
          style={{ borderColor: `${VANAVASA_EP.accent}55` }}
        >
          <div
            aria-hidden
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${VANAVASA_EP.accent}, transparent 70%)` }}
          />
          <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55 mb-2">
            {VANAVASA_EP.era}
          </p>
          {VANAVASA_EP.sanskrit && (
            <p className="font-sanskrit text-goldlight/85 text-lg mb-1">{VANAVASA_EP.sanskrit}</p>
          )}
          <h2 className="font-display text-3xl sm:text-4xl mb-3" style={{ color: VANAVASA_EP.accent }}>
            {VANAVASA_EP.title}
          </h2>
          <p className="text-parchment/85 leading-relaxed">{VANAVASA_EP.summary}</p>
          <div className="hr-ornate my-5" aria-hidden />
          <p className="font-quote italic text-parchment/80">{VANAVASA_EP.significance}</p>
        </section>
      )}

      {/* Curated highlights grid */}
      <SectionTitle
        sanskrit="वनगाथाः"
        title="Nine Stories from the Forest"
        subtitle="Each a teaching disguised as an adventure."
        align="center"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {HIGHLIGHTS.map((h) => (
          <article
            key={h.title}
            className="glass glass-hover p-5 relative overflow-hidden"
            style={{ borderColor: `${h.accent}40` }}
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-15"
              style={{ background: `radial-gradient(circle, ${h.accent}, transparent 70%)` }}
            />
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3"
              style={{
                background: `radial-gradient(circle, ${h.accent}33, ${h.accent}11)`,
                border: `1px solid ${h.accent}66`,
                boxShadow: `0 0 18px ${h.accent}55`,
              }}
            >
              {h.glyph}
            </div>
            <p className="font-sanskrit text-goldlight/85 text-base mb-1">{h.sanskrit}</p>
            <h3 className="font-display text-xl mb-2" style={{ color: h.accent }}>
              {h.title}
            </h3>
            <p className="text-parchment/80 text-sm leading-relaxed">{h.story}</p>
          </article>
        ))}
      </div>

      {/* Source: Vana Parva keyEvents */}
      <section className="glass p-6 sm:p-8" style={{ borderColor: `${VANA.accent}55` }}>
        <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55 mb-2">
          Source · Parva 03
        </p>
        <p className="font-sanskrit text-goldlight/85 text-lg mb-1">{VANA.sanskrit}</p>
        <h2 className="font-display text-2xl mb-3" style={{ color: VANA.accent }}>
          {VANA.name} — {VANA.meaning}
        </h2>
        <p className="text-parchment/80 leading-relaxed mb-5">{VANA.summary}</p>
        <h4 className="text-parchment/60 uppercase tracking-[0.3em] text-xs mb-3">Key events</h4>
        <ol className="space-y-2 list-decimal list-inside text-parchment/85">
          {VANA.keyEvents.map((ev, i) => (
            <li key={i} className="leading-relaxed">{ev}</li>
          ))}
        </ol>
      </section>

      <p className="text-center text-parchment/55 text-xs mt-10 italic">
        And so twelve years pass — and the thirteenth is yet to come.
      </p>
    </main>
  );
};

export default VanavasaPage;
