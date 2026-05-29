import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { CHANDRAVANSHA } from '../data/lineage';
import { FamilyTreeNode } from '../types';

// Render a single node + its children, recursively.
// Uses the .ft-node / .ft-row / .ft-connector classes from index.html.
const TreeNode: React.FC<{ node: FamilyTreeNode }> = ({ node }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="ft-node">
        <div className="ft-name">{node.name}</div>
        {node.spouse && <div className="ft-spouse">∞ {node.spouse}</div>}
        {node.note && (
          <div className="text-parchment/65 text-[11px] italic mt-1 max-w-[220px]">
            {node.note}
          </div>
        )}
      </div>

      {node.children && node.children.length > 0 && (
        <>
          <div className="ft-connector" aria-hidden />
          <div className="ft-row">
            {node.children.map((child, i) => (
              <div key={`${child.name}-${i}`} className="flex flex-col items-center">
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const FamilyTreePage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="चन्द्रवंशः"
        title="The Lunar Dynasty"
        subtitle="From Soma the Moon, through Pururavas and Yayati and Bharata, down to Parīkṣit — the family tree that bound friend and enemy alike at Kurukṣetra."
      />

      {/* Legend */}
      <div className="glass p-5 mb-8 max-w-3xl mx-auto text-sm">
        <h4 className="text-parchment/60 uppercase tracking-[0.3em] text-xs mb-3">
          How to read this tree
        </h4>
        <ul className="space-y-1.5 text-parchment/80">
          <li>
            <span className="font-display text-goldlight">Bold gold name</span> — the ancestor.
          </li>
          <li>
            <span className="font-quote italic text-parchment/85">∞ italic name</span> — the spouse(s) of the bearer.
          </li>
          <li>
            <span className="text-parchment/65 italic">smaller line</span> — a key note about that person.
          </li>
          <li>
            Each downward line connects parent to child. The tree is pruned to the Mahābhārata-relevant line; side-branches are summarised in notes.
          </li>
        </ul>
      </div>

      {/* The tree (horizontally scrollable on small screens) */}
      <div className="overflow-x-auto pb-6">
        <div className="ft-tree mx-auto">
          <TreeNode node={CHANDRAVANSHA} />
        </div>
      </div>

      {/* Closing note */}
      <p className="text-center text-parchment/55 text-xs mt-10 italic max-w-2xl mx-auto">
        From this one root grow Kauravas and Pāṇḍavas alike — the war at
        Kurukṣetra is, before everything else, a war within a family.
      </p>
    </main>
  );
};

export default FamilyTreePage;
