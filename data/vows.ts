import { Vow } from '../types';

/**
 * Pratijñās (vows) and Śāpas (curses) — the load-bearing utterances
 * of the Mahābhārata. The epic does not run on chance; it runs on
 * sworn words. Every major death and every major sparing is something
 * someone said out loud decades earlier and could not unsay.
 */
export const VOWS: Vow[] = [
  // ───────── Pratijñās ─────────
  {
    id: 'bhishma-pratijna',
    kind: 'Pratijna',
    title: 'Bhīṣma\'s Terrible Vow',
    sanskrit: 'भीष्मप्रतिज्ञा',
    glyph: '🛡️',
    accent: '#D4AF37',
    utteredBy: 'Prince Devavrata (henceforth Bhīṣma)',
    utteredOn: 'The fisherman-chief, father of Satyavatī',
    occasion: 'To clear the path for his father Śāntanu\'s marriage to Satyavatī',
    parva: 'Ādi Parva',
    oath:
      'I renounce the throne — and lest any son of mine ever claim it, **I swear lifelong celibacy.** From this day no Kuru-prince of my line shall ever exist.',
    consequence: [
      'The gods rain flowers and call him **Bhīṣma** — *He of the Terrible Vow*. Heaven grants him *icchā-mṛtyu* — death only when he chooses.',
      'The vow locks every future succession crisis. When Citrāṅgada and Vicitravīrya die heirless, Bhīṣma cannot father an heir himself — Vyāsa must be called instead, and the niyoga begets Dhṛtarāṣṭra (blind), Pāṇḍu (pale), Vidura (low-born). The whole dynastic tangle rests on this one vow.',
      'On day ten of Kurukṣetra, Bhīṣma falls on a bed of arrows but does not die — the vow holds him up. He waits 58 days for *uttarāyaṇa* and only then releases his breath, having out-lived the war that he could not stop.',
    ],
    fulfilledOn: 'Kurukṣetra Day 10 → Day 68 (bed of arrows, uttarāyaṇa)',
  },
  {
    id: 'draupadi-pratijna',
    kind: 'Pratijna',
    title: 'Draupadī\'s Vow of the Unbound Hair',
    sanskrit: 'द्रौपदीप्रतिज्ञा',
    glyph: '🩸',
    accent: '#B91C1C',
    utteredBy: 'Draupadī',
    utteredOn: 'The full court of Hastināpura',
    occasion: 'The moment Duḥśāsana dragged her by the hair into the dice-hall',
    parva: 'Sabhā Parva',
    oath:
      'My hair shall stay **unbound and bloodied** until the day I wash it in **Duḥśāsana\'s blood**. Until that day, no oil, no comb, no braiding shall touch it.',
    consequence: [
      'For thirteen years — twelve of vanavāsa and one of agnātavāsa — she walks with hair loose down her back, a queen disguised as a serving-woman, the vow renewing itself every dawn.',
      'On day sixteen of Kurukṣetra, Bhīma tears open Duḥśāsana\'s chest, drinks the blood that touches his moustache, and brings the rest to Draupadī. She washes her hair in it that evening, and finally braids it. The braid is not aesthetic — it is the lock on a fulfilled oath.',
    ],
    fulfilledOn: 'Kurukṣetra Day 16 (Bhīma kills Duḥśāsana)',
  },
  {
    id: 'bhima-pratijna',
    kind: 'Pratijna',
    title: 'Bhīma\'s Twin Vow',
    sanskrit: 'भीमप्रतिज्ञा',
    glyph: '⚔️',
    accent: '#FF8C42',
    utteredBy: 'Bhīmasena',
    utteredOn: 'Duḥśāsana and Duryodhana, in the dice-hall',
    occasion: 'Watching his wife dragged by the hair and his brothers helpless',
    parva: 'Sabhā Parva',
    oath:
      'I shall **tear open the chest of Duḥśāsana** and drink his blood. I shall **shatter the thigh of Duryodhana** with my mace. If I do not, may I never enter the world of my fathers.',
    consequence: [
      'Both vows are fulfilled, exactly. Day 16: Bhīma rips Duḥśāsana open with his hands and drinks. Day 18: in the mace-duel by the lake of Dvaipāyana, he strikes Duryodhana below the navel — adharma by the rules of mace-combat — and shatters the thigh that Duryodhana once slapped at Draupadī.',
      'Balarāma, watching the foul stroke, lifts his plough to kill Bhīma. Kṛṣṇa stops him with one phrase: *a vow is a vow*. Even the rules of fair combat bow to a sworn word.',
    ],
    fulfilledOn: 'Kurukṣetra Day 16 & 18',
  },
  {
    id: 'arjuna-pratijna',
    kind: 'Pratijna',
    title: 'Arjuna\'s Sundown Vow',
    sanskrit: 'अर्जुनप्रतिज्ञा',
    glyph: '🏹',
    accent: '#F5D061',
    utteredBy: 'Arjuna',
    utteredOn: 'Jayadratha (king of Sindhu)',
    occasion: 'On learning Jayadratha\'s strategy let the cakra-vyūha close around Abhimanyu',
    parva: 'Drona Parva',
    oath:
      'Before tomorrow\'s **sun sets** I shall kill **Jayadratha** — or I shall enter the fire myself.',
    consequence: [
      'Day 14 of Kurukṣetra is the longest day of the war. Droṇa builds vyūha after vyūha to keep Arjuna away from Jayadratha. Hours pass. The sun lowers. The Kaurava army cheers — Arjuna is about to enter the fire and the war is over.',
      'Kṛṣṇa raises his Sudarśana-cakra in front of the sun, creating an artificial dusk. Jayadratha steps out from his hiding place to watch Arjuna die. The cakra moves — sunlight returns — and Arjuna\'s arrow, fired the instant the false-sundown lifts, takes Jayadratha\'s head and carries it to his father\'s lap (a separate curse made that the head must not touch the ground).',
    ],
    fulfilledOn: 'Kurukṣetra Day 14 (the day of Jayadratha-vadha)',
  },
  {
    id: 'krishna-pratijna',
    kind: 'Pratijna',
    title: 'Kṛṣṇa\'s Vow to Stay Weaponless',
    sanskrit: 'कृष्णप्रतिज्ञा',
    glyph: '🪈',
    accent: '#3B82F6',
    utteredBy: 'Kṛṣṇa Vāsudeva',
    utteredOn: 'Both sides, before the war',
    occasion: 'The choice he gave Arjuna and Duryodhana: my whole army, or me — unarmed',
    parva: 'Udyoga Parva',
    oath:
      'I will lift **no weapon** in this war. I will be charioteer, counsellor, voice — but never warrior. My Nārāyaṇī sena fights for whoever the other side chooses.',
    consequence: [
      'Twice during the war, Bhīṣma\'s arrows so wound Arjuna that Kṛṣṇa leaps from the chariot, picks up a chariot-wheel as a discus, and runs at Bhīṣma — about to break his own vow. Each time Bhīṣma drops his bow in joy: *kill me, Govinda — I will die at your hand and not Arjuna\'s.* And each time Arjuna runs after Kṛṣṇa and pulls him back, weeping. The vow holds.',
      'It also clears the philosophical stage. Because Kṛṣṇa never fights, every word he speaks at Kurukṣetra — including the Gītā — has the authority of one who has voluntarily refused force.',
    ],
    fulfilledOn: 'The whole war (the vow is itself the consequence)',
  },
  {
    id: 'satyaki-pratijna',
    kind: 'Pratijna',
    title: 'Sātyaki\'s Vow for Bhūriśravas',
    sanskrit: 'सात्यकिप्रतिज्ञा',
    glyph: '🛡️',
    accent: '#0E7C7B',
    utteredBy: 'Sātyaki (Yuyudhāna)',
    utteredOn: 'Bhūriśravas, Kaurava prince',
    occasion: 'A long-standing blood-feud between the Yādavas and the Bhojas',
    parva: 'Drona Parva',
    oath:
      'I shall not return from this war without killing **Bhūriśravas**.',
    consequence: [
      'Day 14: Bhūriśravas overpowers Sātyaki and is about to behead him in the dust. Arjuna, far across the field, cuts off Bhūriśravas\'s sword-arm with a long-shot arrow — calling it foul is the easy reading, *but the rule was: do not strike below the belt with a mace; nothing about saving a kinsman from a different sworn man*.',
      'Bhūriśravas sits down to fast unto death in protest. Sātyaki, freed, walks up and beheads him anyway, fulfilling the vow over the protests of every onlooker. The line in the epic: *a vow is heavier than a corpse\'s dignity*.',
    ],
    fulfilledOn: 'Kurukṣetra Day 14',
  },
  // ───────── Śāpas ─────────
  {
    id: 'shapa-pandu',
    kind: 'Shapa',
    title: 'The Sage Kindama\'s Curse',
    sanskrit: 'किन्दमशापः',
    glyph: '🦌',
    accent: '#15803D',
    utteredBy: 'Sage Kindama (in deer form)',
    utteredOn: 'King Pāṇḍu',
    occasion: 'Pāṇḍu shot a mating pair of deer who were actually a sage and his wife',
    parva: 'Ādi Parva',
    oath:
      'The moment you **lie with your wife in desire**, you shall **die** in that same embrace.',
    consequence: [
      'Pāṇḍu renounces the throne and retires to the Himālayan forests with Kuntī and Mādrī. The curse forces an extraordinary work-around: the Pāṇḍavas must be begotten by gods (Dharma, Vāyu, Indra, the Aśvins) through Kuntī\'s mantra — Yudhiṣṭhira, Bhīma, Arjuna, and the twins.',
      'Years pass. One spring afternoon Mādrī appears too beautiful; Pāṇḍu reaches for her; the curse fires; he dies in her arms. Mādrī follows him onto the pyre. Kuntī walks the five boys back to Hastināpura, and a generation that should never have been born takes the stage.',
    ],
    fulfilledOn: 'A spring afternoon in the Himālayan forest',
  },
  {
    id: 'shapa-karna',
    kind: 'Shapa',
    title: 'The Twin Curses on Karṇa',
    sanskrit: 'कर्णशापौ',
    glyph: '☀️',
    accent: '#FF8C42',
    utteredBy: 'Sage Paraśurāma & a forest brāhmaṇa',
    utteredOn: 'Karṇa',
    occasion: 'Paraśurāma discovers Karṇa is no brāhmaṇa; a brāhmaṇa whose cow Karṇa killed',
    parva: 'Vana Parva (told in flashback)',
    oath:
      'Paraśurāma: *The astras I taught you shall **fail at the moment you most need them**.* — The brāhmaṇa: *Your chariot-wheel shall **sink into the earth** at the moment of your greatest need, even as my cow sank to die.*',
    consequence: [
      'Day 17 of Kurukṣetra. Karṇa faces Arjuna. He reaches for the Brahmāstra mantras Paraśurāma taught him — and the words *will not come to mind*. The first curse fires.',
      'In the same fight, the left wheel of his chariot sinks into the soft earth. He jumps down to lift it. He looks at Arjuna and invokes the rules of fair war: *do not strike a weaponless man fixing his wheel*. Kṛṣṇa answers from the other chariot: *and where was dharma when Abhimanyu was killed by six men in a circle? Loose the arrow, Pārtha.* The second curse fires. Arjuna\'s Añjalika arrow takes Karṇa\'s head.',
    ],
    fulfilledOn: 'Kurukṣetra Day 17',
  },
  {
    id: 'shapa-amba',
    kind: 'Shapa',
    title: 'Ambā\'s Curse Reborn as Śikhaṇḍī',
    sanskrit: 'अम्बाशापः',
    glyph: '🔥',
    accent: '#B91C1C',
    utteredBy: 'Princess Ambā',
    utteredOn: 'Bhīṣma',
    occasion: 'Bhīṣma abducted her, then refused to marry her, then her chosen Śālva rejected her too',
    parva: 'Udyoga Parva',
    oath:
      'I shall be the **cause of your death**, Bhīṣma — in this life or the next.',
    consequence: [
      'Ambā does tapas till Śiva appears and grants the boon. She enters fire. She is reborn as the daughter of Drupada, raised as a son, exchanges her sex with a yakṣa, becomes **Śikhaṇḍī** — the warrior who is, in some sense, a woman.',
      'Day 10 of Kurukṣetra. Arjuna places Śikhaṇḍī at the front of his chariot. Bhīṣma — who has sworn never to strike a woman or one who was a woman — lowers his bow. Arjuna\'s arrows pour through. Bhīṣma falls on the bed of arrows. The curse is exact: *cause* of death, not weapon. Arjuna shot; Ambā made him fall.',
    ],
    fulfilledOn: 'Kurukṣetra Day 10',
  },
  {
    id: 'shapa-gandhari',
    kind: 'Shapa',
    title: 'Gāndhārī\'s Curse on Kṛṣṇa',
    sanskrit: 'गान्धारीशापः',
    glyph: '👁️',
    accent: '#E879F9',
    utteredBy: 'Queen Gāndhārī',
    utteredOn: 'Kṛṣṇa',
    occasion: 'Standing over the corpses of her hundred sons after Kurukṣetra',
    parva: 'Stri Parva',
    oath:
      'You could have stopped this war, Madhusūdana, and you did not. Therefore, **thirty-six years from today**, you shall watch your own **Yādava clan destroy itself** in a drunken brawl, and you yourself shall die alone in the forest, of a hunter\'s stray arrow.',
    consequence: [
      'Kṛṣṇa accepts the curse with folded hands. *So be it.* He even thanks her — *I had foreseen this too.*',
      'Thirty-six years pass. In Dvārakā the Yādavas drink, quarrel, take up reeds from the seashore that have hardened into iron clubs by a separate curse, and beat each other to death in a single night. Balarāma leaves his body by the sea. Kṛṣṇa walks into the forest, lies down under a pīpal, and the hunter Jara mistakes the sole of his foot for a deer and looses an arrow. Dvārakā sinks into the sea seven days later.',
    ],
    fulfilledOn: 'Mausala Parva (36 years after Kurukṣetra)',
  },
  {
    id: 'shapa-ashvatthama',
    kind: 'Shapa',
    title: 'Kṛṣṇa\'s Curse on Aśvatthāman',
    sanskrit: 'अश्वत्थामशापः',
    glyph: '💎',
    accent: '#3B82F6',
    utteredBy: 'Kṛṣṇa',
    utteredOn: 'Aśvatthāman, son of Droṇa',
    occasion: 'Aśvatthāman directed the Brahmaśiras-astra at Uttarā\'s unborn child to end the Pāṇḍava line',
    parva: 'Sauptika Parva',
    oath:
      'You shall wander the earth for **three thousand years**, alone, **stinking of pus and blood** from the wound where the **maṇi was torn from your forehead**, never speaking to a soul, never welcomed by one. Immortality without rest — *that* is your reward.',
    consequence: [
      'Kṛṣṇa restores Uttarā\'s child, who will be born as Parīkṣit — Janamejaya\'s father, the king to whom the Mahābhārata itself will one day be told. The forehead-jewel is plucked from Aśvatthāman, leaving an open wound that never heals.',
      'In folk tradition across India, sightings of a tall wounded wanderer reeking of pus, refused water at every village well, are still attributed to him — a man cursed not with death but with deathlessness, condemned to outlast every age.',
    ],
    fulfilledOn: 'From the night-massacre onward, perpetually',
  },
  {
    id: 'shapa-urvashi',
    kind: 'Shapa',
    title: 'Urvaśī\'s Curse — Arjuna as Bṛhannalā',
    sanskrit: 'उर्वशीशापः',
    glyph: '🎭',
    accent: '#E879F9',
    utteredBy: 'Apsaras Urvaśī',
    utteredOn: 'Arjuna',
    occasion: 'Arjuna in Indra\'s heaven refused her advances, calling her *mother* (since she was once Purūravas\'s wife, his ancestor)',
    parva: 'Vana Parva',
    oath:
      'Since you behave as a **eunuch** in my presence, *you shall live as a eunuch* — for one year of your choosing.',
    consequence: [
      'Indra softens the curse: *one year, of your choosing*. Arjuna stores it.',
      'In the thirteenth year of exile — the year of agnātavāsa — he cashes it in. He arrives at Virāṭa\'s court as **Bṛhannalā**, dance-teacher to princess Uttarā, with bangles and braid and the most-needed disguise of his life. A curse that should have shamed him became the one shield that hid the world\'s greatest archer for exactly twelve months.',
    ],
    fulfilledOn: 'Year 13 of exile (Virāṭa Parva)',
  },
];
