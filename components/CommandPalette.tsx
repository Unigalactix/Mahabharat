import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadSearchIndex, SearchEntry, KIND_LABEL } from '../utils/searchIndex';

const MAX_RESULTS = 30;

export const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [q, setQ] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Global hotkey: Ctrl/Cmd + K, or `/`. Also a custom event so other
  // components (the nav search button) can open the palette without coupling.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCmdK = (e.key.toLowerCase() === 'k') && (e.metaKey || e.ctrlKey);
      const target = e.target as HTMLElement | null;
      const inField =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        (target?.isContentEditable ?? false);
      const isSlash = e.key === '/' && !inField;
      if (isCmdK || isSlash) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('mbh:open-search', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mbh:open-search', onOpen);
    };
  }, [open]);

  // Lazy-load the index on first open
  useEffect(() => {
    if (open && !index) {
      loadSearchIndex().then(setIndex);
    }
    if (open) {
      setQ('');
      setCursor(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open, index]);

  const results = useMemo<SearchEntry[]>(() => {
    if (!index) return [];
    const needle = q.trim().toLowerCase();
    if (!needle) {
      // Default: show all pages at top
      return index.filter((e) => e.kind === 'page').slice(0, MAX_RESULTS);
    }
    // Score: exact-prefix-of-label > label-contains > haystack-contains
    const scored: { e: SearchEntry; s: number }[] = [];
    for (const e of index) {
      const lbl = e.label.toLowerCase();
      let s = 0;
      if (lbl === needle) s = 100;
      else if (lbl.startsWith(needle)) s = 80;
      else if (lbl.includes(needle)) s = 60;
      else if (e.sublabel?.toLowerCase().includes(needle)) s = 40;
      else if (e.haystack.includes(needle)) s = 20;
      if (s > 0) scored.push({ e, s });
    }
    scored.sort((a, b) => b.s - a.s);
    return scored.slice(0, MAX_RESULTS).map((x) => x.e);
  }, [index, q]);

  useEffect(() => setCursor(0), [q]);

  // Keep highlighted item in view
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-row="${cursor}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [cursor, open, results.length]);

  const choose = useCallback(
    (entry: SearchEntry) => {
      setOpen(false);
      navigate(entry.to);
    },
    [navigate]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, Math.max(0, results.length - 1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const r = results[cursor];
      if (r) choose(r);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-ink/85 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="glass w-full max-w-2xl border-gold/40 overflow-hidden shadow-[0_0_60px_rgba(212,175,55,.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gold/20">
          <span aria-hidden className="text-xl">🔍</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search the codex — Karṇa, Gāṇḍīva, Vanavāsa, Mausala…"
            className="flex-1 bg-transparent outline-none text-parchment placeholder:text-parchment/40 text-base"
            aria-label="Search"
          />
          <kbd className="hidden sm:inline-block text-[10px] text-parchment/50 border border-parchment/20 rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[60vh] overflow-y-auto">
          {!index ? (
            <div className="px-4 py-8 text-center text-parchment/55 text-sm">
              <span className="font-sanskrit text-goldlight/70">क्षणं प्रतीक्षस्व…</span>
              <span className="block mt-1">Loading the codex…</span>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-10 text-center text-parchment/55 text-sm">
              <p>No entries match <span className="text-goldlight">"{q}"</span>.</p>
              <p className="text-xs mt-1">Try a name, a parva, or a relic.</p>
            </div>
          ) : (
            results.map((r, i) => {
              const isActive = i === cursor;
              return (
                <button
                  key={r.id}
                  type="button"
                  data-row={i}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => choose(r)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    isActive ? 'bg-gold/15' : 'hover:bg-parchment/5'
                  }`}
                  style={
                    isActive
                      ? { borderLeft: `3px solid ${r.accent}`, paddingLeft: 'calc(1rem - 3px)' }
                      : { borderLeft: '3px solid transparent', paddingLeft: 'calc(1rem - 3px)' }
                  }
                >
                  <span
                    aria-hidden
                    className="text-2xl shrink-0 w-8 text-center"
                    style={{ filter: `drop-shadow(0 0 6px ${r.accent})` }}
                  >
                    {r.glyph}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-parchment text-sm sm:text-base truncate">
                        {r.label}
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 rounded border shrink-0"
                        style={{ borderColor: `${r.accent}55`, color: r.accent }}
                      >
                        {KIND_LABEL[r.kind]}
                      </span>
                    </div>
                    {r.sublabel && (
                      <p className="text-parchment/55 text-xs truncate">{r.sublabel}</p>
                    )}
                  </div>
                  {isActive && (
                    <span aria-hidden className="text-goldlight text-sm shrink-0">↵</span>
                  )}
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-2 border-t border-gold/20 text-[10px] text-parchment/50 uppercase tracking-[0.2em]">
          <span>
            <kbd className="border border-parchment/20 rounded px-1">↑</kbd>{' '}
            <kbd className="border border-parchment/20 rounded px-1">↓</kbd> navigate
          </span>
          <span>
            <kbd className="border border-parchment/20 rounded px-1">↵</kbd> open
          </span>
          <span className="hidden sm:inline">
            <kbd className="border border-parchment/20 rounded px-1">⌘K</kbd> /{' '}
            <kbd className="border border-parchment/20 rounded px-1">/</kbd> to toggle
          </span>
        </div>
      </div>
    </div>
  );
};
