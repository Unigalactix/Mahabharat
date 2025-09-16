import React from 'react';
import MindMap, { MindMapNode } from '../components/MindMap';

const days = [
  { day: 1, summary: 'War begins. Bhishma leads Kauravas. Minor skirmishes, rules of war established.' },
  { day: 2, summary: 'Fierce fighting. Pandavas gain upper hand.' },
  { day: 3, summary: 'Bhishma devastates Pandava army.' },
  { day: 4, summary: 'Arjuna and Satyaki counter Bhishma.' },
  { day: 5, summary: 'Bhima slays many Kaurava brothers.' },
  { day: 6, summary: 'Massive casualties on both sides.' },
  { day: 7, summary: 'Drona and Bhishma cause heavy losses.' },
  { day: 8, summary: 'Bhima kills 8 more Kaurava brothers.' },
  { day: 9, summary: 'Krishna breaks his vow to save Arjuna from Bhishma.' },
  { day: 10, summary: 'Shikhandi and Arjuna fell Bhishma.' },
  { day: 11, summary: 'Drona becomes Kaurava commander.' },
  { day: 12, summary: 'Abhimanyu shines in battle.' },
  { day: 13, summary: 'Abhimanyu trapped and killed in Chakravyuha.' },
  { day: 14, summary: 'Arjuna vows to kill Jayadratha, succeeds. Ghatotkacha killed by Karna.' },
  { day: 15, summary: 'Drona killed by Dhrishtadyumna.' },
  { day: 16, summary: 'Karna becomes Kaurava commander.' },
  { day: 17, summary: 'Karna killed by Arjuna. Shalya becomes commander.' },
  { day: 18, summary: 'Duryodhana defeated by Bhima. Ashwatthama massacres Pandava camp at night.' },
];

const kurukshetraSummary = `
The Kurukshetra War, fought between the Pandavas and Kauravas, lasted 18 days and resulted in the near annihilation of both dynasties. Each day saw dramatic turns, legendary duels, and the breaking of ancient codes of honor. The war ended with the victory of the Pandavas, but at a tremendous cost.`;

// Mind map data for battlefield sides and participants
const battlefieldMindMap: MindMapNode = {
  label: 'Kurukshetra Battlefield',
  children: [
    {
      label: 'Kauravas',
      children: [
        { label: 'Commanders', children: [
          { label: 'Bhishma (Days 1-10)' },
          { label: 'Drona (Days 11-15)' },
          { label: 'Karna (Days 16-17)' },
          { label: 'Shalya (Day 18)' },
        ] },
        { label: 'Key Warriors', children: [
          { label: 'Duryodhana' },
          { label: 'Dushasana' },
          { label: 'Ashwatthama' },
          { label: 'Shakuni' },
          { label: 'Jayadratha' },
          { label: 'Kripacharya' },
          { label: 'Kritavarma' },
          { label: 'All Kaurava brothers' },
        ] },
        { label: 'Allies', children: [
          { label: 'Shakuni' },
          { label: 'Jayadratha' },
          { label: 'Bhagadatta' },
          { label: 'Others' },
        ] },
      ],
    },
    {
      label: 'Pandavas',
      children: [
        { label: 'Leaders', children: [
          { label: 'Yudhishthira' },
          { label: 'Bhima' },
          { label: 'Arjuna' },
          { label: 'Nakula' },
          { label: 'Sahadeva' },
          { label: 'Krishna (Advisor)' },
        ] },
        { label: 'Commanders', children: [
          { label: 'Dhrishtadyumna (after Bhishma)' },
        ] },
        { label: 'Key Warriors', children: [
          { label: 'Shikhandi' },
          { label: 'Satyaki' },
          { label: 'Ghatotkacha' },
          { label: 'Abhimanyu' },
          { label: 'Drupada' },
          { label: 'Virata' },
          { label: 'Upapandavas (Draupadi’s sons)' },
          { label: 'All Parvas' },
        ] },
        { label: 'Allies', children: [
          { label: 'King of Matsya' },
          { label: 'King of Panchala' },
          { label: 'Others' },
        ] },
      ],
    },
  ],
};

const KurukshetraPage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="storm-gust text-3xl font-bold text-amber-300 mb-8">Kurukshetra War: 18 Days of Battle</h2>
    <p className="text-lg text-slate-300 mb-6">{kurukshetraSummary}</p>
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-amber-200 mb-4">Key Events by Day</h3>
      <ol className="list-decimal pl-6 space-y-2">
        {days.map(d => (
          <li key={d.day}>
            <span className="font-bold text-amber-400">Day {d.day}:</span> {d.summary}
          </li>
        ))}
      </ol>
    </div>
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-amber-200 mb-4">Battlefield Mind Map: Sides & Participants</h3>
      <div className="bg-gray-900 rounded-xl p-5 border border-amber-500/30 shadow-lg">
        <MindMap root={battlefieldMindMap} />
      </div>
    </div>
  </div>
);

export default KurukshetraPage;
