export interface GlossaryTerm {
  term: string;        // transliteration with diacritics
  sanskrit: string;    // devanagari
  category: 'Dharma' | 'Yoga' | 'Cosmic' | 'Society' | 'Ritual' | 'Weapon' | 'Place' | 'Time';
  meaning: string;     // one-line gloss
  context: string;     // a sentence showing how it appears in the Mahābhārata
}

// Forty essential terms — enough to read the codex without a side-text, small
// enough to fit in one drawer. Categories let the reader filter by lens.
export const GLOSSARY: GlossaryTerm[] = [
  // ---- Dharma cluster ----
  {
    term: 'Dharma',
    sanskrit: 'धर्म',
    category: 'Dharma',
    meaning: 'The cosmic + personal order; what holds a being to its own truth.',
    context: 'Yudhiṣṭhira is called Dharmarāja — the son of Dharma and the king of dharma — but Bhīṣma teaches him that dharma in calamity is not the dharma of plenty.',
  },
  {
    term: 'Adharma',
    sanskrit: 'अधर्म',
    category: 'Dharma',
    meaning: 'The unravelling of order; not merely sin but the *opposite weight*.',
    context: 'Duryodhana\'s refusal of five villages is adharma not because it is greedy, but because it puts the small wrong above the great pattern.',
  },
  {
    term: 'Karma',
    sanskrit: 'कर्म',
    category: 'Dharma',
    meaning: 'Action; the ledger of action; the law that every action returns.',
    context: 'Kṛṣṇa\'s answer to Arjuna is not *do nothing* but *act without grasping the fruit*.',
  },
  {
    term: 'Āpad-dharma',
    sanskrit: 'आपद्धर्म',
    category: 'Dharma',
    meaning: 'The dharma of calamity — what is permitted when the world is breaking.',
    context: 'The sage Viśvāmitra ate a dog\'s thigh in famine and was not stained, because āpad-dharma is its own discipline.',
  },
  {
    term: 'Svadharma',
    sanskrit: 'स्वधर्म',
    category: 'Dharma',
    meaning: 'One\'s own dharma — the duty rooted in who you are.',
    context: 'On the chariot, Kṛṣṇa tells Arjuna: *better one\'s own dharma poorly done than another\'s well done.*',
  },
  {
    term: 'Yajña',
    sanskrit: 'यज्ञ',
    category: 'Ritual',
    meaning: 'Sacrifice; the offering of action into a fire seen or unseen.',
    context: 'Janamejaya\'s sarpa-yajña burns serpents until Āstīka asks for the right boon at the right syllable.',
  },

  // ---- Yoga cluster ----
  {
    term: 'Yoga',
    sanskrit: 'योग',
    category: 'Yoga',
    meaning: 'Yoking; skill in action; the discipline that joins the doer to the deed.',
    context: '*Yogasthaḥ kuru karmāṇi* — established in yoga, perform actions — is the line that turns the war into a teaching.',
  },
  {
    term: 'Bhakti',
    sanskrit: 'भक्ति',
    category: 'Yoga',
    meaning: 'Loving surrender; the highest yoga in the Gītā\'s closing chapters.',
    context: 'Draupadī\'s open hands when Duḥśāsana pulls her sari is bhakti before the word is spoken.',
  },
  {
    term: 'Jñāna',
    sanskrit: 'ज्ञान',
    category: 'Yoga',
    meaning: 'Knowledge that liberates; not information but seeing-through.',
    context: 'The fourth chapter of the Gītā ends *jñānāgni* — the fire of knowledge burns all karma to ash.',
  },
  {
    term: 'Sthitaprajña',
    sanskrit: 'स्थितप्रज्ञ',
    category: 'Yoga',
    meaning: 'One whose wisdom is steady; unmoved by pleasure or pain.',
    context: 'Gītā 2.55–72 paints the sthitaprajña — Arjuna asks how such a one walks, sits, speaks.',
  },
  {
    term: 'Mokṣa',
    sanskrit: 'मोक्ष',
    category: 'Yoga',
    meaning: 'Release; the fourth and final goal of human life.',
    context: 'Yudhiṣṭhira\'s bath in the celestial Ganges at the end of Svargārohaṇa is the epic\'s image of mokṣa.',
  },
  {
    term: 'Ahiṁsā',
    sanskrit: 'अहिंसा',
    category: 'Dharma',
    meaning: 'Non-harm; the supreme dharma.',
    context: 'The hunter Dharmavyādha tells the proud sage that even the cattle-keeping butcher who serves his parents is closer to mokṣa than the celibate who curses a crow.',
  },

  // ---- Cosmic cluster ----
  {
    term: 'Brahman',
    sanskrit: 'ब्रह्मन्',
    category: 'Cosmic',
    meaning: 'The absolute; the ground of being.',
    context: 'The Viśvarūpa is Brahman shown in time — every being already inside Kṛṣṇa\'s mouth.',
  },
  {
    term: 'Ātman',
    sanskrit: 'आत्मन्',
    category: 'Cosmic',
    meaning: 'The self; the imperishable in every being.',
    context: 'Weapons do not cleave it, fire does not burn it, water does not wet it — Gītā 2.23.',
  },
  {
    term: 'Avatāra',
    sanskrit: 'अवतार',
    category: 'Cosmic',
    meaning: 'A *descent* — the Lord taking form when dharma falters.',
    context: 'Kṛṣṇa is the eighth avatāra of Viṣṇu; *yadā yadā hi dharmasya glāniḥ* — Gītā 4.7.',
  },
  {
    term: 'Māyā',
    sanskrit: 'माया',
    category: 'Cosmic',
    meaning: 'The veiling-power; appearance taken for reality.',
    context: 'Svarga\'s first sight of Duryodhana on a throne is māyā; the road of hell is also māyā.',
  },
  {
    term: 'Loka',
    sanskrit: 'लोक',
    category: 'Cosmic',
    meaning: 'A world, a plane of being; the seven upper and seven lower lokas.',
    context: 'Arjuna ascends to Indra-loka for divine weapons during the forest exile.',
  },
  {
    term: 'Yuga',
    sanskrit: 'युग',
    category: 'Time',
    meaning: 'A cosmic age — Kṛta, Tretā, Dvāpara, Kali.',
    context: 'The Mahābhārata war marks the close of Dvāpara-yuga and the dawn of Kali.',
  },
  {
    term: 'Kalpa',
    sanskrit: 'कल्प',
    category: 'Time',
    meaning: 'A day of Brahmā — a thousand yuga-cycles.',
    context: 'Bhīṣma speaks to Yudhiṣṭhira of dharmas that hold across kalpas, not just lifetimes.',
  },

  // ---- Society cluster ----
  {
    term: 'Varṇa',
    sanskrit: 'वर्ण',
    category: 'Society',
    meaning: 'The four-fold order of society — brāhmaṇa, kṣatriya, vaiśya, śūdra.',
    context: 'Karṇa\'s tragedy is that he is born kṣatriya, raised sūta, and judged by varṇa his whole life.',
  },
  {
    term: 'Kṣatriya',
    sanskrit: 'क्षत्रिय',
    category: 'Society',
    meaning: 'The warrior-ruler order; whose dharma is to protect and to die in war.',
    context: 'The kṣatriya who falls weapon in hand on the battlefield is washed of his sins by the falling.',
  },
  {
    term: 'Brāhmaṇa',
    sanskrit: 'ब्राह्मण',
    category: 'Society',
    meaning: 'The priest-teacher order; whose dharma is study, ritual, restraint.',
    context: 'Droṇa is a brāhmaṇa fighting as a kṣatriya — and dies precisely because of that hybrid.',
  },
  {
    term: 'Rāja-dharma',
    sanskrit: 'राजधर्म',
    category: 'Society',
    meaning: 'The king\'s dharma — the largest branch of Bhīṣma\'s bedside teaching.',
    context: 'The king has three sets of eyes: ministers, spies, and his own at night in disguise.',
  },
  {
    term: 'Dāna',
    sanskrit: 'दान',
    category: 'Society',
    meaning: 'Giving; the gift that builds the giver.',
    context: 'Karṇa is dāna-vīra — the hero of giving; he cuts his own divine armour off his body at midday.',
  },

  // ---- Ritual cluster ----
  {
    term: 'Mantra',
    sanskrit: 'मन्त्र',
    category: 'Ritual',
    meaning: 'A sacred utterance; literally *that which protects the one who reflects on it*.',
    context: 'Every divine weapon comes with a mantra to invoke it and another to withdraw it; Karṇa is cursed to forget both at his hour.',
  },
  {
    term: 'Tapas',
    sanskrit: 'तपस्',
    category: 'Ritual',
    meaning: 'Inner heat; austerity that bends the cosmos.',
    context: 'Arjuna\'s tapas on Indrakīla mountain wins him the Pāśupata from Śiva himself.',
  },
  {
    term: 'Phala-śruti',
    sanskrit: 'फलश्रुति',
    category: 'Ritual',
    meaning: 'The *fruit-hearing* — the closing verse that names the reward of reciting a text.',
    context: 'The Viṣṇu-Sahasranāma ends with one — *fear of him departs from death, sorrow, and sin.*',
  },
  {
    term: 'Aśvamedha',
    sanskrit: 'अश्वमेध',
    category: 'Ritual',
    meaning: 'The horse-sacrifice; an emperor\'s declaration of unrivalled sovereignty.',
    context: 'Yudhiṣṭhira performs the Aśvamedha after the war, the horse wandering wherever it wills.',
  },

  // ---- Weapon cluster ----
  {
    term: 'Astra',
    sanskrit: 'अस्त्र',
    category: 'Weapon',
    meaning: 'A weapon invoked by mantra; a missile of mind.',
    context: 'Aśvatthāmā releases the Brahmāstra at the womb of Uttarā at the end of the war.',
  },
  {
    term: 'Dhanus',
    sanskrit: 'धनुस्',
    category: 'Weapon',
    meaning: 'Bow; the kṣatriya\'s emblem.',
    context: 'Gāṇḍīva, given to Arjuna by Agni at Khāṇḍava, will not string for him the day Kṛṣṇa ascends.',
  },
  {
    term: 'Śaṅkha',
    sanskrit: 'शङ्ख',
    category: 'Weapon',
    meaning: 'Conch; war-horn that proclaims a hero\'s arrival.',
    context: 'Pāñcajanya, Devadatta, Pauṇḍra, Anantavijaya, Sughoṣa, Maṇipuṣpaka — the five conches that open Gītā 1.',
  },
  {
    term: 'Cakra',
    sanskrit: 'चक्र',
    category: 'Weapon',
    meaning: 'Disc, wheel; Kṛṣṇa\'s Sudarśana cakra is the cosmos\' will in flight.',
    context: 'The Sudarśana eclipses the sun at Jayadratha\'s killing so Arjuna can keep his vow.',
  },
  {
    term: 'Gadā',
    sanskrit: 'गदा',
    category: 'Weapon',
    meaning: 'Mace; the heavy weapon of giants and pure-strength warriors.',
    context: 'Bhīma and Duryodhana fight the final duel on the lake-shore with maces, knees forbidden — broken anyway.',
  },

  // ---- Place / Time cluster ----
  {
    term: 'Kṣetra',
    sanskrit: 'क्षेत्र',
    category: 'Place',
    meaning: 'A field — literal soil or the *field* of the body in which the knower sits.',
    context: 'Gītā 13 opens *idaṁ śarīraṁ kaunteya kṣetram ity abhidhīyate* — this body is called the field.',
  },
  {
    term: 'Vanavāsa',
    sanskrit: 'वनवास',
    category: 'Place',
    meaning: 'Forest-dwelling; the twelve years of exile in the woods.',
    context: 'Vanavāsa is where the Pāṇḍavas earn divine weapons and hear the inset tales that fill the Vana-Parva.',
  },
  {
    term: 'Agnātavāsa',
    sanskrit: 'अज्ञातवास',
    category: 'Place',
    meaning: 'Unknown-dwelling; the thirteenth year, hidden.',
    context: 'In Virāṭa\'s court the brothers become a cook, a eunuch dance-master, a horse-keeper, a cattle-counter, a serving-maid.',
  },
  {
    term: 'Naraka',
    sanskrit: 'नरक',
    category: 'Place',
    meaning: 'Hell; a transient place of purgation, not a final destination.',
    context: 'Yudhiṣṭhira sees naraka for an instant so that the half-truth that killed Droṇa may be burned away.',
  },
  {
    term: 'Svarga',
    sanskrit: 'स्वर्ग',
    category: 'Place',
    meaning: 'Heaven; the reward-realm of Indra — pleasant but not final.',
    context: 'Yudhiṣṭhira ascends Svarga in his living body — the rarest grace in the epic.',
  },
  {
    term: 'Pratijñā',
    sanskrit: 'प्रतिज्ञा',
    category: 'Dharma',
    meaning: 'A vow; a sworn intention that becomes future.',
    context: 'Bhīma\'s pratijñā to drink Duḥśāsana\'s blood and break Duryodhana\'s thigh sets the entire war\'s closing scenes.',
  },
  {
    term: 'Śāpa',
    sanskrit: 'शाप',
    category: 'Dharma',
    meaning: 'A curse; the inverse of a boon, also irrevocable.',
    context: 'Gāndhārī\'s śāpa at the end of the war drowns Dvārakā thirty-six years later.',
  },
];

export const CATEGORIES: GlossaryTerm['category'][] = [
  'Dharma', 'Yoga', 'Cosmic', 'Society', 'Ritual', 'Weapon', 'Place', 'Time',
];

export const CATEGORY_ACCENT: Record<GlossaryTerm['category'], string> = {
  Dharma:  '#D4AF37',
  Yoga:    '#E879F9',
  Cosmic:  '#60A5FA',
  Society: '#FF8C42',
  Ritual:  '#10B981',
  Weapon:  '#B91C1C',
  Place:   '#34D399',
  Time:    '#FBBF24',
};
