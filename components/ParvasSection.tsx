import { PARVAS } from '../parvas';

const ParvasSection: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {PARVAS.map((parva, idx) => (
      <div key={parva.name + idx} className="bg-gray-900 rounded-xl p-5 border border-amber-500/20 shadow-lg">
        <h3 className="text-xl font-bold text-amber-300 mb-2">{parva.name}</h3>
        <p className="text-slate-300 leading-relaxed text-base mb-2">{parva.description}</p>
        <ul className="list-disc pl-5 text-amber-200 text-sm">
          {parva.keyMoments && parva.keyMoments.map((moment, i) => (
            <li key={i}>{moment}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default ParvasSection;
