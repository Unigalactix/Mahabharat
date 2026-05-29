import { Upakhyana } from '../types';

/**
 * The Upākhyānas — the inset epics the Mahābhārata carries inside itself.
 * Sages tell these to the Pāṇḍavas (most often in the Vana Parva, when
 * they are in exile and need consoling) as proof that others have suffered
 * worse and still kept dharma.
 *
 * The Rāmopākhyāna is the entire Rāmāyaṇa told inside the Mahābhārata —
 * Mārkaṇḍeya himself tells Yudhiṣṭhira that Rāma's exile was harder than
 * his own. The Mahābhārata is, in this sense, a frame-tale that contains
 * other epics.
 */
export const UPAKHYANAS: Upakhyana[] = [
  {
    id: 'nala-damayanti',
    title: 'Nala & Damayantī',
    sanskrit: 'नलोपाख्यानम्',
    glyph: '🦢',
    accent: '#F5D061',
    parva: 'Vana Parva',
    toldBy: 'Sage Bṛhadaśva',
    toldTo: 'Yudhiṣṭhira (consoling him after the dice loss)',
    theme: 'Love',
    characters: ['Nala', 'Damayanti', 'Pushkara', 'Kali', 'Rituparna'],
    summary: [
      'Princess **Damayantī** of Vidarbha hears of king **Nala** of Niṣadha from a golden goose and falls in love sight-unseen. At her svayaṃvara, four gods — Indra, Agni, Varuṇa, Yama — disguise themselves as Nala to test her. She prays to the gods themselves and chooses the real Nala by the tell that he alone casts a shadow.',
      'The asura **Kali** enters Nala and infects him with a passion for dice. He loses everything to his brother **Puṣkara** — kingdom, robes, even his right to drink water from his own land. Damayantī follows him into the forest. One night, ashamed, he cuts her sari in half and slips away. She wakes alone in the wilderness.',
      'She finds her way back to her father; Nala wanders disguised as the deformed charioteer **Bāhuka** in the court of king **Ṛtuparṇa**. Damayantī, suspecting, stages a second svayaṃvara that no horse can reach in a day — except Bāhuka\'s. He arrives, the disguise breaks, the curse of Kali lifts, the dice are re-cast and won. Niṣadha is restored.',
    ],
    moral:
      'Bṛhadaśva tells Yudhiṣṭhira: even the gentlest king fell to dice — but love kept faith, and the kingdom returned. Yours will too.',
  },
  {
    id: 'savitri-satyavan',
    title: 'Sāvitrī & Satyavān',
    sanskrit: 'सावित्र्युपाख्यानम्',
    glyph: '🌿',
    accent: '#15803D',
    parva: 'Vana Parva',
    toldBy: 'Sage Mārkaṇḍeya',
    toldTo: 'Yudhiṣṭhira (after he asks if any woman ever matched Draupadī in devotion)',
    theme: 'Devotion',
    characters: ['Savitri', 'Satyavan', 'Yama', 'Aswapati', 'Dyumatsena'],
    summary: [
      'Princess **Sāvitrī** chooses her own husband — **Satyavān**, son of a blind king living in forest exile. The sage Nārada warns her: Satyavān will die exactly one year from today. She refuses to choose anyone else. *Once a woman chooses, she chooses for life.*',
      'A year passes. On the appointed day she goes with him to the forest. He cuts wood, complains of a headache, lays his head in her lap, and dies. **Yama**, lord of death, comes himself to carry the soul — Satyavān\'s thread is too pure for a lesser god.',
      'Sāvitrī follows. Yama tries to send her back. She walks on. To make her leave he grants her three boons — anything *except her husband\'s life*. She asks for her father-in-law\'s sight, then his kingdom, then a hundred sons of her own. Yama smiles and grants. Then she points out: how shall I bear sons if my husband is dead? Yama, caught by his own word, returns Satyavān. They walk home together at sundown.',
    ],
    moral:
      'Mārkaṇḍeya tells Yudhiṣṭhira: yes — Draupadī has her equal. A devoted wife can out-argue Yama himself.',
  },
  {
    id: 'shakuntala-dushyanta',
    title: 'Śakuntalā & Duṣyanta — Origin of *Bhārata*',
    sanskrit: 'शकुन्तलोपाख्यानम्',
    glyph: '🦌',
    accent: '#E879F9',
    parva: 'Adi Parva',
    toldBy: 'Vyāsa (in the Mahābhārata\'s own preface)',
    toldTo: 'Janamejaya',
    theme: 'Love',
    characters: ['Shakuntala', 'Dushyanta', 'Kanva', 'Bharata', 'Menaka', 'Vishvamitra'],
    summary: [
      '**Śakuntalā** is the daughter of the sage Viśvāmitra and the apsaras Menakā, abandoned at birth and raised by sage Kaṇva. King **Duṣyanta**, hunting in the forest, finds her at the āśrama and marries her there by the Gāndharva rite. He gives her his signet ring and leaves, promising to send for her.',
      'She forgets to honour the sage Durvāsa, who curses her: *the one you think of, he will forget you*. Kaṇva sends her to court; the ring slips into a river on the way. Duṣyanta does not recognise her. Shamed, she returns to the forest and bears the child alone.',
      'Years later a fisherman finds the ring in a fish\'s belly. The king remembers. He searches and finds his son already grown — a child fearless enough to count the teeth of lion cubs while their mother watched. The boy\'s name is **Bharata**. From him the dynasty takes its name; from him the land takes the name **Bhārata-varṣa**, and our epic the name **Mahā-bhārata**.',
    ],
    moral:
      'A king\'s forgetfulness almost lost a dynasty — but a ring, a fisherman, and a child fearless of lions named a whole nation.',
  },
  {
    id: 'yayati',
    title: 'Yayāti — The Borrowed Youth',
    sanskrit: 'ययात्युपाख्यानम्',
    glyph: '⏳',
    accent: '#FF8C42',
    parva: 'Adi Parva',
    toldBy: 'Vyāsa (in the lineage prologue)',
    toldTo: 'Janamejaya',
    theme: 'Wisdom',
    characters: ['Yayati', 'Devayani', 'Sharmishtha', 'Puru', 'Yadu', 'Shukra'],
    summary: [
      'King **Yayāti** marries **Devayānī** the brāhmaṇa princess, and secretly takes her maid **Śarmiṣṭhā** as a co-wife. When the secret breaks, Devayānī\'s father, the sage **Śukrācārya**, curses Yayāti with instant old age.',
      'Yayāti pleads. Śukra relents — the king may transfer his old age to any willing son, and take the son\'s youth instead. He asks each in turn. **Yadu**, his eldest, refuses; Yayāti curses Yadu that no descendant of his will ever rule the kingdom — and from Yadu will spring the **Yādavas**, Kṛṣṇa\'s line, royal in glory but never on the Kuru throne. Only the youngest, **Puru**, accepts.',
      'For a thousand years Yayāti enjoys the world with his son\'s body. At last he returns Puru\'s youth and says the verse the whole epic remembers: *Desire is never quieted by enjoyment of desire; it only blazes higher, like fire fed with ghee.* He retires to the forest in peace, and Puru is crowned. The Kuru dynasty descends from Puru; the Yādavas from Yadu — two branches of one family that meet again at Kurukṣetra.',
    ],
    moral:
      'A thousand years of pleasure taught Yayāti what one day of restraint would have: desire cannot be exhausted, only renounced.',
  },
  {
    id: 'ashtavakra',
    title: 'Aṣṭāvakra — The Eight-Bent Sage',
    sanskrit: 'अष्टावक्रोपाख्यानम्',
    glyph: '📿',
    accent: '#0E7C7B',
    parva: 'Vana Parva',
    toldBy: 'Sage Lomaśa',
    toldTo: 'Yudhiṣṭhira (during the tīrtha-yātrā)',
    theme: 'Wisdom',
    characters: ['Ashtavakra', 'Kahoda', 'Uddalaka', 'Janaka', 'Bandi'],
    summary: [
      'Even in the womb, **Aṣṭāvakra** corrects his father **Kahoda**\'s recitation of the Vedas. Furious, the father curses him: *you will be born bent in eight places*. He is — head, neck, chest, two arms, two thighs, two feet — and grows up so.',
      'His father, meanwhile, is defeated in debate at king **Janaka**\'s court by the philosopher **Bandi**, and is drowned as the price of losing. Twelve years later, the twelve-year-old Aṣṭāvakra walks into Janaka\'s court demanding the same debate. The whole assembly laughs at his bent body.',
      'Aṣṭāvakra laughs back: *I came expecting scholars; I find leather-judges who weigh the skin and not the soul.* He out-argues Bandi point by point, reveals him to be a son of Varuṇa testing the world, and recovers his drowned father from the depths. Janaka takes him as his own teacher — the *Aṣṭāvakra-Gītā* will one day be Janaka\'s record of those teachings.',
    ],
    moral:
      'The soul wears whatever body karma gives it; only the foolish mistake the wrapping for the gift.',
  },
  {
    id: 'rama-katha',
    title: 'Rāmopākhyāna — The Rāmāyaṇa Retold',
    sanskrit: 'रामोपाख्यानम्',
    glyph: '🏹',
    accent: '#D4AF37',
    parva: 'Vana Parva',
    toldBy: 'Sage Mārkaṇḍeya',
    toldTo: 'Yudhiṣṭhira (asking if anyone has ever suffered more than him)',
    theme: 'Dharma',
    characters: ['Rama', 'Sita', 'Lakshmana', 'Hanuman', 'Ravana', 'Dasharatha'],
    summary: [
      '**Rāma**, eldest son of king **Daśaratha** of Ayodhyā, is exiled to the forest for fourteen years on the night of his coronation, so that his stepmother\'s son Bharata may rule instead. He goes without a word of complaint, **Sītā** and **Lakṣmaṇa** with him.',
      'In the forest the rākṣasa king **Rāvaṇa** abducts Sītā by deceit and carries her to Laṅkā across the southern sea. Rāma allies with the vānara king Sugrīva; **Hanumān** crosses the sea, finds Sītā, and burns Laṅkā. A bridge is built; the army crosses; Rāvaṇa falls in the great battle. Rāma is crowned at last on his return to Ayodhyā.',
      'Mārkaṇḍeya closes the telling and turns to Yudhiṣṭhira: *Rāma lost his throne for fourteen years, his wife to a demon, and walked the forest in deerskins beside a brother who never slept. You have lost a game of dice and have four brothers, a wife, and Kṛṣṇa beside you. Your exile is light.* Yudhiṣṭhira bows.',
    ],
    moral:
      'The Mahābhārata reaches back and uses the Rāmāyaṇa itself as its great consolation. Suffering is older than this age.',
  },
  {
    id: 'matsya-avatara',
    title: 'Mātsya — The First Avatāra and the Flood',
    sanskrit: 'मत्स्योपाख्यानम्',
    glyph: '🐟',
    accent: '#3b82f6',
    parva: 'Vana Parva',
    toldBy: 'Sage Mārkaṇḍeya',
    toldTo: 'Yudhiṣṭhira',
    theme: 'Cosmic',
    characters: ['Manu', 'Matsya (Vishnu)', 'Seven sages'],
    summary: [
      '**Manu**, the first man, is performing ablutions by a river when a tiny fish swims into his cupped hands. *Save me, great one — the larger fish will eat me.* He puts it in a pot. It grows. He moves it to a tank. It grows. A pond, a lake, a river — and at last to the ocean itself.',
      'The fish reveals itself as **Viṣṇu** in his first descent. *A great flood is coming; build a ship, gather seeds of every plant, take the seven sages and your wife, and tie the ship to my horn.* Manu does. The rains come; the world is dissolved; the ship sails on the formless waters.',
      'Mātsya tows the ship to the highest peak of the Himālaya — the place still called *Nau-bandhana*, the Mooring of the Boat. When the waters fall, Manu steps off and begins the next age of the world. Every human, says the sage, is *Manu-ja* — born of Manu — and the seed is older than the flood.',
    ],
    moral:
      'Ages end; the world is unmade. But seed, sage, and dharma are tied to the horn of the divine and carried through.',
  },
  {
    id: 'mudgala',
    title: 'Mudgala — Who Refused Heaven',
    sanskrit: 'मुद्गलोपाख्यानम्',
    glyph: '🕊️',
    accent: '#E879F9',
    parva: 'Vana Parva',
    toldBy: 'Sage Vyāsa',
    toldTo: 'Yudhiṣṭhira',
    theme: 'Dharma',
    characters: ['Mudgala', 'Durvasa', 'Devadutta (messenger of the gods)'],
    summary: [
      'The sage **Mudgala** lives by *uñchavṛtti* — gathering single fallen grains of corn from the field. On it he feeds his family, and any guest who comes. The fierce sage **Durvāsa** comes to test him, eats everything six times, smears himself in food and leaves — Mudgala bows and serves more each time.',
      'A celestial chariot descends. *Climb in, sage. Your austerity has earned the highest heaven, with all its bodies and all its pleasures, for unmeasurable time.* Mudgala asks: *and after that?* The messenger answers: *and after that, the merit is spent, and you fall.*',
      'Mudgala bows to the chariot and waves it on. *I will not climb into a vehicle that brings me back down. Tell me of the place that has no falling.* The messenger speaks of mokṣa — the unconditioned, beyond pleasure and merit alike. Mudgala turns from the chariot and walks into that.',
    ],
    moral:
      'Even heaven is a transaction. The only freedom worth wanting is the one that does not end.',
  },
];
