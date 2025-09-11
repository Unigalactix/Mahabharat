
import React from 'react';

// Helper component for a character node in the tree
const TreeNode: React.FC<{ name: string; description?: string; className?: string; border?: string }> = ({ name, description, className = '', border = 'border-slate-700' }) => (
  <div className={`p-2 bg-slate-800 border ${border} rounded-lg text-center shadow-lg min-w-[120px] ${className}`}>
    <p className="font-bold text-amber-300 text-sm sm:text-base">{name}</p>
    {description && <p className="text-xs text-slate-400">{description}</p>}
  </div>
);

// Helper component for relationship lines
const Connector: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center">
    {children}
  </div>
);

const VerticalLine: React.FC<{ height?: string }> = ({ height = 'h-8' }) => (
    <div className={`w-px bg-slate-600 ${height}`}></div>
);

const HorizontalLine: React.FC<{ length?: string }> = ({ length = 'flex-grow' }) => (
    <div className={`h-px bg-slate-600 ${length}`}></div>
);

const FamilyTree: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-xs sm:text-sm text-slate-300 font-sans">
      <div className="text-center mb-8">
        <p className="text-slate-400 max-w-2xl mx-auto">
          A visual representation of the Kuru dynasty's lineage, showing the central figures and the branches that led to the epic conflict between the Pandavas and Kauravas.
        </p>
      </div>

      <TreeNode name="King Kuru" description="Founder of the Dynasty" />
      <VerticalLine />
      <div className="italic text-slate-500 text-center text-xs py-1">(Many Generations Pass)</div>
      <VerticalLine />

      <TreeNode name="King Shantanu" />
      <VerticalLine />

      {/* Shantanu's Wives and Children */}
      <div className="flex w-full max-w-lg justify-between relative items-start">
        <div className="absolute top-0 left-1/2 w-1/2 h-px bg-slate-600"></div>
        <div className="absolute top-0 right-1/2 w-1/2 h-px bg-slate-600"></div>
        <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>
        <div className="flex flex-col items-center w-1/2">
          <VerticalLine height="h-4" />
          <TreeNode name="Ganga" description="1st Wife" />
          <VerticalLine />
          <TreeNode name="Bhishma" description="Vow of celibacy" />
        </div>
        <div className="flex flex-col items-center w-1/2">
          <VerticalLine height="h-4" />
          <TreeNode name="Satyavati" description="2nd Wife" />
          <VerticalLine />
          <TreeNode name="Chitrangada & Vichitravirya" description="Died childless" />
        </div>
      </div>
      
      <VerticalLine />
      <div className="italic text-slate-400 text-center p-2 border border-dashed border-slate-600 rounded-lg max-w-md">
        Sage Vyasa (Satyavati's son) fathers children with Vichitravirya's wives
      </div>
      <VerticalLine />

      {/* Vyasa's Children (Dhritarashtra & Pandu) */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl justify-around relative">
        <div className="absolute top-0 left-1/2 w-3/4 h-px bg-slate-600 -translate-x-1/2 hidden md:block"></div>
        <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>
        
        {/* Dhritarashtra Branch */}
        <div className="flex flex-col items-center w-full md:w-1/2 relative px-2 mb-8 md:mb-0">
           <div className="absolute top-0 left-[50%] h-4 w-px bg-slate-600"></div>
           <TreeNode name="Dhritarashtra" description="Born blind" />
           <VerticalLine />
           <div className="flex items-center space-x-1 sm:space-x-2">
             <TreeNode name="Gandhari" />
             <span className='text-slate-500'>&</span>
             <TreeNode name="Vaishya Servant" border="border-slate-600 border-dashed" />
           </div>
           <VerticalLine />
           <div className="flex w-full justify-center items-start relative">
             <div className="absolute top-0 left-1/2 w-3/4 h-px bg-slate-600 -translate-x-1/2"></div>
             <div className="absolute top-0 left-1/2 h-4 w-px bg-slate-600 -translate-x-1/2"></div>
             {/* Kauravas */}
             <div className="flex flex-col items-center w-1/2 relative">
                <div className="absolute top-0 left-[50%] h-4 w-px bg-slate-600"></div>
                <div className="p-3 border-2 border-red-500/30 bg-red-900/20 rounded-lg text-center shadow-red-900/20 shadow-inner">
                  <h4 className="font-bold text-red-400">The Kauravas</h4>
                  <p>100 sons (led by Duryodhana)</p>
                </div>
             </div>
             {/* Yuyutsu */}
             <div className="flex flex-col items-center w-1/2 relative">
                <div className="absolute top-0 left-[50%] h-4 w-px bg-slate-600"></div>
                <TreeNode name="Yuyutsu" description="Defected to Pandavas" border="border-green-500/50" />
             </div>
           </div>
        </div>

        {/* Pandu Branch */}
        <div className="flex flex-col items-center w-full md:w-1/2 relative px-2">
            <div className="absolute top-0 left-[50%] h-4 w-px bg-slate-600"></div>
            {/* Karna connection */}
            <div className="absolute top-[-40px] right-0 md:right-[-10px] lg:right-[-20px] flex items-center">
                <div className="absolute right-full h-px w-6 sm:w-8 border-t border-dashed border-amber-400/50"></div>
                <TreeNode name="Karna" description="Abandoned son" border="border-amber-400/50" />
            </div>

            <TreeNode name="Pandu" description="Born pale" />
            <VerticalLine />
            <div className="flex items-center space-x-1 sm:space-x-2">
                <TreeNode name="Kunti" />
                <span className="text-slate-500">&</span>
                <TreeNode name="Madri" />
            </div>
            <VerticalLine />
            <div className="p-3 border-2 border-sky-500/30 bg-sky-900/20 rounded-lg text-center shadow-sky-900/20 shadow-inner w-full max-w-xs">
                <h4 className="font-bold text-sky-400">The Pandavas</h4>
                <p>5 sons by divine fathers</p>
                <div className="mt-1 text-xs">
                    (Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva)
                </div>
            </div>
            <VerticalLine />
            {/* Next Generation */}
             <div className="w-full h-px bg-slate-600"></div>
             <div className="flex w-full justify-around flex-wrap gap-y-4 relative">
                <div className="absolute top-0 left-1/3 w-px h-4 bg-slate-600 hidden sm:block"></div>
                <div className="absolute top-0 left-2/3 w-px h-4 bg-slate-600 hidden sm:block"></div>
                <div className="absolute top-0 left-1/2 w-px h-4 bg-slate-600 hidden sm:block"></div>
                <div className="flex flex-col items-center pt-4">
                  <TreeNode name="Ghatotkacha" description="Son of Bhima" />
                </div>
                <div className="flex flex-col items-center pt-4">
                  <TreeNode name="Abhimanyu" description="Son of Arjuna" />
                </div>
                <div className="flex flex-col items-center pt-4">
                  <TreeNode name="The Upapandavas" description="Sons of Draupadi" />
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;