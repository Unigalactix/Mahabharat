import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { CHANDRAVANSHA } from '../data/lineage';
import { FamilyTreeNode } from '../types';

// Recursive node with expand/collapse. The first two levels open by default
// (depth 0 = root, depth 1 = root's children) so the tree is immediately
// useful but not overwhelming.
const TreeNode: React.FC<{ node: FamilyTreeNode; depth?: number }> = ({
  node,
  depth = 0,
}) => {
  const hasChildren = !!node.children && node.children.length > 0;
  const [open, setOpen] = useState(depth < 2);

  const childCount = hasChildren ? node.children!.length : 0;

  return (
    <div className="flex flex-col items-center">
      <div className="ft-node relative">
        <div className="ft-name">{node.name}</div>
        {node.spouse && <div className="ft-spouse">∞ {node.spouse}</div>}
        {node.note && (
          <div className="text-parchment/65 text-[11px] italic mt-1 max-w-[220px]">
            {node.note}
          </div>
        )}
        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={
              open
                ? `Collapse ${childCount} descendant${childCount === 1 ? '' : 's'} of ${node.name}`
                : `Expand ${childCount} descendant${childCount === 1 ? '' : 's'} of ${node.name}`
            }
            className="ft-toggle"
          >
            {open ? '−' : '+'}
            <span className="ft-toggle-count">{childCount}</span>
          </button>
        )}
      </div>

      {hasChildren && open && (
        <>
          <div className="ft-connector" aria-hidden />
          <div className="ft-row">
            {node.children!.map((child, i) => (
              <div key={`${child.name}-${i}`} className="flex flex-col items-center">
                <TreeNode node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Recursively walk the tree and mark every node open/closed.
const setAllOpen = (
  node: FamilyTreeNode,
  open: boolean,
  acc: Map<FamilyTreeNode, boolean>
) => {
  acc.set(node, open);
  node.children?.forEach((c) => setAllOpen(c, open, acc));
  return acc;
};

export const FamilyTreePage: React.FC = () => {
  // `key` is bumped to force a fresh recursive remount, which resets every
  // node's local `open` state back to its depth-based default. We use that
  // as a cheap way to implement "expand all" / "collapse all" without
  // threading state through every node.
  const [resetKey, setResetKey] = useState(0);
  const [mode, setMode] = useState<'default' | 'all' | 'none'>('default');

  const expandAll = () => {
    setMode('all');
    setResetKey((k) => k + 1);
  };
  const collapseAll = () => {
    setMode('none');
    setResetKey((k) => k + 1);
  };
  const resetView = () => {
    setMode('default');
    setResetKey((k) => k + 1);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        sanskrit="चन्द्रवंशः"
        title="The Lunar Dynasty"
        subtitle="From Soma the Moon, through Pururavas and Yayati and Bharata, down to Parīkṣit — the family tree that bound friend and enemy alike at Kurukṣetra."
      />

      {/* Legend */}
      <div className="glass p-5 mb-6 max-w-3xl mx-auto text-sm">
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
            Click the <span className="font-mono text-goldlight">+ / −</span> button on any node to expand or collapse its descendants.
          </li>
        </ul>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          type="button"
          onClick={expandAll}
          className={`pill ${mode === 'all' ? 'pill-active' : ''}`}
        >
          Expand all
        </button>
        <button
          type="button"
          onClick={resetView}
          className={`pill ${mode === 'default' ? 'pill-active' : ''}`}
        >
          Default view
        </button>
        <button
          type="button"
          onClick={collapseAll}
          className={`pill ${mode === 'none' ? 'pill-active' : ''}`}
        >
          Collapse all
        </button>
      </div>

      {/* The tree (horizontally scrollable on small screens) */}
      <div className="overflow-x-auto pb-6">
        <div className="ft-tree mx-auto">
          <TreeNode
            key={`tree-${mode}-${resetKey}`}
            node={CHANDRAVANSHA}
            // depth offset trick: choosing the initial depth flips every
            // node's default open state.
            //   mode 'all'      -> start depth -Infinity (effectively 0 < 2 is true forever — handled below)
            //   mode 'none'     -> start depth +Infinity (0 < 2 always false)
            //   mode 'default'  -> normal depth 0
            depth={mode === 'all' ? -9999 : mode === 'none' ? 9999 : 0}
          />
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
