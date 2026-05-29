import { Kshetra } from '../types';

// 12 sacred kshetras (sites) that shape the geography of the Mahabharata —
// from Krishna's Mathura and Vrindavan to the battlefield at Kurukshetra,
// from the lost city of Dwaraka to Naimisharanya where the entire epic is
// re-narrated to the rishis.

export const KSHETRAS: Kshetra[] = [
  {
    id: 'kurukshetra',
    name: 'Kurukshetra',
    location: 'Haryana — between the rivers Saraswati and Drishadvati',
    glyph: '⚔️',
    accent: '#B91C1C',
    story:
      'Named for King Kuru who ploughed the land for thirty years offering his own flesh in penance until Vishnu granted that any who died here would attain liberation. It is also called Dharmakshetra — the field of dharma — and Samanta-panchaka, ringed by the five pools Parashurama filled with kshatriya blood.',
    significance:
      'On this field the eighteen-day war is fought, the Bhagavad Gita is sung between the two armies, and the kshatriya order ends. The site is still walked today; the Brahma Sarovar and Jyotisar mark its centre.',
  },
  {
    id: 'hastinapura',
    name: 'Hastinapura',
    location: 'Banks of the Ganga (modern Meerut district, Uttar Pradesh)',
    glyph: '🐘',
    accent: '#D4AF37',
    story:
      'The imperial capital of the Kuru dynasty, founded by King Hastin. From this throne Bhishma ruled as regent, Dhritarashtra reigned as the blind king, and the dice-sabha humiliated Draupadi. After the war, Yudhishthira was crowned here.',
    significance:
      'The seat of dharma and the seat of its failure. Generations later the Ganga changes course and floods Hastinapura away — the dynasty moves the capital to Kaushambi under Nichakshu.',
  },
  {
    id: 'indraprastha',
    name: 'Indraprastha',
    location: 'On the Yamuna (modern Delhi region)',
    glyph: '🏛️',
    accent: '#7BE0D2',
    story:
      'Raised from the ashes of the Khandava forest, this is the Pandava capital built by the asura architect Maya. Its illusory hall — crystal floors that look like water and water that looks like crystal — is where Duryodhana stumbles, Draupadi laughs, and the war is conceived.',
    significance:
      'After the Rajasuya, the wealthiest city of its age. Lost in the dice game, regained after Kurukshetra, and finally abandoned when the Pandavas walk north on their mahaprasthana.',
  },
  {
    id: 'mathura',
    name: 'Mathura',
    location: 'On the Yamuna, west bank (Uttar Pradesh)',
    glyph: '🪈',
    accent: '#0E7C7B',
    story:
      'The birthplace of Krishna in the prison-cell of Kamsa. The capital of the Bhoja-Yadavas, ruled by the tyrant Kamsa until the adolescent Krishna dethroned him and restored grandfather Ugrasena to the seat.',
    significance:
      'One of the seven Mokshapuris. Janmabhumi of the Avatar. The site repeatedly besieged by Jarasandha until the Yadavas migrated west to Dwaraka.',
  },
  {
    id: 'vrindavan',
    name: 'Vrindavan',
    location: 'Forest of tulasi on the Yamuna, north of Mathura',
    glyph: '🌿',
    accent: '#10B981',
    story:
      'The cow-pastures and grove where Krishna was raised by Yashoda and Nanda after being smuggled out of Mathura. Here he played the flute, subdued Kaliya, lifted Govardhan, and danced the maha-rasa with the gopis on the full moon of Sharad.',
    significance:
      'The eternal landscape of bhakti — the world to which the soul longs to return. Every leaf of Vrindavan is said to remember a lila of the Lord.',
  },
  {
    id: 'dwaraka',
    name: 'Dwaraka',
    location: 'Saurashtra coast (Gujarat), at the western mouth of the Gomati',
    glyph: '🌊',
    accent: '#3B82F6',
    story:
      'The sea-fortress raised in a single night by Vishvakarma at Krishna\'s command, to which the Yadavas migrated after Mathura became untenable. Twelve yojanas long, with gateways of gold and walls of crystal.',
    significance:
      'Krishna\'s capital and the western seat of the avatar. After the Yadava self-destruction at Prabhasa, Arjuna leads the women and children inland; behind them the ocean reclaims Dwaraka, and the Dvapara Yuga ends.',
  },
  {
    id: 'prabhasa',
    name: 'Prabhasa-tirtha',
    location: 'Saurashtra coast, near modern Veraval (Somnath)',
    glyph: '🌅',
    accent: '#FF8C42',
    story:
      'The pilgrimage shore where, under a sage\'s curse and a quarrel started by an iron mace, the Yadavas killed one another to the last. Krishna sat under a pipal tree and was struck in the foot by the hunter Jara\'s arrow — and left his body.',
    significance:
      'The closing site of the Avatar\'s earthly lila. Today\'s Bhalka Tirtha marks the spot of the departure. From here Arjuna gathers the survivors and turns east.',
  },
  {
    id: 'naimisharanya',
    name: 'Naimisharanya',
    location: 'Forest in the Gomati valley (Sitapur district, Uttar Pradesh)',
    glyph: '📖',
    accent: '#F5D061',
    story:
      'The forest where the sage Shaunaka held a twelve-year satra, and where the suta Ugrashravas — having heard Vaishampayana recite the Mahabharata at Janamejaya\'s snake-sacrifice — re-narrated the entire epic to the assembled rishis.',
    significance:
      'The frame from which we hear the story. Every recitation of the Mahabharata is, structurally, a return to Naimisharanya.',
  },
  {
    id: 'gandhamadana',
    name: 'Gandhamadana Parvata',
    location: 'Northern Himalayan range, beyond Badari',
    glyph: '🏔️',
    accent: '#7BE0D2',
    story:
      'The fragrant mountain where the Pandavas dwelt with the sage Arshtishena during their forest exile, and from which Bhima set out to fetch the celestial Saugandhika flower for Draupadi — meeting Hanuman on the way.',
    significance:
      'The northern frontier of the epic\'s geography. Many of the Vana Parva\'s deepest teachings are received here.',
  },
  {
    id: 'khandavaprastha',
    name: 'Khandava Forest',
    location: 'On the Yamuna, west bank (later site of Indraprastha)',
    glyph: '🔥',
    accent: '#FF8C42',
    story:
      'The dense forest ringed by Krishna and Arjuna with arrows so that Agni could consume it and cure his indigestion. From its ashes rose Indraprastha; from its survivors rose Maya the architect, and the long Naga vendetta of the epic.',
    significance:
      'A founding act of beauty and violence — the moral cost of every kingdom. Takshaka\'s revenge ripens many generations later in Parikshit\'s death.',
  },
  {
    id: 'upaplavya',
    name: 'Upaplavya',
    location: 'Capital of Matsya, near Bairat (Rajasthan)',
    glyph: '🐟',
    accent: '#7BE0D2',
    story:
      'The Matsya capital where the Pandavas spent their year of agnatavasa in disguise, where Abhimanyu married Uttaraa, and from which Krishna later set out as messenger of peace to Hastinapura.',
    significance:
      'The staging ground of the Pandava cause. The army that marched from Upaplavya to Kurukshetra became seven akshauhinis strong.',
  },
  {
    id: 'badarikashrama',
    name: 'Badarikashrama',
    location: 'Upper Alaknanda, central Himalaya (Badrinath)',
    glyph: '🕉️',
    accent: '#D4AF37',
    story:
      'The hermitage of the twin rishis Nara and Narayana — incarnated in this very age as Arjuna and Krishna. Vyasa composed the Mahabharata here while Ganesha wrote it down.',
    significance:
      'The hidden source of both the war and the book. Pilgrims still climb to the seat of Nara-Narayana behind the Badri shrine; the epic is in some sense its commentary.',
  },
];
