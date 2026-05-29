import { Episode } from '../types';

// 22 defining episodes of the Mahabharata — from Krishna's Yadava childhood
// to Yudhishthira's final ascent. Each entry carries an era tag, a single
// glyph, an accent color from the palette, a concise summary, and the
// dharmic / philosophical significance for which it is remembered.

export const EPISODES: Episode[] = [
  {
    id: 'krishna-janma',
    title: "Krishna's Birth in the Prison of Mathura",
    sanskrit: 'श्रीकृष्ण जन्म',
    era: 'Dvapara Yuga — Pre-War',
    glyph: '🪷',
    accent: '#0E7C7B',
    summary:
      'On a stormy Ashtami night, while Devaki and Vasudeva lie chained in Kamsa\'s dungeon, Vishnu descends as their eighth child. The locks fall open, the guards sleep, the Yamuna parts, and an infant Krishna is carried across the river to Gokul, where he is exchanged for Yashoda\'s newborn daughter.',
    significance:
      'Frames the entire epic: dharma incarnates the moment adharma believes itself safest. Krishna\'s birth is the seed of Kurukshetra eighty years later.',
  },
  {
    id: 'govardhan-lila',
    title: 'Lifting of Mount Govardhan',
    sanskrit: 'गोवर्धन लीला',
    era: 'Dvapara Yuga — Pre-War',
    glyph: '⛰️',
    accent: '#F5D061',
    summary:
      'To humble Indra\'s pride and stop the cowherds\' fearful worship of him, the boy Krishna lifts the entire Govardhan hill on his little finger. For seven days and nights Vrindavan shelters beneath it from Indra\'s torrential rain.',
    significance:
      'Establishes Krishna as Ishvara, not merely a cowherd — and re-orients devotion from celestial bureaucrats to the immediate, sustaining divine.',
  },
  {
    id: 'kalinga-mardana',
    title: 'The Subduing of Kaliya',
    sanskrit: 'कालिय मर्दन',
    era: 'Dvapara Yuga — Pre-War',
    glyph: '🐍',
    accent: '#0E7C7B',
    summary:
      'The poison of the serpent-king Kaliya blackens the Yamuna and slays the cattle of Vrindavan. Krishna plunges into the river, dances on the thousand hoods of the naga, and banishes him — sparing his life at the plea of his wives.',
    significance:
      'A child\'s play that is also cosmic cleansing: pride is not annihilated but transformed; even the venomous are granted refuge under Krishna\'s feet.',
  },
  {
    id: 'kamsa-vadha',
    title: 'The Slaying of Kamsa',
    sanskrit: 'कंस वध',
    era: 'Dvapara Yuga — Pre-War',
    glyph: '⚔️',
    accent: '#B91C1C',
    summary:
      'Summoned to Mathura for a rigged tournament, the adolescent Krishna kills the elephant Kuvalayapida, the wrestlers Chanura and Mushtika, and finally drags his maternal uncle Kamsa from his throne by the hair, ending a tyranny foretold at his birth.',
    significance:
      'Closes the first chapter of avatar-lila — the divine has now stepped into political history and the Yadava restoration begins.',
  },
  {
    id: 'sudarshan-charka',
    title: 'The Discus of Sudarshana',
    sanskrit: 'सुदर्शन चक्र',
    era: 'Dvapara Yuga — Pre-War',
    glyph: '☸',
    accent: '#D4AF37',
    summary:
      'Agni gifts Krishna the Sudarshana Chakra at the burning of the Khandava forest. From that day the discus spins on his index finger — instrument of last resort, used to behead Shishupala at the Rajasuya and to veil the sun in the war.',
    significance:
      'The weapon that is also the wheel of time. Whenever dharma exhausts every other path, the Sudarshana turns.',
  },
  {
    id: 'draupadi-swayamvara',
    title: 'The Swayamvara of Draupadi',
    sanskrit: 'द्रौपदी स्वयंवर',
    era: 'Pre-War — Pandavas in exile',
    glyph: '🏹',
    accent: '#E879F9',
    summary:
      'Disguised as Brahmins after fleeing the wax palace, the Pandavas reach Panchala. Arjuna strings the impossible bow, pierces the spinning fish through its reflection in oil, and wins the dark, lotus-eyed Krishnaa — who, by Kunti\'s unwitting word, becomes wife to all five brothers.',
    significance:
      'Pivot of the entire war: Drupada gains the alliance he wove the yajna for, the Pandavas gain Panchala\'s army, and Draupadi gains a vow she will collect at Kurukshetra.',
  },
  {
    id: 'khandava-dahana',
    title: 'The Burning of Khandava Forest',
    sanskrit: 'खाण्डव दहन',
    era: 'Pre-War — Indraprastha founded',
    glyph: '🔥',
    accent: '#FF8C42',
    summary:
      'To cure Agni\'s indigestion of ghee, Krishna and Arjuna ring the Khandava forest with arrows and let the fire-god feast on every living thing within. From the ash rises Indraprastha — and the surviving asura architect Mayaa, who builds its illusory palace.',
    significance:
      'A morally uncomfortable episode the epic never sanitises. The cost of founding a kingdom is recorded in full, and the Naga survivor Takshaka will return generations later for Parikshit.',
  },
  {
    id: 'rajasuya-yajna',
    title: 'The Rajasuya Sacrifice and Death of Shishupala',
    sanskrit: 'राजसूय यज्ञ',
    era: 'Pre-War — Pandavas at zenith',
    glyph: '👑',
    accent: '#D4AF37',
    summary:
      'Yudhishthira is crowned emperor at Indraprastha. Bhima slays Jarasandha, the brothers conquer the four quarters, and Krishna receives the agra-puja. When Shishupala\'s torrent of abuse fills the hundredth offence, the Sudarshana flies and his head falls before the assembled kings.',
    significance:
      'Pandava glory at its high noon — and the precise moment Duryodhana, dazzled by Maya\'s crystal floors, decides he cannot live in a world that contains this hall.',
  },
  {
    id: 'dyuta-sabha',
    title: 'The Game of Dice',
    sanskrit: 'द्यूत सभा',
    era: 'Pre-War — The fall',
    glyph: '🎲',
    accent: '#B91C1C',
    summary:
      'Shakuni\'s loaded dice never fall wrong. Yudhishthira loses kingdom, brothers, himself, and finally Draupadi. She is dragged by her hair into the sabha, where the elders sit silent and Dhritarashtra\'s sons laugh.',
    significance:
      'The dharma of the assembly fails. From this hour the war is unavoidable — every elder who did not speak will pay for the silence on the field.',
  },
  {
    id: 'vastraharan',
    title: "Draupadi's Vastraharan and Vow",
    sanskrit: 'द्रौपदी वस्त्रहरण',
    era: 'Pre-War — The fall',
    glyph: '🌺',
    accent: '#E879F9',
    summary:
      'Dushasana seizes Draupadi\'s sari to disrobe her in open court. She lets go of the cloth, raises both hands, and calls on Govinda. The fabric becomes endless. Bhima vows to drink Dushasana\'s blood and break Duryodhana\'s thigh; Draupadi vows her hair will remain unbound until it is washed in that blood.',
    significance:
      'The hinge of the epic. From here the Pandava cause is no longer about a lost kingdom but about a violated queen — and divine grace answers only the surrender of the last fingertip on the cloth.',
  },
  {
    id: 'vanavasa',
    title: 'The Twelve Years of Vanavasa',
    sanskrit: 'वनवास',
    era: 'Exile — Vana Parva',
    glyph: '🌳',
    accent: '#10B981',
    summary:
      'The Pandavas wander twelve years through Kamyaka, Dwaita, and Gandhamadana. Arjuna ascends to Indra\'s heaven and gathers the divine astras; Bhima meets Hanuman and brings the Saugandhika flower; Yudhishthira answers the Yaksha\'s questions and revives his brothers; sages retell the tales of Nala, Savitri, and Rama to fortify their hearts.',
    significance:
      'Exile is the Pandavas\' deeper schooling. They leave the forest not as fugitives but as initiates — and Arjuna leaves it armed with Pashupata.',
  },
  {
    id: 'agnatavasa',
    title: 'The Year of Agnatavasa in Virata',
    sanskrit: 'अज्ञातवास',
    era: 'Exile — Virata Parva',
    glyph: '🎭',
    accent: '#7BE0D2',
    summary:
      'The thirteenth year is spent in hidden disguise in King Virata\'s court — Yudhishthira as the dice-master Kanka, Bhima as the cook Vallabha, Arjuna as the eunuch dance-teacher Brihannala, Nakula and Sahadeva as grooms, and Draupadi as Queen Sudeshna\'s sairandhri. They survive Kichaka\'s lust, the cattle-raid of the Kauravas, and reveal themselves only as the year closes.',
    significance:
      'A king who can cook, a warrior who can teach girls to dance, a queen who braids another\'s hair — sovereignty is shown to be inward. The cattle-raid forces the early reveal, and the path to peace finally closes.',
  },
  {
    id: 'krishna-shanti-duta',
    title: "Krishna's Embassy of Peace",
    sanskrit: 'श्रीकृष्ण शान्ति दूत',
    era: 'Pre-War — Udyoga Parva',
    glyph: '🕊️',
    accent: '#F5D061',
    summary:
      'Krishna rides to Hastinapura asking only five villages for the five brothers. Duryodhana refuses even a needle-point of land and tries to arrest him. Krishna reveals his Vishvarupa in the sabha, then leaves. War is now certain.',
    significance:
      'Dharma exhausts every diplomatic word before it lifts a single weapon. The refusal is the formal beginning of the war.',
  },
  {
    id: 'vishwarupa-darshana',
    title: 'The Vishvarupa Darshana to Arjuna',
    sanskrit: 'विश्वरूप दर्शन',
    era: 'War — Day 1, Bhishma Parva',
    glyph: '🕉️',
    accent: '#D4AF37',
    summary:
      'Between the two armies Arjuna\'s bow slips from his hand. Krishna sings the Gita and, when Arjuna asks to see his true form, grants the divine eye. Suns blaze in every direction; Kauravas pour like rivers into the flame-mouths of Time. Arjuna stammers, takes back his Gandiva, and stands up.',
    significance:
      'The theological centre of the epic. Action without ego, surrender without passivity — the warrior fights because the cosmos is already doing what it must.',
  },
  {
    id: 'bhishma-shara-shayya',
    title: 'Bhishma on the Bed of Arrows',
    sanskrit: 'भीष्म शर शय्या',
    era: 'War — Day 10, Bhishma Parva',
    glyph: '🏹',
    accent: '#F5E8C9',
    summary:
      'Arjuna shoots from behind Shikhandi — whom Bhishma will not strike — and the grandsire falls, held above the earth on a bed of arrows. He waits for the uttarayana to die, and from that bed delivers the Vishnu Sahasranama and the dharma discourses of the Shanti and Anushasana Parvas.',
    significance:
      'A warrior who chooses the hour of his own death. The longest deathbed in literature becomes the textbook of dharma for the post-war world.',
  },
  {
    id: 'abhimanyu-chakravyuha',
    title: "Abhimanyu and the Chakravyuha",
    sanskrit: 'अभिमन्यु चक्रव्यूह',
    era: 'War — Day 13, Drona Parva',
    glyph: '🌀',
    accent: '#F5D061',
    summary:
      'The sixteen-year-old son of Arjuna and Subhadra knows how to enter the wheel-formation but not how to leave it. He breaks in alone, kills Lakshmana son of Duryodhana and thousands more, and is finally surrounded by six maharathas — Karna, Drona, Kripa, Ashwatthama, Kritavarma, Brihadbala — who together cut his bow, his chariot, his sword, and his life.',
    significance:
      'The war\'s most heartbreaking and most morally damning hour. The adharmic encirclement of a child by six veterans makes the Pandava grief absolute, and Arjuna\'s vow against Jayadratha inevitable.',
  },
  {
    id: 'jayadratha-vadha',
    title: 'The Slaying of Jayadratha before Sunset',
    sanskrit: 'जयद्रथ वध',
    era: 'War — Day 14, Drona Parva',
    glyph: '🌅',
    accent: '#FF8C42',
    summary:
      'Arjuna vows to kill Jayadratha — who blocked the Pandava brothers while Abhimanyu died — before the sun sets, or enter fire. The Kauravas hide their king all day. As dusk approaches, Krishna veils the sun with his Sudarshana; Jayadratha emerges to gloat; Krishna lifts the discus; Arjuna\'s arrow takes the head and lays it in his sleeping father\'s lap.',
    significance:
      'A vow kept, a child avenged, and the most theatrically divine intervention of the war — Krishna bending day itself.',
  },
  {
    id: 'karna-vadha',
    title: 'The Fall of Karna',
    sanskrit: 'कर्ण वध',
    era: 'War — Day 17, Karna Parva',
    glyph: '☀️',
    accent: '#FF8C42',
    summary:
      'Karna\'s chariot wheel sinks in the earth — a Brahmin\'s curse and Parashurama\'s. As he steps down to lift it, Krishna tells Arjuna to strike. The Anjalika arrow severs the head of the sun\'s eldest son, born in armour, given away at birth, loyal to the wrong friend to the end.',
    significance:
      'The epic\'s most tragic killing. Karna\'s death is the moral cost the Pandava victory will never stop paying — Kunti will weep for the son she abandoned, and Yudhishthira will damn his own mother for the secret.',
  },
  {
    id: 'duryodhana-uru-bhanga',
    title: "Bhima's Mace and the Breaking of Duryodhana's Thigh",
    sanskrit: 'दुर्योधन ऊरुभङ्ग',
    era: 'War — Day 18, Shalya Parva',
    glyph: '🪨',
    accent: '#B91C1C',
    summary:
      'Duryodhana hides in lake Dwaipayana. Drawn out, he fights Bhima with the mace. As the duel stalls, Krishna slaps his own thigh — Bhima remembers Draupadi\'s sabha — and breaks the rules of mace combat by striking below the navel. The thigh shatters. Balarama lifts his plough in fury; Krishna calms him.',
    significance:
      'Adharma in service of dharma — the epic refuses to call it clean. Duryodhana dies cursing Krishna, and is hailed by the gods. Both judgements are recorded.',
  },
  {
    id: 'sauptika-parva',
    title: "Ashwatthama's Night Raid on the Sleeping Camp",
    sanskrit: 'सौप्तिक पर्व',
    era: 'Post-War — Sauptika Parva',
    glyph: '🌑',
    accent: '#8B5CF6',
    summary:
      'After Duryodhana\'s death Ashwatthama, Kripa, and Kritavarma slip into the sleeping Pandava camp at midnight. Ashwatthama beheads Dhrishtadyumna, Shikhandi, and the five sleeping sons of Draupadi mistaking them for the Pandava brothers. Cornered the next day, he releases the Brahmashirastra at Uttara\'s womb and is cursed by Krishna to wander the earth, festering, for three thousand years.',
    significance:
      'The blackest night in the epic. Victory turns to ash; Draupadi\'s sons die for her hair vow; and the war\'s last weapon is aimed not at a soldier but at an unborn child.',
  },
  {
    id: 'parikshit-rakshana',
    title: "Krishna's Saving of Parikshit in the Womb",
    sanskrit: 'परीक्षित रक्षण',
    era: 'Post-War — Ashvamedhika Parva',
    glyph: '🛡️',
    accent: '#0E7C7B',
    summary:
      'Ashwatthama\'s Brahmashirastra strikes Uttara\'s womb. The child is born stillborn and revived by Krishna, who enters the womb in his Sukshma form. The line of the Kurus continues through this one breath. The child looks for the one who saved him — pari-kshita — and is named for the search.',
    significance:
      'The Pandava dynasty survives by the breadth of Krishna\'s fingertip. Parikshit will be the king to whom, generations later, the Bhagavata is told.',
  },
  {
    id: 'mahaprasthana',
    title: 'The Great Departure and Ascent to Svarga',
    sanskrit: 'महाप्रस्थानिक',
    era: 'End — Mahaprasthanika & Svargarohana Parvas',
    glyph: '🏔️',
    accent: '#F5E8C9',
    summary:
      'After Krishna\'s passing at Prabhasa and the Yadava self-destruction, the five Pandavas crown Parikshit and walk north with Draupadi and a single dog. One by one Draupadi, Sahadeva, Nakula, Arjuna, and Bhima fall on the Himalayan slopes. Yudhishthira walks on alone with the dog — who is Dharma himself — and refuses Svarga without him. Tested with a final vision of his brothers in hell and Duryodhana in heaven, he passes through the illusion and joins them.',
    significance:
      'The epic\'s last teaching: heaven is not earned by victory but by the refusal to abandon. The dog walks in with the king, and dharma takes back its own form.',
  },
];
