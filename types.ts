import React from 'react';

export type Rarity = 'mythic' | 'legendary' | 'epic' | 'rare';
export type Alignment = 'Dharma' | 'Adharma' | 'Neutral';

export interface CharacterStat {
  label: string;
  value: number; // 0 - 100
}

export interface KeyMoment {
  title: string;
  parva: string;
  description: string;
}

export interface Character {
  id: string;
  name: string;
  sanskrit: string;
  epithet: string;
  rarity: Rarity;
  alignment: Alignment;
  affiliation: string;
  origin: string;
  era: string;
  weapon: string;
  glyph: string;
  accent: string;
  stats: CharacterStat[];
  abilities: string[];
  quote: string;
  lore: string;
  keyMoments: KeyMoment[];
}

export interface Parva {
  number: number;
  name: string;
  sanskrit: string;
  meaning: string;
  summary: string;
  keyEvents: string[];
  accent: string;
}

export interface House {
  id: string;
  name: string;
  sanskrit: string;
  capital: string;
  region: string;
  side: 'Pandava' | 'Kaurava' | 'Neutral' | 'Allied-Pandava' | 'Allied-Kaurava' | 'Divine';
  patriarch: string;
  notableMembers: string[];
  banner: string;     // emoji/symbol
  accent: string;     // hex
  description: string;
  legacy: string;
}

export interface Episode {
  id: string;
  title: string;
  sanskrit?: string;
  era: string;
  glyph: string;
  accent: string;
  summary: string;
  significance: string;
}

export interface Shloka {
  chapter: number;
  verse: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  meaning: string;
}

export interface Kshetra {
  id: string;
  name: string;
  location: string;
  glyph: string;
  accent: string;
  story: string;
  significance: string;
}

export interface FamilyTreeNode {
  name: string;
  spouse?: string;
  note?: string;
  children?: FamilyTreeNode[];
}

export interface ThemeBlock {
  title: string;
  description: string;
  glyph: string;
  accent: string;
}

export interface StatBlock {
  value: string;
  label: string;
}

export interface KurukshetraDay {
  day: number;
  commander: string;
  highlight: string;
  fallen: string[];
}

export interface Backstory {
  id: string;
  title: string;
  sanskrit: string;
  glyph: string;
  accent: string;
  parva: string;            // which Parva this is told in (Adi, Vana, etc.)
  era: 'Pre-Bharata' | 'Pre-Kuru' | 'Pre-Pandava' | 'Pre-War' | 'Mid-War' | 'Post-War';
  characters: string[];     // primary actors
  summary: string[];        // 2-3 paragraphs of telling
  whyItMatters: string;     // one-line forward-link into the main story
}

export interface Upakhyana {
  id: string;
  title: string;
  sanskrit: string;
  glyph: string;
  accent: string;
  parva: string;            // where it is told inside the Mahabharata
  toldBy: string;           // sage / character who tells it to the Pandavas
  toldTo: string;           // who hears it
  theme: 'Devotion' | 'Dharma' | 'Wisdom' | 'Cosmic' | 'Love';
  characters: string[];
  summary: string[];        // 3 paragraphs of telling, **bold** for key names
  moral: string;            // the lesson the storyteller draws out
}

export interface Vow {
  id: string;
  kind: 'Pratijna' | 'Shapa';       // vow vs curse
  title: string;
  sanskrit: string;
  glyph: string;
  accent: string;
  utteredBy: string;                 // speaker of the vow / curse
  utteredOn: string;                 // recipient or target
  occasion: string;                  // short setting line
  parva: string;                     // where the utterance happens
  oath: string;                      // the exact sworn line (translated, **bold** allowed)
  consequence: string[];             // 2-3 paragraphs of fulfilment
  fulfilledOn: string;               // brief: where in the epic it cashes in
}
