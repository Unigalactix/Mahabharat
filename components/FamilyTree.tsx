import React, { useState, useEffect, useRef, useLayoutEffect, forwardRef } from 'react';
import { playSound } from '../utils/sound';
import { CrownIcon, SwordIcon, SparkleIcon, FemaleIcon, SageIcon, ShieldIcon, PersonIcon } from './CharacterIcons';
import { CHARACTERS } from '../constants';

// A generic silhouette SVG encoded in base64 to use for portraits
const silhouetteSrc = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iIzY0NzQ4YiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzk0IDE3LjQ1YTEwLjAwMiAxMC4wMDIgMCAxIDAgLTEyLjc4OCAwbC0uMDAxLjAwMUMyLjY2MyAxOS4yMjQgMS41IDIwLjI5NCAxLjUgMjJBNi41IDYuNSAwIDAgMCA4IDI4LjVoOGE2LjUgNi41IDAgMCAwIDYuNS02LjVjMC0xLjcxLS4xNjMtMi43NzYtMS42MDYtNC41NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==';

interface TreeNodeProps {
  name: string;
  description?: string;
  className?: string;
  border?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  tooltip?: string;
}

// Helper component for a character node in the tree, now accepting a ref
const TreeNode = forwardRef<HTMLDivElement, TreeNodeProps>(
  ({ name, description, className = '', border = 'border-slate-700', icon, onClick, tooltip }, ref) => (
    <div
      ref={ref}
      className={`relative group p-2 bg-gray-900 border ${border} rounded-lg shadow-lg flex items-center min-w-[170px] sm:min-w-[190px] cursor-pointer hover:bg-gray-800/50 transition-colors duration-200 ${className}`}
      onClick={() => { onClick(); playSound('click.mp3'); }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onClick(); playSound('click.mp3'); } }}
      aria-label={`Details for ${name}`}
    >
      {/* Emoji avatar based on name/role */}
      <span
        className="w-10 h-10 rounded-full mr-3 bg-gray-800 flex-shrink-0 border-2 border-slate-600 flex items-center justify-center text-2xl select-none"
        aria-hidden="true"
      >
        {(() => {
          const n = name.toLowerCase();
          if (n.includes('king') || n.includes('queen') || n.includes('yudhishthira') || n.includes('duryodhana')) return '👑';
          if (n.includes('sage') || n.includes('vyasa') || n.includes('kripa')) return '🧙‍♂️';
          if (n.includes('bhishma') || n.includes('drona')) return '🧓';
          if (n.includes('kunti') || n.includes('gandhari') || n.includes('satyavati') || n.includes('draupadi')) return '👩';
          if (n.includes('arjuna') || n.includes('bhima') || n.includes('nakula') || n.includes('sahadeva') || n.includes('karna')) return '👨';
          if (n.includes('child') || n.includes('son') || n.includes('abhimanyu')) return '👦';
          if (n.includes('daughter') || n.includes('girl')) return '👧';
          if (n.includes('servant')) return '🧑';
          return '👤';
        })()}
      </span>
      <div className="text-left flex-grow">
        <div className="flex items-center">
          {icon}
          <p className="font-bold text-amber-300 text-sm sm:text-base leading-tight">{name}</p>
        </div>
        {description && <p className="text-xs text-slate-400 mt-1 leading-tight">{description}</p>}
      </div>
      {tooltip && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 border border-slate-700">
            {tooltip}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
          </div>
        )}
    </div>
  )
);
TreeNode.displayName = 'TreeNode';


// Helper component for a simple horizontal connector between two nodes
const MarriageConnector: React.FC = () => <span className="text-slate-500 mx-2">+</span>;

const VerticalLine: React.FC<{ height?: string }> = ({ height = 'h-8' }) => (
    <div className={`w-px bg-slate-600 ${height} mx-auto`}></div>
);

interface LineCoord {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  label: string;
  dashed?: boolean;
}

const RelationshipLines: React.FC<{ lines: LineCoord[] }> = ({ lines }) => (
  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
      </marker>
    </defs>
    {lines.map(({ key, x1, y1, x2, y2, color, label, dashed }) => {
      // Calculate control points for a smooth cubic Bezier curve
      const dx = x2 - x1;
      const dy = y2 - y1;
      // Curve amount: more for vertical, less for horizontal
      const curve = Math.max(Math.abs(dx), Math.abs(dy)) * 0.3;
      const c1x = x1 + (dx === 0 ? 0 : curve * Math.sign(dx));
      const c1y = y1 + (dy === 0 ? 0 : curve * Math.sign(dy));
      const c2x = x2 - (dx === 0 ? 0 : curve * Math.sign(dx));
      const c2y = y2 - (dy === 0 ? 0 : curve * Math.sign(dy));
      const pathD = `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
      return (
        <g key={key}>
          <path
            d={pathD}
            stroke={color}
            strokeWidth="2"
            strokeDasharray={dashed ? '5,5' : 'none'}
            className="opacity-70"
            markerEnd="url(#arrowhead)"
            style={{ color: color, fill: 'none' }}
          />
          <text
            x={(x1 + x2) / 2}
            y={(y1 + y2) / 2 - 6}
            fill={color}
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
            className="paint-order-stroke"
            stroke="#111827"
            strokeWidth="3px"
            strokeLinejoin="round"
          >
            {label}
          </text>
        </g>
      );
    })}
  </svg>
);


const FamilyTree: React.FC = () => {
  const [selectedCharacterName, setSelectedCharacterName] = useState<string | null>(null);
  const [lines, setLines] = useState<LineCoord[]>([]);

  const treeContainerRef = useRef<HTMLDivElement>(null);
  const dronaRef = useRef<HTMLDivElement>(null);
  const shakuniRef = useRef<HTMLDivElement>(null);
  const kauravasRef = useRef<HTMLDivElement>(null);
  const pandavasRef = useRef<HTMLDivElement>(null);
  const karnaRef = useRef<HTMLDivElement>(null);
  const krishnaRef = useRef<HTMLDivElement>(null);
  const arjunaRef = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    const calculateLines = () => {
      const allRefs = [dronaRef, shakuniRef, kauravasRef, pandavasRef, karnaRef, krishnaRef, arjunaRef];
      if (!treeContainerRef.current || allRefs.some(ref => !ref.current)) {
          setLines([]);
          return;
      }

      const containerRect = treeContainerRef.current.getBoundingClientRect();

      const getNodePoints = (node: HTMLDivElement) => {
        const rect = node.getBoundingClientRect();
        return {
          top: { x: rect.left + rect.width / 2 - containerRect.left, y: rect.top - containerRect.top },
          bottom: { x: rect.left + rect.width / 2 - containerRect.left, y: rect.bottom - containerRect.top },
          left: { x: rect.left - containerRect.left, y: rect.top + rect.height / 2 - containerRect.top },
          right: { x: rect.right - containerRect.left, y: rect.top + rect.height / 2 - containerRect.top },
        };
      };

      const dronaPts = getNodePoints(dronaRef.current!);
      const shakuniPts = getNodePoints(shakuniRef.current!);
      const kauravasPts = getNodePoints(kauravasRef.current!);
      const pandavasPts = getNodePoints(pandavasRef.current!);
      const karnaPts = getNodePoints(karnaRef.current!);
      const krishnaPts = getNodePoints(krishnaRef.current!);
      const arjunaPts = getNodePoints(arjunaRef.current!);

      const newLines: LineCoord[] = [
        { key: 'drona-kauravas', x1: dronaPts.top.x, y1: dronaPts.top.y - 10, x2: kauravasPts.bottom.x, y2: kauravasPts.bottom.y + 10, color: '#f59e0b', label: 'Mentor', dashed: true },
        { key: 'drona-pandavas', x1: dronaPts.top.x, y1: dronaPts.top.y - 10, x2: pandavasPts.bottom.x, y2: pandavasPts.bottom.y + 10, color: '#f59e0b', label: 'Mentor', dashed: true },
        { key: 'shakuni-kauravas', x1: shakuniPts.top.x, y1: shakuniPts.top.y - 10, x2: kauravasPts.bottom.x + 20, y2: kauravasPts.bottom.y + 10, color: '#ef4444', label: 'Influence' },
        { key: 'karna-kauravas', x1: karnaPts.left.x - 10, y1: karnaPts.left.y, x2: kauravasPts.right.x + 10, y2: kauravasPts.right.y, color: '#ef4444', label: 'Ally' },
        { key: 'krishna-arjuna', x1: krishnaPts.top.x, y1: krishnaPts.top.y - 10, x2: arjunaPts.bottom.x, y2: arjunaPts.bottom.y + 10, color: '#a855f7', label: 'Divine Guide' },
      ];
      setLines(newLines);
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, []); // Run only on mount


  const handleNodeClick = (name: string) => {
    setSelectedCharacterName(name);
  };

  const handleCloseModal = () => {
    setSelectedCharacterName(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // Find character data for the modal
  const selectedCharacterData = selectedCharacterName
    ? CHARACTERS.find(c => c.name.toLowerCase() === selectedCharacterName.toLowerCase())
    : null;

  return (
    <div className="flex flex-col items-center text-xs sm:text-sm text-slate-300 font-sans relative" ref={treeContainerRef}>
      <RelationshipLines lines={lines} />
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="text-center mb-8">
          <p className="text-slate-400 max-w-2xl mx-auto">
            A visual representation of the dynasties central to the epic, showing the figures that led to the conflict and its resolution.
          </p>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-amber-400">The Kuru Dynasty</h3>

        <TreeNode name="King Kuru" description="Founder of the Dynasty" border="border-amber-400" icon={<CrownIcon />} onClick={() => handleNodeClick('King Kuru')} tooltip="The ancient founder of the Kuru lineage."/>
        <VerticalLine />
        <div className="italic text-slate-500 text-center text-xs py-1">(Many Generations Pass)</div>
        <VerticalLine />

        <TreeNode name="King Shantanu" icon={<CrownIcon />} onClick={() => handleNodeClick('King Shantanu')} tooltip="King of Hastinapura, father of Bhishma."/>
        <VerticalLine />

        {/* Shantanu's Wives and Children */}
        <div className="flex w-full max-w-lg justify-between relative items-start">
          <div className="absolute top-0 left-1/2 w-1/2 h-px bg-slate-600"></div>
          <div className="absolute top-0 right-1/2 w-1/2 h-px bg-slate-600"></div>
          <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>
          <div className="flex flex-col items-center w-1/2">
            <VerticalLine height="h-4" />
            <TreeNode name="Ganga" description="1st Wife" icon={<SparkleIcon />} onClick={() => handleNodeClick('Ganga')} tooltip="Wife of Shantanu, Mother of Bhishma"/>
            <VerticalLine />
            <TreeNode name="Bhishma" description="Vow of celibacy" icon={<SwordIcon />} onClick={() => handleNodeClick('Bhishma')} tooltip="Son of Shantanu & Ganga"/>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <VerticalLine height="h-4" />
            <TreeNode name="Satyavati" description="2nd Wife" icon={<FemaleIcon />} onClick={() => handleNodeClick('Satyavati')} tooltip="Wife of Shantanu"/>
            <VerticalLine />
            <TreeNode name="Chitrangada & Vichitravirya" description="Died childless" icon={<CrownIcon />} onClick={() => handleNodeClick('Chitrangada & Vichitravirya')} tooltip="Sons of Shantanu & Satyavati"/>
          </div>
        </div>
        
        <VerticalLine />
        <TreeNode
          name="Sage Vyasa"
          description="Son of Satyavati"
          icon={<SageIcon />}
          onClick={() => handleNodeClick('Sage Vyasa')}
          tooltip="Fathered Dhritarashtra and Pandu via Niyoga"
        />
        <div className="italic text-slate-500 text-center text-xs py-1">Father of the next generation</div>
        <VerticalLine />

        {/* Vyasa's Children (Dhritarashtra & Pandu) */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl justify-around relative">
          <div className="absolute top-0 left-1/2 w-full max-w-4xl h-px bg-slate-600 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>
          
          {/* Dhritarashtra Branch */}
          <div className="flex flex-col items-center w-full md:w-1/2 relative px-2 mb-16 md:mb-0">
              <div className="absolute top-0 left-[50%] h-4 w-px bg-slate-600"></div>
              <TreeNode name="Dhritarashtra" description="Born blind" icon={<CrownIcon />} onClick={() => handleNodeClick('Dhritarashtra')} tooltip="Son of Vyasa, father of the Kauravas"/>
              <VerticalLine />

              {/* Wives of Dhritarashtra */}
              <div className="flex w-full justify-around items-start relative">
                  <div className="absolute top-0 left-1/2 w-3/4 h-px bg-slate-600 -translate-x-1/2"></div>
                  <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>

                  {/* Gandhari Branch */}
                  <div className="flex flex-col items-center w-1/2">
                      <VerticalLine height="h-4" />
                      <TreeNode name="Gandhari" border="border-red-600/50" icon={<FemaleIcon />} onClick={() => handleNodeClick('Gandhari')} tooltip="Wife of Dhritarashtra"/>
                      <VerticalLine />
                      <div ref={kauravasRef} className="p-3 border-2 border-red-600/40 bg-red-900/25 rounded-lg text-center shadow-red-900/20 shadow-inner">
                        <h4 className="storm-gust font-bold text-red-400">Duryodhana & 99 Brothers</h4>
                        <p>The 100 Kauravas</p>
                      </div>
                  </div>

                  {/* Vaishya Servant Branch */}
                  <div className="flex flex-col items-center w-1/2">
                      <VerticalLine height="h-4" />
                      <TreeNode name="Vaishya Servant" border="border-slate-600 border-dashed" icon={<FemaleIcon />} onClick={() => handleNodeClick('Vaishya Servant')} tooltip="Mother of Yuyutsu"/>
                      <VerticalLine />
                      <TreeNode name="Yuyutsu" description="Defected to Pandavas" border="border-green-500/50" icon={<ShieldIcon />} onClick={() => handleNodeClick('Yuyutsu')} tooltip="Son of Dhritarashtra, sided with Pandavas"/>
                  </div>
              </div>
          </div>

          {/* Pandu Branch */}
          <div className="flex flex-col items-center w-full md:w-1/2 relative px-2">
              <div className="absolute top-0 left-[50%] h-4 w-px bg-slate-600"></div>
              {/* Karna connection */}
              <div className="absolute top-[-40px] right-0 md:right-[-10px] lg:right-[-20px] flex items-center">
                  <div className="absolute right-full h-px w-6 sm:w-8 border-t border-dashed border-amber-400/50"></div>
                  <TreeNode ref={karnaRef} name="Karna" description="Abandoned son of Kunti" border="border-amber-400/50" icon={<SwordIcon />} onClick={() => handleNodeClick('Karna')} tooltip="Son of Kunti & Surya, raised as a Suta"/>
              </div>

              <TreeNode name="Pandu" description="Born pale" icon={<CrownIcon />} onClick={() => handleNodeClick('Pandu')} tooltip="Son of Vyasa, father of the Pandavas"/>
              <VerticalLine />
              
              {/* Pandu's Wives */}
              <div ref={pandavasRef} className="flex w-full justify-around relative">
                  <div className="absolute top-0 left-1/2 w-3/4 h-px bg-slate-600 -translate-x-1/2"></div>
                  <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>
                  
                  {/* Kunti and her sons */}
                  <div className="flex flex-col items-center w-1/2">
                      <VerticalLine height="h-4" />
                      <TreeNode name="Kunti" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Kunti')} tooltip="Wife of Pandu, mother of Karna and 3 Pandavas"/>
                      <VerticalLine />
                      <div className="flex justify-center flex-wrap gap-2 mt-2">
                          <TreeNode name="Yudhishthira" className="storm-gust" border="border-sky-500/60" icon={<CrownIcon />} onClick={() => handleNodeClick('Yudhishthira')} tooltip="Son of Kunti & Dharma"/>
                          <TreeNode name="Bhima" className="storm-gust" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Bhima')} tooltip="Son of Kunti & Vayu"/>
                          <TreeNode ref={arjunaRef} name="Arjuna" className="storm-gust" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Arjuna')} tooltip="Son of Kunti & Indra"/>
                      </div>
                  </div>

                  {/* Madri and her sons */}
                  <div className="flex flex-col items-center w-1/2">
                      <VerticalLine height="h-4" />
                      <TreeNode name="Madri" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Madri')} tooltip="Wife of Pandu, mother of the twins"/>
                      <VerticalLine />
                      <div className="flex justify-center flex-wrap gap-2 mt-2">
                          <TreeNode name="Nakula" className="storm-gust" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Nakula')} tooltip="Son of Madri & the Ashvins"/>
                          <TreeNode name="Sahadeva" className="storm-gust" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Sahadeva')} tooltip="Son of Madri & the Ashvins"/>
                      </div>
                  </div>
              </div>

              <VerticalLine />
              
              {/* Pandava Progeny Section */}
              <div className="w-full p-4 border-t-2 border-sky-700 mt-4 flex flex-col items-center bg-sky-950/20 rounded-b-lg">
                  <h4 className="font-bold text-sky-400 text-lg mb-6">Pandava Progeny</h4>
                  <div className="flex flex-wrap justify-center gap-8 w-full">

                      {/* Yudhishthira's Family */}
                      <div className="flex flex-col items-center space-y-2 text-center p-4 bg-gray-900/50 rounded-lg border border-sky-800">
                          <TreeNode name="Yudhishthira" border="border-sky-500/60" icon={<CrownIcon />} onClick={() => handleNodeClick('Yudhishthira')} tooltip="The eldest Pandava"/>
                          <VerticalLine height="h-4"/>
                          <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Draupadi" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Draupadi')} tooltip="Shared wife of the Pandavas"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Prativindhya" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Prativindhya')} tooltip="Son of Yudhishthira & Draupadi"/>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Devika" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Devika')} tooltip="Wife of Yudhishthira"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Yaudheya" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Yaudheya')} tooltip="Son of Yudhishthira & Devika"/>
                              </div>
                          </div>
                      </div>

                      {/* Bhima's Family */}
                      <div className="flex flex-col items-center space-y-2 text-center p-4 bg-gray-900/50 rounded-lg border border-sky-800">
                          <TreeNode name="Bhima" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Bhima')} tooltip="The second Pandava"/>
                          <VerticalLine height="h-4"/>
                          <div className="flex gap-4 flex-wrap justify-center">
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Draupadi" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Draupadi')} tooltip="Shared wife of the Pandavas"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Sutasoma" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Sutasoma')} tooltip="Son of Bhima & Draupadi"/>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Hidimbi" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Hidimbi')} tooltip="Wife of Bhima"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Ghatotkacha" description="Son" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Ghatotkacha')} tooltip="Son of Bhima & Hidimbi"/>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Valandhara" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Valandhara')} tooltip="Wife of Bhima"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Sarvaga" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Sarvaga')} tooltip="Son of Bhima & Valandhara"/>
                              </div>
                          </div>
                      </div>

                      {/* Arjuna's Family */}
                      <div className="flex flex-col items-center space-y-2 text-center p-4 bg-gray-900/50 rounded-lg border border-sky-800">
                          <TreeNode name="Arjuna" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Arjuna')} tooltip="The third Pandava"/>
                          <VerticalLine height="h-4"/>
                          <div className="flex gap-4 flex-wrap justify-center">
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Draupadi" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Draupadi')} tooltip="Shared wife of the Pandavas"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Shrutakarma" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Shrutakarma')} tooltip="Son of Arjuna & Draupadi"/>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Subhadra" description="Yadava Princess" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Subhadra')} tooltip="Wife of Arjuna, Sister of Krishna"/>
                                  <VerticalLine height="h-4"/>
                                  <div className="flex flex-col items-center"> {/* Lineage of Abhimanyu */}
                                      <div className="flex items-center"> {/* Marriage of Abhimanyu & Uttara */}
                                          <TreeNode name="Abhimanyu" description="Son" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Abhimanyu')} tooltip="Son of Arjuna & Subhadra"/>
                                          <MarriageConnector />
                                          <TreeNode name="Uttara" description="Wife" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Uttara')} tooltip="Wife of Abhimanyu"/>
                                      </div>
                                      <VerticalLine height="h-4"/>
                                      <TreeNode name="Parikshit" description="Heir to the throne" border="border-amber-400" icon={<CrownIcon />} onClick={() => handleNodeClick('Parikshit')} tooltip="Son of Abhimanyu & Uttara, sole survivor"/>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Uloopi" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Uloopi')} tooltip="Wife of Arjuna"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Iravan" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Iravan')} tooltip="Son of Arjuna & Uloopi"/>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Chitrangada" description="Wife" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Chitrangada (Wife of Arjuna)')} tooltip="Wife of Arjuna"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Babruvahana" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Babruvahana')} tooltip="Son of Arjuna & Chitrangada"/>
                              </div>
                          </div>
                      </div>

                      {/* Nakula's Family */}
                      <div className="flex flex-col items-center space-y-2 text-center p-4 bg-gray-900/50 rounded-lg border border-sky-800">
                          <TreeNode name="Nakula" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Nakula')} tooltip="The fourth Pandava"/>
                          <VerticalLine height="h-4"/>
                          <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Draupadi" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Draupadi')} tooltip="Shared wife of the Pandavas"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Shatanika" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Shatanika')} tooltip="Son of Nakula & Draupadi"/>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Karenumati" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Karenumati')} tooltip="Wife of Nakula"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Niramitra" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Niramitra')} tooltip="Son of Nakula & Karenumati"/>
                              </div>
                          </div>
                      </div>

                      {/* Sahadeva's Family */}
                      <div className="flex flex-col items-center space-y-2 text-center p-4 bg-gray-900/50 rounded-lg border border-sky-800">
                          <TreeNode name="Sahadeva" border="border-sky-500/60" icon={<SwordIcon />} onClick={() => handleNodeClick('Sahadeva')} tooltip="The fifth Pandava"/>
                          <VerticalLine height="h-4"/>
                          <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Draupadi" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Draupadi')} tooltip="Shared wife of the Pandavas"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Shrutasena" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Shrutasena')} tooltip="Son of Sahadeva & Draupadi"/>
                              </div>
                              <div className="flex flex-col items-center">
                                  <TreeNode name="Vijaya" border="border-sky-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Vijaya')} tooltip="Wife of Sahadeva"/>
                                  <VerticalLine height="h-4"/>
                                  <TreeNode name="Suhotra" description="Son" border="border-sky-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Suhotra')} tooltip="Son of Sahadeva & Vijaya"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        {/* Yadava Dynasty Section */}
        <div className="w-full border-t-2 border-slate-700 my-16"></div>
        
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-amber-400">The Yadava Dynasty</h3>
        <div className="text-center mb-8">
            <p className="text-slate-400 max-w-2xl mx-auto">
              The ancestral line of Krishna, part of the powerful Yadava dynasty. This branch, specifically known as the Vrishni clan, was central to the epic, with Krishna serving as the divine guide and master strategist for the Pandavas.
            </p>
        </div>

        <div className="flex flex-col items-center">
            <TreeNode name="Vasudeva" border="border-violet-500/60" icon={<CrownIcon />} onClick={() => handleNodeClick('Vasudeva')} tooltip="Father of Krishna, Balarama, and Subhadra" />
            <VerticalLine />
            
            <div className="flex w-full max-w-2xl justify-around relative items-start">
                <div className="absolute top-0 left-1/2 w-full max-w-lg h-px bg-slate-600 -translate-x-1/2"></div>
                <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>

                {/* Rohini Branch */}
                <div className="flex flex-col items-center w-1/2">
                    <VerticalLine height="h-4" />
                    <TreeNode name="Rohini" description="Wife" border="border-violet-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Rohini')} tooltip="Wife of Vasudeva" />
                    <VerticalLine />
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center flex-wrap justify-center">
                            <TreeNode name="Balarama" border="border-violet-500/60" icon={<SparkleIcon />} onClick={() => handleNodeClick('Balarama')} tooltip="Son of Vasudeva & Rohini"/>
                            <MarriageConnector />
                            <TreeNode name="Revati" border="border-violet-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Revati')} tooltip="Wife of Balarama"/>
                        </div>
                        <TreeNode name="Subhadra" description="Married Arjuna" border="border-violet-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Subhadra')} tooltip="Daughter of Vasudeva & Rohini, Wife of Arjuna"/>
                    </div>
                </div>

                {/* Devaki Branch */}
                <div className="flex flex-col items-center w-1/2">
                    <VerticalLine height="h-4" />
                    <TreeNode name="Devaki" description="Wife" border="border-violet-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Devaki')} tooltip="Wife of Vasudeva, Mother of Krishna"/>
                    <VerticalLine />
                    <div className="flex flex-col items-center gap-2">
                        <TreeNode ref={krishnaRef} name="Krishna" description="8th Avatar of Vishnu" border="border-violet-500/60" icon={<SparkleIcon />} onClick={() => handleNodeClick('Krishna')} tooltip="Son of Vasudeva & Devaki"/>
                        <VerticalLine height="h-4" />
                        <div className="flex flex-wrap justify-center gap-2">
                           <TreeNode name="Rukmini" description="Chief Consort" border="border-violet-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Rukmini')} tooltip="Wife of Krishna"/>
                           <TreeNode name="Satyabhama" description="Consort" border="border-violet-500/60" icon={<FemaleIcon />} onClick={() => handleNodeClick('Satyabhama')} tooltip="Wife of Krishna"/>
                        </div>
                        <VerticalLine height="h-4" />
                        <TreeNode name="Pradyumna" description="Son" border="border-violet-500/60" icon={<PersonIcon />} onClick={() => handleNodeClick('Pradyumna')} tooltip="Son of Krishna & Rukmini"/>
                    </div>
                </div>
            </div>
        </div>

        {/* Key Influencers Section */}
        <div className="w-full border-t-2 border-slate-700 my-16"></div>
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-amber-400">Key Influencers & Allies</h3>
        <div className="text-center mb-8">
            <p className="text-slate-400 max-w-2xl mx-auto">
                Certain figures, while not in the direct line of Kuru succession, wielded immense influence that shaped the fate of the dynasties.
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
            <TreeNode ref={dronaRef} name="Drona" description="Royal Guru" border="border-amber-500/60" icon={<SageIcon />} onClick={() => handleNodeClick('Drona')} tooltip="Teacher to both Pandavas & Kauravas"/>
            <TreeNode ref={shakuniRef} name="Shakuni" description="Master Manipulator" border="border-red-500/60" icon={<SageIcon />} onClick={() => handleNodeClick('Shakuni')} tooltip="Maternal uncle of the Kauravas"/>
        </div>
      </div>


      {/* Modal for Character Details */}
      {selectedCharacterName && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="character-modal-title"
        >
          <div
            className="bg-gray-900 rounded-xl p-6 sm:p-8 max-w-lg w-full border border-amber-500/20 shadow-2xl shadow-black/50 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="character-modal-title" className="text-3xl font-bold text-amber-400 mb-4">{selectedCharacterName}</h3>
            <>
              <p className="text-amber-300 text-lg mb-4 italic">{selectedCharacterData?.role || 'No role information available.'}</p>
              <p className="text-slate-300 leading-relaxed">{selectedCharacterData?.description || 'No description available for this character.'}</p>
            </>
            <button
              onClick={handleCloseModal}
              className="mt-6 px-5 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Close character details"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyTree;