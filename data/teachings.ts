import { Teaching, DivineName } from '../types';

/**
 * The teachings of the Shanti Parva (Book of Peace) and the
 * Anushasana Parva (Book of Instruction). With the war ended and
 * his army of relatives turned to ash, Yudhishthira refuses the
 * throne in despair. The dying Bhishma — still on his bed of arrows,
 * waiting for the northern solstice to release his breath — calls
 * him to his side and pours out a lifetime of statecraft and dharma
 * in four great branches.
 *
 * This is the longest single instructional passage in any epic
 * literature in history.
 */
export const TEACHINGS: Teaching[] = [
  // ───────── Rāja-dharma ─────────
  {
    id: 'rd-arthashastra',
    branch: 'Raja-dharma',
    title: 'The Three Forms of Punishment',
    sanskrit: 'दण्डत्रिविधम्',
    glyph: '👑',
    accent: '#D4AF37',
    source: 'Shanti Parva 56 — Bhishma to Yudhishthira',
    precept:
      'A king\'s **danda** (rod) has three forms: **mild** for the worthy, **harsh** for the wicked, **measured** for the doubtful — and never the wrong one for the wrong man.',
    exposition: [
      'Yudhishthira asks the dying grandfather: how does a king *punish*, when every man before him is some uncle or cousin? Bhishma\'s answer is precise: punishment is *not* moral judgement. It is a tool of order, like a surgeon\'s knife, and the king who confuses the two destroys both his court and himself.',
      'Three rules follow. *Never punish in anger* — wait until the anger has cooled to the temperature of duty. *Never spare a kinsman the rod his crime requires* — a king who shields his own breeds a kingdom of thieves. *Never punish the doubtful as if he were proven* — exile, not death, until the truth is known.',
    ],
    exemplar:
      'Yudhishthira embodied the first two; Duryodhana broke all three when he let Karna lead the dice-court.',
  },
  {
    id: 'rd-six-fold-policy',
    branch: 'Raja-dharma',
    title: 'The Sixfold Policy (Ṣāḍguṇya)',
    sanskrit: 'षाड्गुण्यम्',
    glyph: '⚖️',
    accent: '#F5D061',
    source: 'Shanti Parva 102',
    precept:
      'Between kingdoms a wise ruler has **six** moves and no more: **sandhi** (peace), **vigraha** (war), **yana** (march), **asana** (stand still), **dvaidhibhava** (split forces), **samshraya** (seek alliance).',
    exposition: [
      'Bhishma names this *ṣāḍguṇya* — and it will be the spine of Kauṭilya\'s **Arthaśāstra** seven centuries later. Every diplomatic situation, the grandfather insists, reduces to one of these six. Choose the wrong one and the kingdom dies of policy, not of arrows.',
      'The deepest lesson is the fourth — *āsana*, the *art of standing still*. A king who cannot do nothing when nothing is what the moment calls for will exhaust his armies and his treasury in motion that produces only motion.',
    ],
    exemplar:
      'Krishna\'s shuttle-diplomacy before the war ran through all six; Duryodhana could perform only vigraha.',
  },
  {
    id: 'rd-spy',
    branch: 'Raja-dharma',
    title: 'The Eyes of the Kingdom',
    sanskrit: 'चारदृष्टिः',
    glyph: '👁️',
    accent: '#0E7C7B',
    source: 'Shanti Parva 69',
    precept:
      'A king sees through **three** sets of eyes: his ministers\', his spies\', and his **own at night** — when he walks among his people in disguise.',
    exposition: [
      'No throne report reaches the king without being shaped, says Bhishma. A king who relies only on what his ministers tell him is a king who has been politely blindfolded by the very men who feed him.',
      'The third pair of eyes — *his own, at night, in plain cloth* — is the one no advisor can edit. Bhishma names it the *rāja-rakṣā* (the king\'s guard upon himself), and tells Yudhishthira that even the dharma-king Rama walked the streets of Ayodhya in disguise on the night that decided Sita\'s fate. *No advisor will tell you what your own city will tell a stranger in your clothes.*',
    ],
    exemplar:
      'Rama in Ayodhya; Vikramaditya in folktale. Yudhishthira is given the rule but never tested on it.',
  },
  // ───────── Āpad-dharma ─────────
  {
    id: 'ap-emergency',
    branch: 'Apad-dharma',
    title: 'Dharma in Extremity',
    sanskrit: 'आपद्धर्मः',
    glyph: '🔥',
    accent: '#B91C1C',
    source: 'Shanti Parva 130',
    precept:
      'When the road is closed by **calamity**, the dharma of the moment is **not** the dharma of the marketplace. Survival of the line is itself a sacred duty.',
    exposition: [
      'Yudhishthira, who lied to Drona to end the war, suspects he has already condemned his own soul. Bhishma corrects him gently. *There is the dharma of times of plenty, and the dharma of times of calamity. They are not the same dharma.* To preserve the family, even theft is permitted. To preserve the kingdom, even untruth. To preserve dharma itself — even battle.',
      'But there is a catch: *only the wise* may invoke āpad-dharma, because only the wise know when the calamity has passed and the ordinary rules return. The fool invokes emergency once and lives in it forever — and that is how dharma is destroyed faster than by any outside enemy.',
    ],
    exemplar:
      'Yudhishthira\'s "Ashvatthama is dead — the elephant" half-truth on Day 15. Vishwamitra eating dog-meat in famine.',
  },
  {
    id: 'ap-vishwamitra',
    branch: 'Apad-dharma',
    title: 'Viśvāmitra and the Dog-Thigh',
    sanskrit: 'विश्वामित्रश्वमांसम्',
    glyph: '🐕',
    accent: '#FF8C42',
    source: 'Shanti Parva 141',
    precept:
      'The sage Viśvāmitra, starving in a twelve-year famine, ate the **thigh of a dog** stolen from a Chandala\'s house — and his tapas was *not* diminished.',
    exposition: [
      'Bhishma tells the tale at length. Twelve years without rain. The whole north dying. Vishwamitra, weak past walking, sees a Chandala\'s house, sees raw dog\'s thigh hanging from a beam, and steals it. The Chandala wakes and protests — *you, brahmin, eating this?* Vishwamitra answers: *the body that asks is the same body that does tapas. If it dies, the tapas dies with it. I will eat now, repent later, and the gods may judge.*',
      'He eats. The rain comes. The Chandala lives. Vishwamitra returns to his tapas the next year and rises to brahmaṛṣi. The lesson is shocking and exact: *āpad-dharma is real. It is not an excuse. It is the dharma that keeps dharma alive.*',
    ],
    exemplar:
      'Viśvāmitra himself; later cited by Manu, Yājñavalkya, and every dharmaśāstra that admits emergency.',
  },
  // ───────── Mokṣa-dharma ─────────
  {
    id: 'md-janaka',
    branch: 'Moksha-dharma',
    title: 'Janaka and the Burning City',
    sanskrit: 'जनकवचनम्',
    glyph: '🪷',
    accent: '#E879F9',
    source: 'Shanti Parva 219',
    precept:
      'When word reached king Janaka that **Mithila was on fire**, he said: *if the whole of Mithila burn, **nothing of mine** burns.* That is mokṣa.',
    exposition: [
      'Bhishma sets out the long ladder of mokṣa-dharma — sāṅkhya, yoga, the path of knowledge, the path of devotion. Then he tells the Janaka story. The point is not detachment as coldness. The point is *correct identification*. Janaka is not Mithila. The body is not the self. The kingdom is not the king. When that knowledge is fixed, no fire can take what is yours, because what is yours was never out there in the first place.',
      'The teaching closes with the line that the Gita has already given Arjuna in another form: *the wise do not grieve for the living, nor for the dead* — because the wise have located the self in the place where neither living nor dying occur.',
    ],
    exemplar:
      'Janaka in Mithila; Krishna in Dvaraka after the Yadavas destroy themselves; Yudhishthira refusing heaven without his dog.',
  },
  {
    id: 'md-pingala',
    branch: 'Moksha-dharma',
    title: 'Piṅgalā the Courtesan',
    sanskrit: 'पिङ्गलावैराग्यम्',
    glyph: '🌙',
    accent: '#15803D',
    source: 'Shanti Parva 174',
    precept:
      'The courtesan **Piṅgalā** waited all night for a customer who never came — and at dawn realised that **expecting** anyone but the self was the cause of all her grief.',
    exposition: [
      'Bhishma tells this short and sharp. Pingala dresses, waits at her door, watches each footstep approach and pass. Dawn. She is exhausted, humiliated, broken. And in that breaking she sees: *hope itself is the wound. Hope of another man — hope of any other — is the rope that has tied me here. Cut it, and there is nothing left to hurt me.*',
      'She lies down, sleeps the deepest sleep of her life, and wakes a renunciant. The Bhāgavata will later make her one of the *twenty-four gurus of the Avadhūta*. Bhishma offers her to Yudhishthira as a teacher: *a king who hopes in his ministers, an army that hopes in its generals, a dharma that hopes in reward — all are Pingalas at the door*.',
    ],
    exemplar:
      'Piṅgalā herself; later quoted by Krishna to Uddhava in the Uddhava-Gita.',
  },
  // ───────── Dāna-dharma ─────────
  {
    id: 'dd-three-gifts',
    branch: 'Dana-dharma',
    title: 'The Three Kinds of Gift',
    sanskrit: 'त्रिविधदानम्',
    glyph: '🪔',
    accent: '#FF8C42',
    source: 'Anushasana Parva 59',
    precept:
      'Gifts are of three kinds: **sāttvika** (given at the right place, time, and person, expecting nothing), **rājasa** (given for return), **tāmasa** (given carelessly to the unworthy). Only the first releases.',
    exposition: [
      'Bhishma\'s threefold cut is the same one Krishna gives Arjuna in Gita 17. The bedside teaching expands it: it is the *intent* that releases the giver, not the object given. A handful of rice given in the first kind outweighs a kingdom given in the second.',
      'And then a warning: *do not give to the unworthy* — not from stinginess, but because feeding adharma is itself an act of adharma. The proper recipient of a gift is itself a dharma-decision, and a king who funds rogues will see his treasury produce a kingdom of rogues.',
    ],
    exemplar:
      'Karna\'s daanaveera-vow is sāttvika at its purest — and is exactly what costs him his armour and his life.',
  },
  {
    id: 'dd-karna',
    branch: 'Dana-dharma',
    title: 'Karṇa, Dānavīra',
    sanskrit: 'कर्णदानवीरः',
    glyph: '☀️',
    accent: '#FF8C42',
    source: 'Anushasana Parva 71',
    precept:
      'Karṇa **never refused a request**. The very kavaca-kuṇḍala that made him immortal — he cut it from his body for a beggar at midday.',
    exposition: [
      'Bhishma, lying on his arrows, names Karna as the supreme exemplar of dana-dharma — even though Karna fought against him in the war that killed him. *Hate the side, honour the virtue.* Indra knew the vow and walked up to Karna in beggar\'s rags at noon prayer, the moment Karna could refuse no one. *Give me your armour and earrings.* Karna cut. Indra wept and gave the Vasava-Shakti in exchange.',
      'The lesson Bhishma draws is severe: *dana-dharma is not measured by what it costs you. It is measured by whether you would have given anyway.* Karna passed the test. The kingdom did not deserve him.',
    ],
    exemplar:
      'Karṇa himself; also Rantideva, who gave his last cup of water to a Chandala\'s dog and freed himself.',
  },
];

/**
 * Twenty-four sample names from the Vishnu-sahasranama, the
 * thousand names of Vishnu that Bhishma recites at Yudhishthira's
 * request near the end of the Anushasana Parva. The full thousand
 * is one of the most-recited stotras in the Hindu world; this slice
 * gives the flavour and the structure.
 */
export const SAHASRANAMA: DivineName[] = [
  { id: 1,  number: 1,    name: 'Viśvam',         sanskrit: 'विश्वम्',          meaning: 'The Universe itself' },
  { id: 2,  number: 2,    name: 'Viṣṇu',          sanskrit: 'विष्णुः',          meaning: 'The All-Pervading' },
  { id: 3,  number: 3,    name: 'Vaṣaṭkāra',      sanskrit: 'वषट्कारः',         meaning: 'For whom the Vaṣaṭ-call of yajña is made' },
  { id: 4,  number: 7,    name: 'Bhūta-Bhavya-Bhavat-Prabhu', sanskrit: 'भूतभव्यभवत्प्रभुः', meaning: 'Lord of past, present, and future' },
  { id: 5,  number: 16,   name: 'Sarvaḥ',         sanskrit: 'सर्वः',            meaning: 'He who is all' },
  { id: 6,  number: 22,   name: 'Sambhavaḥ',      sanskrit: 'सम्भवः',           meaning: 'He who descends of his own will (avatara)' },
  { id: 7,  number: 33,   name: 'Hṛṣīkeśa',       sanskrit: 'हृषीकेशः',         meaning: 'Lord of the senses — Arjuna\'s name for Krishna' },
  { id: 8,  number: 42,   name: 'Madhusūdana',    sanskrit: 'मधुसूदनः',         meaning: 'Slayer of the demon Madhu' },
  { id: 9,  number: 75,   name: 'Govinda',        sanskrit: 'गोविन्दः',         meaning: 'Knower of cows, finder of earth' },
  { id: 10, number: 87,   name: 'Acyuta',         sanskrit: 'अच्युतः',          meaning: 'The Imperishable, never-fallen' },
  { id: 11, number: 187,  name: 'Janārdana',      sanskrit: 'जनार्दनः',         meaning: 'Refuge of all beings; tormentor of the wicked' },
  { id: 12, number: 207,  name: 'Vāmana',         sanskrit: 'वामनः',            meaning: 'The dwarf-avatara who measured the worlds in three strides' },
  { id: 13, number: 230,  name: 'Saumya',         sanskrit: 'सौम्यः',           meaning: 'Of moonlike serenity' },
  { id: 14, number: 332,  name: 'Padmanābha',     sanskrit: 'पद्मनाभः',         meaning: 'He from whose navel the lotus rises' },
  { id: 15, number: 359,  name: 'Kṛṣṇa',          sanskrit: 'कृष्णः',           meaning: 'The Dark One — the all-attractive' },
  { id: 16, number: 458,  name: 'Yajña',          sanskrit: 'यज्ञः',            meaning: 'He who is sacrifice itself' },
  { id: 17, number: 561,  name: 'Vāsudeva',       sanskrit: 'वासुदेवः',         meaning: 'Son of Vasudeva; he in whom all worlds dwell' },
  { id: 18, number: 595,  name: 'Ananta',         sanskrit: 'अनन्तः',           meaning: 'The Endless' },
  { id: 19, number: 642,  name: 'Hari',           sanskrit: 'हरिः',             meaning: 'He who removes (sins, sorrow, the round of birth)' },
  { id: 20, number: 711,  name: 'Sundara',        sanskrit: 'सुन्दरः',          meaning: 'The Beautiful' },
  { id: 21, number: 779,  name: 'Śaraṇa',         sanskrit: 'शरणम्',            meaning: 'The Refuge' },
  { id: 22, number: 854,  name: 'Mantraḥ',        sanskrit: 'मन्त्रः',          meaning: 'He who is the sacred sound' },
  { id: 23, number: 945,  name: 'Vīrabāhu',       sanskrit: 'वीरबाहुः',         meaning: 'Of heroic arms' },
  { id: 24, number: 1000, name: 'Sarva-praharaṇāyudha', sanskrit: 'सर्वप्रहरणायुधः', meaning: 'He who has every weapon as his weapon — the final name' },
];

export const BRANCH_META: Record<Teaching['branch'], { label: string; sanskrit: string; tagline: string; accent: string; glyph: string }> = {
  'Raja-dharma':   { label: 'Rāja-dharma',   sanskrit: 'राजधर्मः',   tagline: 'How a king holds the kingdom together',          accent: '#D4AF37', glyph: '👑' },
  'Apad-dharma':   { label: 'Āpad-dharma',   sanskrit: 'आपद्धर्मः',   tagline: 'Dharma in calamity, when ordinary rules pause', accent: '#B91C1C', glyph: '🔥' },
  'Moksha-dharma': { label: 'Mokṣa-dharma', sanskrit: 'मोक्षधर्मः', tagline: 'The dharma of release — the road past karma',   accent: '#E879F9', glyph: '🪷' },
  'Dana-dharma':   { label: 'Dāna-dharma',   sanskrit: 'दानधर्मः',   tagline: 'The dharma of giving — what releases the giver', accent: '#FF8C42', glyph: '🪔' },
};
