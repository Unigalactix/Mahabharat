import { House } from '../types';

// 23 noble houses of the Mahabharata — from the great empires of Kuru and
// Panchala to the smaller but pivotal kingdoms whose chariots, alliances,
// and grudges shaped Kurukshetra. Sides are recorded as they stood on the
// 18th day of the war.

export const HOUSES: House[] = [
  {
    id: 'kuru',
    name: 'House of Kuru',
    sanskrit: 'कुरु वंश',
    capital: 'Hastinapura',
    region: 'Doab between Ganga & Yamuna',
    side: 'Kaurava',
    patriarch: 'Dhritarashtra (regent: Bhishma)',
    notableMembers: [
      'Bhishma', 'Vidura', 'Dhritarashtra', 'Pandu',
      'Duryodhana', 'Dushasana', 'and the hundred Kauravas',
      'Yudhishthira and the five Pandavas (also Kauru-born)',
    ],
    banner: '🐘',
    accent: '#D4AF37',
    description:
      'The imperial dynasty of Bharata, descended from Puru, Hastin, and finally King Kuru who gave the line its name and the field its name. The throne at Hastinapura is the throne the entire epic fights for.',
    legacy:
      'After the war the surviving Pandavas rule from Hastinapura; Parikshit and then Janamejaya carry the line. The dynasty\'s near self-annihilation becomes the standing warning of the Mahabharata.',
  },
  {
    id: 'panchala',
    name: 'House of Panchala',
    sanskrit: 'पाञ्चाल राज्य',
    capital: 'Kampilya',
    region: 'Upper Ganga plain (north of Doab)',
    side: 'Pandava',
    patriarch: 'Drupada (son of Prishata)',
    notableMembers: [
      'Drupada', 'Draupadi (Krishnaa)', 'Dhrishtadyumna', 'Shikhandi',
      'Satyajit', 'the five Upapandavas (sons of Draupadi)',
    ],
    banner: '🔥',
    accent: '#E879F9',
    description:
      'The wealthy northern kingdom whose king Drupada was humiliated by his classmate Drona and then performed the yajna whose flames gave him Dhrishtadyumna (born to kill Drona) and Draupadi (born to undo the Kurus).',
    legacy:
      'Provides the Pandavas\' army, their queen, and their commander-in-chief. Pays the price in full on Ashwatthama\'s night raid — Dhrishtadyumna, Shikhandi, and all five Upapandavas die in their sleep.',
  },
  {
    id: 'matsya',
    name: 'Kingdom of Matsya',
    sanskrit: 'मत्स्य राज्य',
    capital: 'Upaplavya (Virata Nagari)',
    region: 'Western plains (modern Rajasthan border)',
    side: 'Allied-Pandava',
    patriarch: 'King Virata',
    notableMembers: [
      'Virata', 'Sudeshna', 'Uttara (prince)', 'Uttaraa (princess, mother of Parikshit)',
      'Kichaka', 'Shveta',
    ],
    banner: '🐟',
    accent: '#7BE0D2',
    description:
      'The cattle-rich kingdom that shelters the Pandavas through their year of agnatavasa. The fish on its banner is also the sign on Yudhishthira\'s seal — a reminder of the Matsya-Avatara whose flood the dynasty claims as origin.',
    legacy:
      'Virata\'s daughter Uttaraa marries Abhimanyu and becomes mother to Parikshit — the womb in which the Kuru line survives Ashwatthama\'s last weapon.',
  },
  {
    id: 'yadava',
    name: 'Yadavas of Dwarka (Vrishni-Andhaka)',
    sanskrit: 'यादव वंश (वृष्णि-अन्धक)',
    capital: 'Dwaraka',
    region: 'Saurashtra coast (Gujarat)',
    side: 'Divine',
    patriarch: 'Vasudeva, with Ugrasena as titular king',
    notableMembers: [
      'Krishna', 'Balarama', 'Subhadra', 'Pradyumna', 'Aniruddha',
      'Satyaki', 'Kritavarma', 'Ugrasena', 'Akrura', 'Uddhava',
    ],
    banner: '🪈',
    accent: '#0E7C7B',
    description:
      'The clan into which Vishnu descends as Krishna. After Kamsa\'s death the Yadavas migrate from Mathura to the sea-girt fortress of Dwaraka, which Vishvakarma raises in a single night.',
    legacy:
      'Splits at Kurukshetra — Krishna with the Pandavas, Kritavarma with the Kauravas, Balarama neutral. Self-destructs at Prabhasa years later under a sage\'s curse; Dwaraka sinks into the sea; Krishna leaves his body at Bhalka.',
  },
  {
    id: 'magadha',
    name: 'Magadha (Brihadratha dynasty)',
    sanskrit: 'मगध (बार्हद्रथ वंश)',
    capital: 'Rajagriha (Girivraja)',
    region: 'Lower Ganga plain (south Bihar)',
    side: 'Allied-Kaurava',
    patriarch: 'Jarasandha; after his death, his son Sahadeva (Pandava ally)',
    notableMembers: ['Jarasandha', 'Sahadeva (of Magadha)', 'Jayatsena'],
    banner: '🗡️',
    accent: '#B91C1C',
    description:
      'The empire of the unkillable Jarasandha — born in two halves and joined by the rakshasi Jara. Held eighty-six kings captive for a mahabhairava yajna until Bhima tore him in two at Krishna\'s instruction during the Rajasuya.',
    legacy:
      'After Jarasandha\'s death his son Sahadeva sides with the Pandavas at Kurukshetra. Magadha\'s later Mauryan glory is a distant echo of Brihadratha\'s line.',
  },
  {
    id: 'sindhu',
    name: 'Kingdom of Sindhu-Sauvira',
    sanskrit: 'सिन्धु-सौवीर राज्य',
    capital: 'Sindhu (lower Indus)',
    region: 'Indus delta',
    side: 'Kaurava',
    patriarch: 'Vriddhakshatra',
    notableMembers: ['Jayadratha (Saindhava)', 'Vriddhakshatra', 'Suratha'],
    banner: '🐗',
    accent: '#8B5CF6',
    description:
      'A western kingdom bound to the Kurus by Jayadratha\'s marriage to Dushala, the only Kaurava sister. Already disgraced by his attempted abduction of Draupadi in the forest, Jayadratha earns his death on Day 14 by blocking the four Pandavas while Abhimanyu was cut down.',
    legacy:
      'When Arjuna\'s arrow takes Jayadratha\'s head, it carries it into the lap of his meditating father Vriddhakshatra — whose vow shatters his own skull when the head falls to the ground.',
  },
  {
    id: 'gandhara',
    name: 'Kingdom of Gandhara',
    sanskrit: 'गान्धार राज्य',
    capital: 'Takshashila',
    region: 'Northwest of Sindhu (modern Afghanistan/Pakistan border)',
    side: 'Kaurava',
    patriarch: 'Subala',
    notableMembers: ['Gandhari', 'Shakuni', 'Achala', 'Vrishaka'],
    banner: '🎲',
    accent: '#6B7280',
    description:
      'A far western mountain kingdom whose princess Gandhari was given to the blind Dhritarashtra — a slight her brother Shakuni never forgave. Shakuni\'s loaded dice are the entire kingdom\'s revenge.',
    legacy:
      'Shakuni dies on Day 18, killed by Sahadeva. Gandhari\'s curse on Krishna seals the Yadava end. Gandhara becomes a centre of learning long after the war.',
  },
  {
    id: 'kashi',
    name: 'Kingdom of Kashi',
    sanskrit: 'काशी राज्य',
    capital: 'Varanasi',
    region: 'Middle Ganga (Banaras)',
    side: 'Pandava',
    patriarch: 'Vishwa (father of Amba, Ambika, Ambalika)',
    notableMembers: ['Amba / Shikhandi', 'Ambika', 'Ambalika', 'Abhibhu of Kashi'],
    banner: '🔱',
    accent: '#F5D061',
    description:
      'The sacred city of Shiva. Its three princesses were carried off by Bhishma to be wed to Vichitravirya — Ambika and Ambalika became the mothers of Dhritarashtra and Pandu; Amba returned as Shikhandi to kill Bhishma.',
    legacy:
      'Through Ambika and Ambalika, every Kaurava and Pandava in the war carries Kashi blood. Through Amba, the war\'s greatest warrior falls.',
  },
  {
    id: 'kekaya',
    name: 'Kingdom of Kekaya',
    sanskrit: 'केकय राज्य',
    capital: 'Girivraja-Kekaya (Punjab)',
    region: 'Between Beas and Sutlej',
    side: 'Pandava',
    patriarch: 'Brihatkshatra',
    notableMembers: ['The five Kekaya brothers (Brihatkshatra, Vrihatbala et al.)'],
    banner: '🛡️',
    accent: '#10B981',
    description:
      'A Punjab kingdom that sends its five princely brothers — themselves a mirror of the Pandavas — to fight on Yudhishthira\'s side. Distinct from the Ramayana\'s Kekaya, this is a later Mahabharata line of the same name.',
    legacy:
      'The five Kekaya princes are among the longest-fighting Pandava allies. Drona kills them on Day 12.',
  },
  {
    id: 'madra',
    name: 'Kingdom of Madra',
    sanskrit: 'मद्र राज्य',
    capital: 'Sagala (Sialkot)',
    region: 'Western Punjab',
    side: 'Kaurava',
    patriarch: 'Shalya',
    notableMembers: ['Shalya', 'Madri (mother of Nakula & Sahadeva)', 'Rukmaratha'],
    banner: '🐎',
    accent: '#B91C1C',
    description:
      'The horse-rich western kingdom that gave Pandu his second queen Madri — and so gave the Pandavas their twin youngest brothers. Tricked by Duryodhana\'s hospitality on the road, King Shalya is bound by gift-honour to fight for the Kauravas even though his own nephews stand opposite.',
    legacy:
      'On Day 18 Shalya becomes Karna\'s charioteer — and demoralises him with constant praise of Arjuna. After Karna\'s death Shalya himself takes command and is killed by Yudhishthira.',
  },
  {
    id: 'chedi',
    name: 'Kingdom of Chedi',
    sanskrit: 'चेदि राज्य',
    capital: 'Suktimati',
    region: 'Central India (Bundelkhand)',
    side: 'Pandava',
    patriarch: 'Shishupala; after, his son Dhrishtaketu',
    notableMembers: ['Shishupala', 'Dhrishtaketu', 'Karenumati'],
    banner: '🦅',
    accent: '#FF8C42',
    description:
      'A Yadava-related kingdom whose king Shishupala — cousin of Krishna and once promised a hundred forgiven insults — fills the quota at the Rajasuya and is beheaded by the Sudarshana on the spot.',
    legacy:
      'His son Dhrishtaketu reverses the family stance and fights for the Pandavas, dying on Day 14 at Drona\'s hands.',
  },
  {
    id: 'anga',
    name: 'Kingdom of Anga',
    sanskrit: 'अङ्ग राज्य',
    capital: 'Champa',
    region: 'Eastern Bihar / Bengal border',
    side: 'Kaurava',
    patriarch: 'Karna (gifted the throne by Duryodhana)',
    notableMembers: ['Karna', 'Vrishasena', 'Sushena', 'Vrishaketu'],
    banner: '☀️',
    accent: '#FF8C42',
    description:
      'A small eastern kingdom that becomes the lifelong gratitude-bond between Karna and Duryodhana — gifted in the very hour Karna was being humiliated for his sutaputra birth in the Hastinapura arena.',
    legacy:
      'Karna and four of his sons die at Kurukshetra. The fifth, Vrishaketu, is spared and adopted by Yudhishthira — Anga survives in his line.',
  },
  {
    id: 'vidarbha',
    name: 'Kingdom of Vidarbha',
    sanskrit: 'विदर्भ राज्य',
    capital: 'Kundinapura',
    region: 'Central Deccan (Vidarbha)',
    side: 'Pandava',
    patriarch: 'Bhishmaka',
    notableMembers: ['Rukmini', 'Rukmi', 'Pradyumna (Rukmini\'s son)'],
    banner: '🌹',
    accent: '#E879F9',
    description:
      'The Deccan kingdom of Bhishmaka whose daughter Rukmini wrote to Krishna and was carried off by him from her own wedding to Shishupala. Her brother Rukmi, defeated and humiliated, swore never to return to Kundinapura.',
    legacy:
      'Rukmini becomes Krishna\'s chief queen and mother of Pradyumna. Vidarbha\'s line links the Yadavas and the southern kingdoms.',
  },
  {
    id: 'pragjyotisha',
    name: 'Kingdom of Pragjyotisha',
    sanskrit: 'प्राग्ज्योतिष राज्य',
    capital: 'Pragjyotishapura (Assam)',
    region: 'Far Northeast (Kamarupa)',
    side: 'Kaurava',
    patriarch: 'Bhagadatta; earlier Narakasura',
    notableMembers: ['Bhagadatta', 'Vajradatta'],
    banner: '🐘',
    accent: '#8B5CF6',
    description:
      'The eastern frontier kingdom whose old king Bhagadatta fights from the back of the massive elephant Supratika. Once a friend of Pandu, age binds him by promise to Duryodhana.',
    legacy:
      'Arjuna kills Bhagadatta on Day 12 by piercing the Vaishnava-astra cloth covering his eyes. Vajradatta is later defeated in the Ashvamedhika digvijaya.',
  },
  {
    id: 'pandya',
    name: 'Pandya Kingdom',
    sanskrit: 'पाण्ड्य राज्य',
    capital: 'Madurai',
    region: 'Deep South (Tamil country)',
    side: 'Pandava',
    patriarch: 'Sarangadhwaja (the Pandyan king)',
    notableMembers: ['Malayadhwaja / Sarangadhwaja Pandya'],
    banner: '🐟',
    accent: '#7BE0D2',
    description:
      'A southern Tamil kingdom whose king fights with extraordinary skill on the Pandava side, killing many warriors before being slain by Ashwatthama. Among the few southern kings explicitly named at Kurukshetra.',
    legacy:
      'Establishes the Mahabharata\'s southern reach — the Pandyas remain a celebrated Tamil dynasty for two millennia after.',
  },
  {
    id: 'kalinga',
    name: 'Kingdom of Kalinga',
    sanskrit: 'कलिङ्ग राज्य',
    capital: 'Rajapuri',
    region: 'East coast (Odisha)',
    side: 'Kaurava',
    patriarch: 'Shrutayudha (and brother Shrutayu)',
    notableMembers: ['Shrutayudha', 'Bhanumati (queen of Duryodhana)', 'Ketumat'],
    banner: '⚓',
    accent: '#0E7C7B',
    description:
      'The east-coast naval kingdom that sends a massive force to the Kaurava side — Duryodhana\'s queen Bhanumati is herself a Kalinga princess.',
    legacy:
      'Shrutayudha possesses a mace gifted by Varuna that turns on its wielder if struck against a non-warrior — Bhima kills him with it. The Kalinga contingent is famously decimated on Day 2.',
  },
  {
    id: 'trigarta',
    name: 'Trigarta (Samshaptakas)',
    sanskrit: 'त्रिगर्त (संशप्तक)',
    capital: 'Prasthala',
    region: 'Western Himalayan foothills (Punjab)',
    side: 'Kaurava',
    patriarch: 'Susharma',
    notableMembers: ['Susharma', 'and his four warrior-brothers'],
    banner: '⚔️',
    accent: '#B91C1C',
    description:
      'A clan of five royal brothers humiliated by Arjuna in earlier campaigns who take the samshaptaka vow — to kill Arjuna or die trying. They tie Arjuna up in side-battles on Days 13 and 14, while Abhimanyu dies in the Chakravyuha.',
    legacy:
      'Arjuna eventually kills Susharma and his brothers. Their vow is the single most damaging Kaurava strategy of the war.',
  },
  {
    id: 'nishadha',
    name: 'Nishadha Kingdom (Ekalavya\'s people)',
    sanskrit: 'निषाद राज्य',
    capital: 'Forest tribe — no fixed capital',
    region: 'Vindhya forests',
    side: 'Allied-Kaurava',
    patriarch: 'Hiranyadhanu',
    notableMembers: ['Ekalavya', 'Hiranyadhanu'],
    banner: '🏹',
    accent: '#6B7280',
    description:
      'The forest-tribe whose prince Ekalavya — refused by Drona — taught himself archery before a clay image of the guru and surpassed Arjuna. Drona demanded his right thumb as guru-dakshina and crippled the world\'s greatest archer to protect his own promise.',
    legacy:
      'Ekalavya is later killed by Krishna in a frontier battle before Kurukshetra. The Nishadhas remain one of the epic\'s standing rebukes to the warrior order.',
  },
  {
    id: 'kunti-bhoja',
    name: 'Kunti-Bhoja',
    sanskrit: 'कुन्तिभोज',
    capital: 'Kunti-Bhoja Nagari (Madhyadesha)',
    region: 'Yadava country, central India',
    side: 'Pandava',
    patriarch: 'Kunti-Bhoja (foster-father of Kunti)',
    notableMembers: ['Kunti-Bhoja', 'Pritha / Kunti'],
    banner: '🌼',
    accent: '#F5D061',
    description:
      'The Yadava kingdom whose childless king adopted Pritha — daughter of Shurasena — and raised her as Kunti. It is here that the sage Durvasa gave her the mantra by which she summoned Surya and bore Karna.',
    legacy:
      'Kunti-Bhoja\'s gift of Kunti gives the epic the Pandavas themselves. The kingdom\'s small army stands with them at Kurukshetra.',
  },
  {
    id: 'avanti',
    name: 'Kingdom of Avanti',
    sanskrit: 'अवन्ती राज्य',
    capital: 'Ujjayini',
    region: 'Central India (Malwa)',
    side: 'Kaurava',
    patriarch: 'Vinda and Anuvinda (the two brother-kings)',
    notableMembers: ['Vinda', 'Anuvinda', 'Mitravinda (queen of Krishna)'],
    banner: '🌄',
    accent: '#FF8C42',
    description:
      'The wealthy western kingdom of Ujjayini, ruled jointly by the brother-kings Vinda and Anuvinda. Their sister Mitravinda is one of Krishna\'s eight chief queens, yet the brothers fight for the Kauravas.',
    legacy:
      'Both brothers fall on Day 14 to Arjuna and Bhima. Avanti remains a major city for centuries — Ujjain becomes one of the Saptapuri.',
  },
  {
    id: 'manipura',
    name: 'Kingdom of Manipura',
    sanskrit: 'मणिपुर राज्य',
    capital: 'Manipura',
    region: 'Far Northeast',
    side: 'Neutral',
    patriarch: 'Chitravahana',
    notableMembers: ['Chitrangada (princess, wife of Arjuna)', 'Babhruvahana (son of Arjuna)'],
    banner: '💎',
    accent: '#E879F9',
    description:
      'The matrilineal northeastern kingdom whose warrior-princess Chitrangada married Arjuna during his twelve-year tirtha-yatra. Their son Babhruvahana grew up in Manipura without ever meeting his father.',
    legacy:
      'During the post-war ashvamedha digvijaya, Babhruvahana unknowingly kills Arjuna in single combat and revives him with a Naga mani — a closing reckoning for Arjuna\'s killing of Bhishma.',
  },
  {
    id: 'salwa',
    name: 'Kingdom of Salwa',
    sanskrit: 'शाल्व राज्य',
    capital: 'Saubhanagara (flying city)',
    region: 'Northwest, between Madra and Trigarta',
    side: 'Kaurava',
    patriarch: 'Shalva',
    notableMembers: ['Shalva (king of the flying fortress Saubha)'],
    banner: '☁️',
    accent: '#8B5CF6',
    description:
      'The kingdom of King Shalva, who owned the asura-built flying city Saubha. Rejected by Amba in his earlier life and humiliated by Krishna after Shishupala\'s death, he attacked Dwaraka and was finally killed by Krishna who shattered Saubha mid-air.',
    legacy:
      'A separate Salwa contingent fights at Kurukshetra. The flying city of Saubha is among the epic\'s most striking pre-war set-pieces.',
  },
  {
    id: 'naga',
    name: 'Naga Realms (Patala lineage)',
    sanskrit: 'नाग वंश (पाताल)',
    capital: 'Bhogavati',
    region: 'Patala (subterranean) — and forest principalities',
    side: 'Neutral',
    patriarch: 'Vasuki (king); Takshaka, Karkotaka, Airavata as great Nagas',
    notableMembers: [
      'Vasuki', 'Takshaka', 'Karkotaka', 'Ulupi (wife of Arjuna)',
      'Iravan (son of Arjuna & Ulupi)', 'Aswasena',
    ],
    banner: '🐍',
    accent: '#10B981',
    description:
      'The serpent dynasties whose forest was burned in Khandava and whose vendetta against the Kurus runs the entire frame-story of the epic — from Takshaka\'s killing of Parikshit to Janamejaya\'s great snake-sacrifice that opens the narration.',
    legacy:
      'Iravan, half-Naga son of Arjuna, is sacrificed on Day 8 of the war to win victory. Takshaka kills Parikshit. Janamejaya\'s sarpa-yajna stops only when the sage Astika intervenes — and into that ceremony Vyasa\'s disciple recites the Mahabharata itself.',
  },
];
