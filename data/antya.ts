import { AntyaScene } from '../types';

export const ARC_META: Record<AntyaScene['arc'], {
  label: string;
  sanskrit: string;
  parva: string;
  tagline: string;
  accent: string;
  glyph: string;
}> = {
  'Mausala': {
    label: 'Mausala — The Reed-Clubs',
    sanskrit: 'मौसलपर्व',
    parva: 'Parva 16',
    tagline: 'Thirty-six years after the war, the Yādavas turn the reeds of Prabhāsa into clubs and slaughter their own.',
    accent: '#B91C1C',
    glyph: '🌾',
  },
  'Mahaprasthana': {
    label: 'Mahāprasthāna — The Great Departure',
    sanskrit: 'महाप्रस्थानपर्व',
    parva: 'Parva 17',
    tagline: 'Six brothers, one queen, and a dog walk north into the Himālaya — only two reach the gate.',
    accent: '#60A5FA',
    glyph: '🏔️',
  },
  'Svargarohana': {
    label: 'Svargārohaṇa — Ascent to Heaven',
    sanskrit: 'स्वर्गारोहणपर्व',
    parva: 'Parva 18',
    tagline: 'Yudhiṣṭhira sees his enemies in heaven and his brothers in hell — and learns the last lesson.',
    accent: '#FBBF24',
    glyph: '🌅',
  },
  'Sarpa-Yajna': {
    label: 'Sarpa-Yajña — The Snake Sacrifice',
    sanskrit: 'सर्पयज्ञ',
    parva: 'Ādi · the framing',
    tagline: 'Janamejaya, three generations later, burns the serpents to ash — and Vyāsa\'s disciple sings the whole epic for the first time.',
    accent: '#10B981',
    glyph: '🐍',
  },
};

export const ANTYA: AntyaScene[] = [
  // ----- MAUSALA -----
  {
    id: 'm1-omens',
    arc: 'Mausala',
    order: 1,
    title: 'Omens over Dvārakā',
    sanskrit: 'दुर्निमित्तानि',
    glyph: '🌑',
    accent: '#B91C1C',
    setting: 'Dvārakā, thirty-six years after Kurukṣetra. Iron rats run in the streets. The wheel of **Kṛṣṇa**\'s chariot turns the wrong way. **Gāndhārī**\'s curse is ripening.',
    characters: ['Krishna', 'Balarama', 'Yadavas'],
    narrative: [
      'The omens come first. Pots crack on their own. The sun is haloed in iron. **Gāndhārī**\'s words, spoken in the ash of Kurukṣetra, are a thirty-six-year fuse — *"Krṣṇa, as you have watched my hundred sons die, so shall your kinsmen die before you, and you shall die alone."*',
      '**Kṛṣṇa** sees it all. He does not stop it. He gathers the **Yādavas** — the **Vṛṣṇis**, the **Bhojas**, the **Andhakas** — and sends them on pilgrimage to **Prabhāsa**, the holy beach where the river **Sarasvatī** disappears into the western sea.',
      'They go. They drink. The drinking becomes a quarrel. The quarrel becomes the curse.'
    ],
    reflection: 'Even the avatāra cannot un-utter a mother\'s grief.',
  },
  {
    id: 'm2-reeds',
    arc: 'Mausala',
    order: 2,
    title: 'The Reeds of Prabhāsa',
    sanskrit: 'एरकमुसलम्',
    glyph: '🌾',
    accent: '#B91C1C',
    setting: 'The beach of **Prabhāsa**. Drunken Yādavas. A patch of reeds (*erakā*) that should have been only grass.',
    characters: ['Sātyaki', 'Kṛtavarmā', 'Pradyumna', 'Aniruddha', 'Yadavas'],
    narrative: [
      'Years earlier, three sages had cursed a Yādava boy who mocked them by tying a pestle to his belly: *"That pestle shall destroy your clan."* The Yādavas had ground the pestle to powder and thrown the powder into the sea. From the powder, on the beach of Prabhāsa, grew a thicket of iron-edged reeds.',
      'At Prabhāsa the drinking deepens. **Sātyaki** taunts **Kṛtavarmā** for the night-massacre at Kurukṣetra. **Kṛtavarmā** taunts back. Swords come out — and at the back of the quarrel, hands reach for the reeds.',
      'Every reed becomes a club in the hand of a drunken cousin. **Pradyumna** falls. **Sāmba** falls. **Aniruddha** falls. By sunset, the Vṛṣṇi-Andhaka clan that ruled the western sea has slaughtered itself to two old men — **Kṛṣṇa** and **Balarāma**.'
    ],
    reflection: 'Every weapon thrown into the sea returns as the wave that drowns its thrower.',
  },
  {
    id: 'm3-pipal',
    arc: 'Mausala',
    order: 3,
    title: 'Kṛṣṇa Under the Pīpal',
    sanskrit: 'अश्वत्थमूले',
    glyph: '🍃',
    accent: '#B91C1C',
    setting: 'A pīpal tree in the forest beyond Prabhāsa. **Balarāma** has already walked into the sea, and a great white serpent has risen from his mouth — **Ananta** returning to the deep.',
    characters: ['Krishna', 'Jara'],
    narrative: [
      '**Kṛṣṇa** wanders into the forest. He lies down under a *pīpal* tree, one foot tucked over the other knee, the sole of his left foot pink and bare and turned upward. He closes his eyes.',
      'A hunter named **Jara** — *"Old Age"* — stalking a deer at dusk, sees the pink foot through the leaves. He thinks it is a deer\'s ear. He shoots.',
      'The arrow is the one **Pradyumna** had thrown into the sea — re-forged from a piece of the cursed pestle. **Kṛṣṇa** opens his eyes, smiles at the trembling hunter, blesses him, and ascends. **Dāruka** the charioteer brings the news to **Hastināpura**. **Arjuna**, who hears it last, finds that his bow **Gāṇḍīva** will no longer string for him, and his celestial arrows are gone — they leave with their owner.',
      'The sea rises. **Dvārakā**, the city of nine gates that **Viśvakarman** built on **Kṛṣṇa**\'s command, sinks beneath the waves the moment its lord ascends.'
    ],
    reflection: 'The avatāra leaves the way he came — quietly, and on his own time.',
  },

  // ----- MAHAPRASTHANA -----
  {
    id: 'mp1-abdication',
    arc: 'Mahaprasthana',
    order: 1,
    title: 'The Abdication',
    sanskrit: 'राज्यत्यागः',
    glyph: '👑',
    accent: '#60A5FA',
    setting: '**Hastināpura**. **Yudhiṣṭhira** hears of **Kṛṣṇa**\'s passing and the drowning of **Dvārakā**. The light has gone out of the world.',
    characters: ['Yudhishthira', 'Pandavas', 'Draupadi', 'Parikshit'],
    narrative: [
      '**Yudhiṣṭhira** crowns **Parikṣit** — son of **Abhimanyu**, grandson of **Arjuna**, the only Pāṇḍava descendant left alive — and gives him the kingdom. The Pāṇḍavas put on the bark-cloth of forest-dwellers one last time.',
      'They leave by the northern gate. **Draupadī** walks with them. A dog joins them at the city wall and follows without being called. **Subhadrā** stays behind to raise **Parikṣit**. **Kuntī** has long since walked into the forest fire with **Dhṛtarāṣṭra** and **Gāndhārī**.',
      'They walk east first, then south to the sea where **Agni** receives **Gāṇḍīva** back from **Arjuna**\'s hands, then they turn north toward the **Himālaya**. Seven walkers. One dog. No looking back.'
    ],
    reflection: 'The crown was never the prize. Being free of the crown is the prize.',
  },
  {
    id: 'mp2-fall',
    arc: 'Mahaprasthana',
    order: 2,
    title: 'The Falling of the Five',
    sanskrit: 'पञ्चानां पतनम्',
    glyph: '❄️',
    accent: '#60A5FA',
    setting: 'The slopes of **Mount Meru**. Snow. Thin air. The seven walkers climb a single-file path; whoever falls is not to be looked at.',
    characters: ['Yudhishthira', 'Draupadi', 'Sahadeva', 'Nakula', 'Arjuna', 'Bhima'],
    narrative: [
      '**Draupadī** falls first. **Bhīma** asks why. **Yudhiṣṭhira**, without turning his head, says: *"She loved Arjuna more than the rest of us. That partiality is her fault."* They keep walking.',
      '**Sahadeva** falls next. *"He thought no one was as wise as he was."* Then **Nakula**. *"He thought no one was as beautiful as he was."* Then **Arjuna**. *"He swore he would burn all his enemies in a single day, and did not. Pride."*',
      'Then **Bhīma** himself, the strongest mortal, asks gasping from the snow: *"And me?"* **Yudhiṣṭhira** says: *"You ate too much and never thought of others\' hunger."* And keeps walking.',
      'Only the eldest brother and the dog go on.'
    ],
    reflection: 'On the last mountain, every greatness becomes the weight that drags you down.',
  },
  {
    id: 'mp3-dog',
    arc: 'Mahaprasthana',
    order: 3,
    title: 'Yudhiṣṭhira and the Dog',
    sanskrit: 'श्वा च धर्मश्च',
    glyph: '🐕',
    accent: '#60A5FA',
    setting: 'The summit. **Indra** in his chariot of a thousand bells, come to carry the last king to heaven in his living body.',
    characters: ['Yudhishthira', 'Indra', 'Dharma'],
    narrative: [
      '**Indra** says: *"Climb up, son of **Pāṇḍu**. You have earned the heaven of the living. Leave the dog."* **Yudhiṣṭhira** looks at the dog — thin, panting, faithful since the city wall — and says: *"He is mine. He came when I did not call him. I will not abandon him for any heaven."*',
      'Indra argues. Dogs are unclean. Dogs cannot enter Svarga. The merit of all your sacrifices is at stake. **Yudhiṣṭhira** says, evenly: *"To abandon one who has given me his loyalty for a kingdom in the sky is the act of a man who deserves no kingdom anywhere."* And he turns to walk back down.',
      'The dog rises up on its hind legs and becomes **Dharma** himself — the same god who had questioned **Yudhiṣṭhira** at the lake of the **Yakṣa** thirteen years before. *"Twice you have passed my test, son. Once at the water. Once at heaven\'s door. Climb up."*'
    ],
    reflection: 'Heaven is what a man enters; loyalty is what a man already is.',
  },

  // ----- SVARGAROHANA -----
  {
    id: 's1-inverted',
    arc: 'Svargarohana',
    order: 1,
    title: 'The Inverted Heaven',
    sanskrit: 'विपरीतस्वर्गः',
    glyph: '🌪️',
    accent: '#FBBF24',
    setting: 'Svarga. **Yudhiṣṭhira** has arrived in his living body. He looks for his family.',
    characters: ['Yudhishthira', 'Duryodhana', 'Indra'],
    narrative: [
      'He finds **Duryodhana** first — gambler, oath-breaker, the cousin whose refusal to give five villages cost a hundred thousand lives — seated on a golden throne, garlanded, attended, glorious. The Kauravas are everywhere. The hall is bright with them.',
      'His brothers are nowhere.',
      '**Yudhiṣṭhira** says: *"I will not stay in this heaven. Take me to my brothers."* The messenger smiles. He leads the king down.'
    ],
    reflection: 'The first sight of heaven is always wrong.',
  },
  {
    id: 's2-naraka',
    arc: 'Svargarohana',
    order: 2,
    title: 'The Road of Hell',
    sanskrit: 'नरकमार्गः',
    glyph: '🔥',
    accent: '#FBBF24',
    setting: 'A dark path. Pus and blood on the rocks. Crows tearing at corpses. The smell of burning hair.',
    characters: ['Yudhishthira', 'Draupadi', 'Karna', 'Pandavas'],
    narrative: [
      'The messenger leads **Yudhiṣṭhira** through swamps of vomit and rivers of pus. The king almost turns back — and then he hears the voices.',
      '*"Stay with us, brother. The wind that comes off you is cool. Stay a little longer."* He recognises them — **Bhīma**, **Arjuna**, the twins, **Draupadī**, **Karṇa**. They are in naraka. His own people.',
      '**Yudhiṣṭhira** says to the messenger: *"Go back to your master. Tell him I am not coming. I will stay here, where my family is, where the cool breath of my body brings them a moment of relief."* He sits down in the filth.'
    ],
    reflection: 'A king who will not abandon his dog will not abandon his brothers, even in hell.',
  },
  {
    id: 's3-test',
    arc: 'Svargarohana',
    order: 3,
    title: 'The Last Test, and the Bath',
    sanskrit: 'अन्तिमपरीक्षा',
    glyph: '🌅',
    accent: '#FBBF24',
    setting: 'The illusion dissolves. **Indra** and **Dharma** appear together. The Ganges of heaven runs nearby.',
    characters: ['Yudhishthira', 'Indra', 'Dharma'],
    narrative: [
      '**Indra** says: *"Son, this was the last māyā. Every righteous person sees hell for an instant, that one wrong of theirs may be burned away. Yours was the half-truth that killed **Droṇa** — *‘Aśvatthāmā is dead… the elephant.’* That hell is over now."*',
      '*"And **Duryodhana**? He died at the proper hour, weapon in hand, on the battlefield of dharma. The kṣatriya who falls in war is washed of his sins by the falling. That was his heaven."*',
      '**Yudhiṣṭhira** bathes in the celestial Ganges. His mortal body falls away. He sees **Kṛṣṇa** seated at the centre of the assembly with **Arjuna** beside him; he sees **Karṇa** at last beside **Sūrya** his father; he sees **Bhīṣma** seated in his proper place among the **Vasus**; he sees **Draupadī** as **Śrī**; he sees his brothers among the **Aśvins** and the **Maruts**. The story is over.'
    ],
    reflection: 'The last reward is not heaven. The last reward is to see everyone you ever wronged or were wronged by, restored.',
  },

  // ----- SARPA-YAJNA -----
  {
    id: 'sy1-bite',
    arc: 'Sarpa-Yajna',
    order: 1,
    title: 'The Bite of Takṣaka',
    sanskrit: 'तक्षकदंशः',
    glyph: '🐍',
    accent: '#10B981',
    setting: 'A seven-storey palace built on a pillar in a lake to keep snakes out. **Parikṣit**, grandson of **Arjuna**, cursed to die in seven days by the snake king **Takṣaka** for the sin of draping a dead snake around a meditating sage.',
    characters: ['Parikshit', 'Takshaka', 'Shuka'],
    narrative: [
      'For six days **Parikṣit** listens to the sage **Śuka** narrate the **Bhāgavata** — the deeds of **Kṛṣṇa** — and prepares his soul.',
      'On the seventh day a brahmin brings him a fruit. The king splits it open. A small worm crawls out. He laughs and says, *"Let this be Takṣaka."* The worm becomes the snake. The fangs find his neck. The palace burns from a single bite.',
      'The crown passes to his son, **Janamejaya** — a boy who will grow up wanting one thing.'
    ],
    reflection: 'A curse that travels three generations still finds the right neck.',
  },
  {
    id: 'sy2-sacrifice',
    arc: 'Sarpa-Yajna',
    order: 2,
    title: 'The Snake Sacrifice',
    sanskrit: 'सर्पसत्रम्',
    glyph: '🔥',
    accent: '#10B981',
    setting: '**Hastināpura**. A fire-altar shaped like a lake. Twelve priests chanting the names of snakes. Each name falls into the fire and the snake of that name comes flying out of the sky to die in the flame.',
    characters: ['Janamejaya', 'Astika', 'Takshaka'],
    narrative: [
      '**Janamejaya** vows revenge. He commissions a *sattra* — a continuous sacrifice — for the destruction of every serpent on earth. The chanting begins. Snakes fall into the fire in their thousands.',
      '**Takṣaka** himself, who had killed **Parikṣit**, flees to **Indra**\'s throne and clings to it. The chant rises. **Indra** himself is being pulled toward the fire with the snake wrapped around him.',
      'A young brahmin boy named **Āstīka** — whose mother is the sister of the serpents — walks into the assembly. He praises the sacrifice in such perfect verse that **Janamejaya** says, *"Ask any boon."* Āstīka asks: *"Stop the sacrifice."* The king, bound by his word, stops. **Takṣaka** falls a finger\'s breadth above the flame and lives.'
    ],
    reflection: 'A boy with the right verse can stop a king\'s revenge in mid-syllable.',
  },
  {
    id: 'sy3-vyasa',
    arc: 'Sarpa-Yajna',
    order: 3,
    title: 'Vyāsa Sends His Disciple',
    sanskrit: 'व्यासशिष्यागमनम्',
    glyph: '📜',
    accent: '#10B981',
    setting: 'The fire is doused but the assembly does not disperse. **Janamejaya** wants to hear the story of his own ancestors — who they were, why they killed each other, why his grandfather **Parikṣit** died. **Vyāsa** sends his disciple **Vaiśampāyana** into the hall.',
    characters: ['Vaishampayana', 'Janamejaya', 'Vyasa'],
    narrative: [
      '**Vaiśampāyana** stands beside the cold altar. He begins: *"Nārāyaṇaṃ namaskṛtya, naraṃ caiva narottamam… having bowed to Nārāyaṇa, and to Nara the best of men, and to the goddess Sarasvatī, let one now utter Jaya — Victory."*',
      'For days, perhaps weeks, the entire **Mahābhārata** is sung for the first time, between the doused snake-fire and the king who paid for it. **Ugraśravas** the bard sits in the audience, memorises every word, and later carries it to the **Naimiṣa** forest where he repeats it to the sage **Śaunaka** — and that is the recitation we have inherited.',
      'The epic that began *"Vyāsa thought, and then he composed,"* ends with a boy sitting in front of a snake-altar, asking who his great-grandfather was. The wheel closes. The book closes. *Iti śrī-Mahābhārate svargārohaṇa-parvani aṣṭādaśo\'dhyāyaḥ.* Thus, in the glorious Mahābhārata, in the parva of the Ascent to Heaven, the eighteenth and final chapter.'
    ],
    reflection: 'The epic is its own ending — because the listening is its own beginning.',
  },
];
