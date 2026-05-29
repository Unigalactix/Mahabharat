import { Backstory } from '../types';

/**
 * The Adi-Parva backstories — the lineage tales that set every stage of
 * the main epic. Each entry is the *source* of a key thread the reader
 * will meet later: Bhishma's vow explains why he won't take the throne,
 * Pandu's curse explains the divine births, Karna's birth explains his
 * grief, Drona-Drupada explains the partition of Panchala, and so on.
 *
 * Order is roughly chronological within the Adi Parva. The `whyItMatters`
 * field is the forward-link into the main story.
 */
export const BACKSTORIES: Backstory[] = [
  {
    id: 'shantanu-ganga',
    title: 'Śāntanu & Gaṅgā',
    sanskrit: 'शान्तनुगङ्गासंयोगः',
    glyph: '🌊',
    accent: '#3b82f6',
    parva: 'Adi Parva',
    era: 'Pre-Bharata',
    characters: ['Shantanu', 'Ganga', 'Devavrata (Bhishma)'],
    summary: [
      'King Śāntanu of the Kuru house meets a luminous woman on the bank of the Gaṅgā. She agrees to be his wife on one condition — he must never question her actions. He swears.',
      'Seven sons are born. One by one, Gaṅgā carries each newborn to the river and drowns him. Śāntanu, terrified of breaking his vow, watches in silence. When the eighth is born, he can hold his oath no longer.',
      'Gaṅgā reveals herself: the eight sons are the Vāsus, cursed to be born mortal, and she was releasing them from human birth. The eighth she will keep and raise — and one day return to him. That eighth son is Devavrata, whom the world will know as **Bhīṣma**.',
    ],
    whyItMatters:
      'The entire epic turns on Bhīṣma. This is how he comes to be a Kuru prince at all.',
  },
  {
    id: 'bhishma-pratijna',
    title: 'Bhīṣma-Pratijñā — The Terrible Vow',
    sanskrit: 'भीष्मप्रतिज्ञा',
    glyph: '🪷',
    accent: '#D4AF37',
    parva: 'Adi Parva',
    era: 'Pre-Bharata',
    characters: ['Devavrata (Bhishma)', 'Shantanu', 'Satyavati', 'Dasharaja'],
    summary: [
      'Years after Gaṅgā, Śāntanu falls in love with Satyavatī, the fisherwoman daughter of Dāśarāja. The chieftain refuses to give her unless her sons — and not Devavrata — inherit the throne.',
      'Devavrata learns of his father\'s silent grief, goes to Dāśarāja himself, and renounces the throne forever. The fisherman is unmoved: even Devavrata\'s sons might one day claim it.',
      'And so Devavrata takes the vow that earns him the name **Bhīṣma** (*the terrible*): he will never marry, never father a child, never know a woman. The gods rain flowers on him; the earth itself shakes. His father grants him the boon of dying only when he chooses.',
    ],
    whyItMatters:
      'Bhīṣma cannot ascend the throne, cannot leave an heir, and cannot die unwilling — the three locks that force every later crisis of succession.',
  },
  {
    id: 'satyavati-parashara',
    title: 'Satyavatī & Parāśara — The Birth of Vyāsa',
    sanskrit: 'व्यासजन्म',
    glyph: '🛶',
    accent: '#0E7C7B',
    parva: 'Adi Parva',
    era: 'Pre-Bharata',
    characters: ['Satyavati (Matsyagandha)', 'Parashara', 'Vyasa'],
    summary: [
      'Long before her marriage to Śāntanu, the young Satyavatī ferries travellers across the Yamunā. She is called *Matsyagandhā* — She-Who-Smells-of-Fish — and bears the scent of the river.',
      'The sage Parāśara crosses with her. Seeing what he sees, he grants her a divine fragrance no rain can wash away, and a boon that her virginity will be unaffected by the meeting. On the island in the middle of the river, the sage Kṛṣṇa-Dvaipāyana is born and grows in a single day.',
      'He will be called **Vyāsa** — *the compiler* — and he will arrange the Vedas, father the Kuru princes, and dictate the Mahābhārata itself to Ganeśa.',
    ],
    whyItMatters:
      'Vyāsa is the author of the epic *and* a character inside it. Every Kuru prince — Dhṛtarāṣṭra, Pāṇḍu, Vidura — is born from him.',
  },
  {
    id: 'amba',
    title: 'Ambā, Ambikā & Ambālikā',
    sanskrit: 'अम्बायाः प्रतिज्ञा',
    glyph: '🗡️',
    accent: '#B91C1C',
    parva: 'Adi Parva',
    era: 'Pre-Kuru',
    characters: ['Bhishma', 'Amba', 'Ambika', 'Ambalika', 'Vichitravirya', 'Vyasa'],
    summary: [
      'Bhīṣma abducts the three princesses of Kāśī — Ambā, Ambikā, and Ambālikā — at their svayaṃvara, to wed his half-brother Vicitravīrya. Ambā confesses she had already chosen Śālva. Bhīṣma sends her back; Śālva, shamed, refuses her.',
      'Ambā returns to Bhīṣma. *You took me — now marry me.* Bhīṣma cannot: his vow. She turns to Paraśurāma, who fights Bhīṣma to a standstill in a 23-day duel. Defeat for Ambā either way. She walks into the fire to be reborn as Bhīṣma\'s killer.',
      'Vicitravīrya dies childless. Satyavatī summons Vyāsa for **niyoga** with the widows: Ambikā closes her eyes (Dhṛtarāṣṭra is born blind), Ambālikā goes pale (Pāṇḍu is born pale), a maid is sent (Vidura, the dharma incarnate, is born of her).',
    ],
    whyItMatters:
      'Ambā is reborn as **Śikhaṇḍī** — the one being Bhīṣma will not fight, the key that unlocks his death on day ten.',
  },
  {
    id: 'pandu-curse',
    title: 'Pāṇḍu\'s Curse — The Deer of Kindama',
    sanskrit: 'पाण्डुशापः',
    glyph: '🦌',
    accent: '#FF8C42',
    parva: 'Adi Parva',
    era: 'Pre-Pandava',
    characters: ['Pandu', 'Kindama', 'Kunti', 'Madri'],
    summary: [
      'King Pāṇḍu, hunting in the forest, looses an arrow at what he thinks is a stag in rut. The deer is the sage Kindama, joined with his wife in deer-form.',
      'Dying, the sage curses Pāṇḍu: the moment he ever again approaches a woman in love, he himself will die. The king renounces his throne to Dhṛtarāṣṭra and goes into the forest with his two queens.',
      'Kuntī reveals the mantra given to her in childhood by the sage Durvāsa — by it she can summon any god to father a child. So Yama gives Yudhiṣṭhira, Vāyu gives Bhīma, Indra gives Arjuna. Mādrī uses the mantra once and bears the twins Nakula and Sahadeva by the Aśvins. One spring day, Pāṇḍu forgets — and the curse takes him.',
    ],
    whyItMatters:
      'The five Pāṇḍavas are sons of gods, not of Pāṇḍu. The curse is the reason their lineage is divine.',
  },
  {
    id: 'karna-janma',
    title: 'Karṇa-janma — The Sun\'s First Gift',
    sanskrit: 'कर्णजन्म',
    glyph: '☀️',
    accent: '#F5D061',
    parva: 'Adi Parva',
    era: 'Pre-Pandava',
    characters: ['Kunti (Pritha)', 'Surya', 'Karna', 'Adhiratha', 'Radha'],
    summary: [
      'As a girl in the house of Kuntibhoja, Pṛthā tends to the irascible sage Durvāsa for a full year. Pleased, he gives her a mantra: any god she calls will give her a son.',
      'Out of pure curiosity she tries it — and Sūrya the sun-god stands before her, bound by the mantra. He grants her a son born with golden armor (*kavaca*) and earrings (*kuṇḍala*) fused to his skin. Unmarried, terrified, she places the infant in a basket on the Aśva river.',
      'A childless charioteer, Adhiratha, finds the basket; his wife Rādhā raises the boy as her own. He grows up as **Karṇa** — sūta-putra to the world, the Sun\'s son in truth, and the only soul who could ever have stood against Arjuna as an equal.',
    ],
    whyItMatters:
      'Karṇa\'s entire tragedy — the friend of Duryodhana, the slayer of his own brothers — begins in this basket on the river.',
  },
  {
    id: 'drona-drupada',
    title: 'Droṇa & Drupada — Friendship Broken, Fire Born',
    sanskrit: 'द्रोणद्रुपदसङ्ग्रामः',
    glyph: '🏹',
    accent: '#E879F9',
    parva: 'Adi Parva',
    era: 'Pre-Pandava',
    characters: ['Drona', 'Drupada', 'Ashwatthama', 'Dhrishtadyumna', 'Draupadi'],
    summary: [
      'Droṇa and Drupada study together in the āśrama of Bharadvāja. In youth they promise: whatever I have, you may have. Years pass. Drupada becomes king of Pāñcāla; Droṇa is a starving brahmin whose son Aśvatthāmā cries for milk.',
      'Droṇa goes to the throne to claim the old promise. Drupada laughs in his face: *a king is not a friend to a beggar*. Droṇa says nothing and leaves — to find Hastināpura, to teach the Kuru princes, to make Arjuna the supreme archer of the age.',
      'When the time comes for **guru-dakṣiṇā**, Droṇa asks only one thing: bring me Drupada bound. Arjuna does. Droṇa takes half the kingdom and lets the king live. Drupada, blazing with shame, performs a yajña — and from its fire rises **Dhṛṣṭadyumna** (born to kill Droṇa) and **Draupadī** (born to ruin the Kurus).',
    ],
    whyItMatters:
      'A broken friendship in youth gives the war its Pāñcāla allies, its commander of the Pāṇḍava army, and its central queen.',
  },
  {
    id: 'lakshagriha',
    title: 'Lākṣāgṛha — The Wax-Palace at Vāraṇāvata',
    sanskrit: 'लाक्षागृहम्',
    glyph: '🔥',
    accent: '#FF8C42',
    parva: 'Adi Parva',
    era: 'Pre-Pandava',
    characters: ['Duryodhana', 'Purochana', 'Vidura', 'Yudhishthira', 'Bhima', 'Kunti'],
    summary: [
      'When Pāṇḍu\'s sons grow up at Hastināpura, Duryodhana sees his birthright slipping. He sends Purocana to Vāraṇāvata to build a guest palace for the Pāṇḍavas — secretly out of lac, hemp, and ghee. One torch and it will all go up.',
      'Vidura suspects everything and warns Yudhiṣṭhira in coded Mleccha speech. He sends a miner who digs a tunnel from the palace to the forest. The Pāṇḍavas sleep there for a year as if at ease, knowing nothing.',
      'On the chosen night, Bhīma sets the palace alight himself — Purocana inside it — and the five brothers with their mother escape through the tunnel. The world will believe them dead for a year. They walk on into the forest, into Hidiṃba, into Bakāsura, into Pāñcāla.',
    ],
    whyItMatters:
      'The Pāṇḍavas\' first *real* exile, and the first time Duryodhana tries to kill them. Everything after — Draupadī, Indraprastha, the dice — flows from this fire.',
  },
  {
    id: 'forest-asuras',
    title: 'Bakāsura · Hiḍimbā · Hiḍimba',
    sanskrit: 'वने राक्षसवधः',
    glyph: '🌳',
    accent: '#15803D',
    parva: 'Adi Parva',
    era: 'Pre-Pandava',
    characters: ['Bhima', 'Hidimba', 'Hidimbi', 'Bakasura', 'Ghatotkacha'],
    summary: [
      'In the forest after Vāraṇāvata, the rākṣasa Hiḍimba smells the sleeping Pāṇḍavas and sends his sister Hiḍimbā to lure them. She falls in love with Bhīma instead. Hiḍimba attacks; Bhīma tears him in half.',
      'Hiḍimbā weds Bhīma with Kuntī\'s blessing for one year. From them is born **Ghaṭotkaca** — the half-rākṣasa son who will, decades later, take the **Vāsava-śakti** meant for Arjuna and so save his life on the night of the fourteenth day.',
      'In the brāhmaṇa village of Ekacakrā, the demon Bakāsura takes a cart of food and a man as tribute every week. Bhīma goes in disguise, eats the food himself, and breaks the demon\'s back. The village is freed; the Pāṇḍavas walk on, toward Pāñcāla.',
    ],
    whyItMatters:
      'The exile forges Bhīma into the slayer he must become — and gives the future war the warrior who saves Arjuna by dying instead of him.',
  },
  {
    id: 'draupadi-svayamvara',
    title: 'Draupadī-Svayaṃvara — The Fish-Eye Target',
    sanskrit: 'द्रौपदीस्वयंवरः',
    glyph: '🐟',
    accent: '#E879F9',
    parva: 'Adi Parva',
    era: 'Pre-Pandava',
    characters: ['Draupadi', 'Drupada', 'Arjuna', 'Karna', 'Krishna', 'Kunti'],
    summary: [
      'King Drupada, knowing only Arjuna could ever string the bow, holds a svayaṃvara: pierce the eye of a wooden fish spinning overhead by looking only at its reflection in oil below. Karṇa lifts the bow; Draupadī refuses the *sūta-putra*. King after king fails.',
      'A young brāhmaṇa rises from the crowd — Arjuna, in disguise. He bends the bow, looses the arrow, takes the prize. The Pāṇḍavas walk back to their hermitage with the woman they have won.',
      'Kuntī, busy inside, calls out without looking: *whatever you have brought, share equally among yourselves*. A mother\'s word cannot be unsaid. Vyāsa himself rules: Draupadī shall be the wife of all five. The thread of the entire war is tied right here.',
    ],
    whyItMatters:
      'Draupadī becomes the queen of all the Pāṇḍavas — and the woman whose public humiliation in the dice-hall will eventually demand Kurukṣetra itself.',
  },
];
