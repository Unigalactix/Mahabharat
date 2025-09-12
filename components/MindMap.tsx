import React, { useState } from 'react';

interface MindMapNode {
  label: string;
  children?: MindMapNode[];
}

interface MindMapProps {
  root: MindMapNode;
  sideColor?: string;
}


const MindMap: React.FC<MindMapProps> = ({ root, sideColor = '#fff' }) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggle = (label: string) => {
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  };

  // Helper to render connecting lines (vertical)
  const Line: React.FC<{ height: number }> = ({ height }) => (
    <div style={{
      width: 3,
      height,
      background: 'linear-gradient(to bottom, #fbbf24 0%, #fffbe6 60%, #fff0 100%)',
      margin: '0 auto',
      borderRadius: 4,
      boxShadow: '0 0 8px 2px #fbbf24cc',
      opacity: 0.85
    }} />
  );

  const renderNode = (node: MindMapNode, depth = 0) => {
    const isOpen = !!expanded[node.label];
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: depth === 0 ? 0 : 40,
          position: 'relative',
          width: '100%',
          minWidth: 0,
        }}
      >
        <div
          style={{
            cursor: node.children ? 'pointer' : 'default',
            color: depth === 0 ? '#fffbe6' : '#fbbf24',
            fontWeight: depth === 0 ? 700 : 500,
            fontFamily: 'Cinzel, serif',
            background: depth === 0
              ? 'linear-gradient(90deg, #fbbf24 0%, #fffbe6 100%)'
              : 'linear-gradient(90deg, #23272e 0%, #3b2f13 100%)',
            border: depth === 0
              ? '3px solid #fffbe6'
              : '2px solid #fbbf24',
            borderRadius: 32,
            padding: depth === 0 ? '18px 36px' : '12px 28px',
            margin: 6,
            minWidth: 140,
            boxShadow: depth === 0
              ? '0 0 32px 8px #fbbf24cc, 0 2px 16px #fffbe6cc'
              : '0 2px 12px #fbbf2433',
            letterSpacing: 1.2,
            textShadow: depth === 0
              ? '0 2px 8px #fffbe6, 0 0 2px #fbbf24'
              : '0 1px 4px #fbbf24',
            transition: 'background 0.2s, box-shadow 0.2s',
            position: 'relative',
            zIndex: 1,
          }}
          onClick={() => node.children && toggle(node.label)}
          onMouseOver={e => (e.currentTarget.style.background = depth === 0 ? '#fbbf24' : '#3b2f13')}
          onMouseOut={e => (e.currentTarget.style.background = depth === 0 ? 'linear-gradient(90deg, #fbbf24 0%, #fffbe6 100%)' : 'linear-gradient(90deg, #23272e 0%, #3b2f13 100%)')}
        >
          {node.children && (
            <span style={{ marginRight: 10, fontSize: 22, verticalAlign: 'middle', color: '#fffbe6', textShadow: '0 0 8px #fbbf24', transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)' }}>{isOpen ? '▼' : '▶'}</span>
          )}
          {node.label}
        </div>
        {node.children && (
          <div
            style={{
              overflow: 'hidden',
              maxHeight: isOpen ? 1000 : 0,
              opacity: isOpen ? 1 : 0,
              transition: 'max-height 0.7s cubic-bezier(.4,2,.6,1), opacity 0.5s',
              width: '100%',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {isOpen && <Line height={22} />}
            <div style={{ display: 'flex', gap: 36, marginTop: 10, width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
              {isOpen && node.children.map(child => renderNode(child, depth + 1))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 32,
        background: 'radial-gradient(circle at 50% 0%, #fffbe6 0%, #fbbf2400 80%)',
        borderRadius: 40,
        boxShadow: '0 0 64px 8px #fbbf2433, 0 2px 32px #fffbe6cc',
        border: '2px solid #fbbf24',
        width: '100%',
        minWidth: 0,
        minHeight: 320,
      }}
    >
      {renderNode(root)}
    </div>
  );
};

export type { MindMapNode };
export default MindMap;
