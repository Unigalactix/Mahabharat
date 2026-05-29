import { FamilyTreeNode } from '../types';

// Chandravansha — the Lunar dynasty from which the Kurus descend.
// Built as a single recursive tree from Soma to the Upapandavas + Parikshit.
// The tree is intentionally pruned: only the lines directly relevant to the
// Mahabharata are retained. Side-lines (e.g. all 100 Kauravas) are
// summarised in `note` rather than enumerated.

export const CHANDRAVANSHA: FamilyTreeNode = {
  name: 'Soma (Chandra)',
  note: 'The Moon — origin of the Lunar dynasty',
  children: [
    {
      name: 'Budha',
      spouse: 'Ila',
      children: [
        {
          name: 'Pururavas',
          spouse: 'Urvashi',
          children: [
            {
              name: 'Ayu',
              children: [
                {
                  name: 'Nahusha',
                  children: [
                    {
                      name: 'Yayati',
                      spouse: 'Devayani & Sharmishtha',
                      note: 'Cursed with old age — borrowed youth from Puru',
                      children: [
                        {
                          name: 'Yadu',
                          note: 'Refused his father — founds the Yadava line of Krishna',
                          children: [
                            {
                              name: '… (many generations)',
                              children: [
                                {
                                  name: 'Shurasena',
                                  children: [
                                    {
                                      name: 'Vasudeva',
                                      spouse: 'Devaki (and Rohini)',
                                      children: [
                                        { name: 'Balarama', note: 'Born of Rohini' },
                                        { name: 'Krishna', note: '8th son, Avatar of Vishnu' },
                                        { name: 'Subhadra', note: 'Wife of Arjuna, mother of Abhimanyu' },
                                      ],
                                    },
                                    {
                                      name: 'Kunti-Bhoja (adoptive line)',
                                      children: [
                                        {
                                          name: 'Pritha / Kunti',
                                          note: 'Adopted daughter — later wife of Pandu',
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: 'Puru',
                          note: 'Gave his youth to Yayati — inherits the throne',
                          children: [
                            {
                              name: '… (many generations)',
                              children: [
                                {
                                  name: 'Dushyanta',
                                  spouse: 'Shakuntala',
                                  children: [
                                    {
                                      name: 'Bharata',
                                      note: 'Eponym of Bharatavarsha',
                                      children: [
                                        {
                                          name: '… (many generations)',
                                          children: [
                                            {
                                              name: 'Hastin',
                                              note: 'Founds Hastinapura',
                                              children: [
                                                {
                                                  name: 'Kuru',
                                                  note: 'Plough-king of Kurukshetra',
                                                  children: [
                                                    {
                                                      name: '… (many generations)',
                                                      children: [
                                                        {
                                                          name: 'Pratipa',
                                                          children: [
                                                            {
                                                              name: 'Shantanu',
                                                              spouse: 'Ganga, then Satyavati',
                                                              children: [
                                                                {
                                                                  name: 'Devavrata / Bhishma',
                                                                  note: 'Son of Ganga — vow of celibacy',
                                                                },
                                                                {
                                                                  name: 'Chitrangada',
                                                                  note: 'Of Satyavati — killed young by a Gandharva',
                                                                },
                                                                {
                                                                  name: 'Vichitravirya',
                                                                  spouse: 'Ambika & Ambalika',
                                                                  note: 'Died childless — niyoga performed by Vyasa',
                                                                  children: [
                                                                    {
                                                                      name: 'Dhritarashtra',
                                                                      spouse: 'Gandhari',
                                                                      note: 'Born blind — niyoga son of Vyasa & Ambika',
                                                                      children: [
                                                                        {
                                                                          name: 'Duryodhana',
                                                                          spouse: 'Bhanumati',
                                                                          note: 'Eldest of the 100 Kauravas',
                                                                          children: [
                                                                            { name: 'Lakshmana Kumara', note: 'Killed by Abhimanyu on Day 13' },
                                                                          ],
                                                                        },
                                                                        { name: 'Dushasana', note: '2nd Kaurava — dragger of Draupadi' },
                                                                        { name: '… 97 other Kauravas + sister Dushala' },
                                                                        { name: 'Yuyutsu', note: 'Born of a Vaishya mother — defects to the Pandavas' },
                                                                      ],
                                                                    },
                                                                    {
                                                                      name: 'Pandu',
                                                                      spouse: 'Kunti & Madri',
                                                                      note: 'Niyoga son of Vyasa & Ambalika — cursed never to father a child',
                                                                      children: [
                                                                        {
                                                                          name: 'Yudhishthira',
                                                                          spouse: 'Draupadi (+ Devika)',
                                                                          note: 'Of Kunti by Dharma — eldest Pandava',
                                                                          children: [
                                                                            { name: 'Prativindhya', note: 'Upapandava — killed by Ashwatthama' },
                                                                            { name: 'Yaudheya', note: 'Of Devika' },
                                                                          ],
                                                                        },
                                                                        {
                                                                          name: 'Bhima',
                                                                          spouse: 'Draupadi, Hidimbi, Valandhara',
                                                                          note: 'Of Kunti by Vayu',
                                                                          children: [
                                                                            { name: 'Sutasoma', note: 'Upapandava — killed by Ashwatthama' },
                                                                            { name: 'Ghatotkacha', note: 'Of Hidimbi — killed by Karna with Indra\'s shakti' },
                                                                            { name: 'Sarvaga', note: 'Of Valandhara' },
                                                                          ],
                                                                        },
                                                                        {
                                                                          name: 'Arjuna',
                                                                          spouse: 'Draupadi, Subhadra, Ulupi, Chitrangada',
                                                                          note: 'Of Kunti by Indra',
                                                                          children: [
                                                                            { name: 'Shrutakarma', note: 'Upapandava (of Draupadi) — killed by Ashwatthama' },
                                                                            {
                                                                              name: 'Abhimanyu',
                                                                              spouse: 'Uttaraa',
                                                                              note: 'Of Subhadra — killed in the Chakravyuha on Day 13',
                                                                              children: [
                                                                                {
                                                                                  name: 'Parikshit',
                                                                                  note: 'Rescued in the womb by Krishna — succeeds Yudhishthira',
                                                                                  children: [
                                                                                    {
                                                                                      name: 'Janamejaya',
                                                                                      note: 'King at whose snake-sacrifice the Mahabharata is first recited',
                                                                                    },
                                                                                  ],
                                                                                },
                                                                              ],
                                                                            },
                                                                            { name: 'Iravan', note: 'Of Ulupi — sacrificed on Day 8' },
                                                                            { name: 'Babhruvahana', note: 'Of Chitrangada — kills Arjuna in the ashvamedha' },
                                                                          ],
                                                                        },
                                                                        {
                                                                          name: 'Nakula',
                                                                          spouse: 'Draupadi, Karenumati',
                                                                          note: 'Of Madri by the elder Ashvin',
                                                                          children: [
                                                                            { name: 'Shatanika', note: 'Upapandava — killed by Ashwatthama' },
                                                                            { name: 'Niramitra', note: 'Of Karenumati' },
                                                                          ],
                                                                        },
                                                                        {
                                                                          name: 'Sahadeva',
                                                                          spouse: 'Draupadi, Vijaya',
                                                                          note: 'Of Madri by the younger Ashvin',
                                                                          children: [
                                                                            { name: 'Shrutasena', note: 'Upapandava — killed by Ashwatthama' },
                                                                            { name: 'Suhotra', note: 'Of Vijaya' },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      name: 'Vidura',
                                                                      note: 'Niyoga son of Vyasa & a maid — incarnation of Dharma',
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
