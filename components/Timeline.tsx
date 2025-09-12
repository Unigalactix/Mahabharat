
import React, { useState } from 'react';

const eventIcons = [
  // Shield Icon for Bhishma
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-slate-900">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>,
  // Target Icon for Abhimanyu/Chakravyuha
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-slate-900">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // Broken Wheel Icon for Karna
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-slate-900">
      <path d="M3.55,16.55A9,9,0,1,0,7.45,3.55" />
      <line x1="12" y1="12" x2="19.07" y2="4.93" />
      <line x1="12" y1="12" x2="4.93" y2="4.93" />
      <line x1="12" y1="12" x2="12" y2="3" />
      <circle cx="12" cy="12" r="2" />
  </svg>,
  // Crossed Swords Icon for Final Duels
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-slate-900">
      <path d="M15.25 3L3.75 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 17.5L16.5 14.5L20.5 18.5L17.5 21.5L13.5 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.75 21L20.25 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 6.5L9.5 9.5L5.5 13.5L2.5 10.5L6.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Moon Icon for Night Raid
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-slate-900">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
];

const events = [
  {
    title: "Days 1-10: Bhishma's Command",
    description: "The initial days see intense fighting. On Day 10, the Pandavas use Shikhandi as a shield, knowing Bhishma won't attack a former woman. Arjuna's arrows fell the grandsire, who rests on a 'bed of arrows' to await his chosen moment of death.",
    icon: eventIcons[0],
  },
  {
    title: "Days 11-15: Drona's Command",
    description: "Day 13 marks the tragic death of Abhimanyu, trapped alone in the Chakravyuha formation. On Day 15, Drona is defeated through a strategic lie about his son, Ashwatthama. Heartbroken, he lays down his arms and is beheaded by Dhrishtadyumna.",
    icon: eventIcons[1],
  },
  {
    title: "Days 16-17: Karna's Command",
    description: "Karna's long-awaited duel with Arjuna occurs on Day 17. His fate is sealed by a combination of curses, and when his chariot wheel becomes stuck in the mud, Krishna urges Arjuna to strike the vulnerable warrior, a final act underscoring the war's eroded ethics.",
    icon: eventIcons[2],
  },
  {
    title: "Day 18: Shalya's Command & Final Duels",
    description: "The war concludes with the final duel between Bhima and Duryodhana. Fulfilling his long-held vow, Bhima strikes Duryodhana's thigh, an act that violates the rules of mace combat but ends the war.",
    icon: eventIcons[3],
  },
  {
    title: "The Aftermath: A Night of Vengeance",
    description: "The war is over, but the bloodshed is not. Enraged by his father's death and the Kauravas' defeat, Ashwatthama attacks the Pandava camp at night, slaughtering the sleeping warriors, including Dhrishtadyumna and all five of the Upapandavas.",
    icon: eventIcons[4],
  }
];

const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setActiveIndex((prev) => Math.min(events.length - 1, prev + 1));

  return (
    <div className="flex flex-col items-center">
      {/* Navigation Controls */}
      <div className="flex items-center justify-between w-full max-w-sm mb-12">
        <button 
          onClick={handlePrev} 
          disabled={activeIndex === 0} 
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
          aria-label="Previous Day"
        >
          Previous
        </button>
        <span className="font-bold text-amber-300 text-lg tabular-nums">
          {`Phase ${activeIndex + 1} / ${events.length}`}
        </span>
        <button 
          onClick={handleNext} 
          disabled={activeIndex === events.length - 1} 
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
          aria-label="Next Day"
        >
          Next
        </button>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-slate-700 md:-translate-x-1/2" aria-hidden="true"></div>

        {events.map((event, index) => {
          const isActive = index === activeIndex;
          return (
            <div 
              key={index} 
              className={`relative mb-12 flex items-start transition-opacity duration-300 cursor-pointer ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
              onClick={() => setActiveIndex(index)}
              aria-current={isActive ? 'step' : undefined}
            >
              {/* Mobile Icon */}
              <div className="md:hidden absolute left-6 top-0 z-10 flex items-center justify-center -translate-x-1/2">
                 <div className={`shadow-xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-amber-300 scale-110' : 'bg-amber-400'}`}>
                  {event.icon}
                </div>
              </div>
              
              {/* Desktop Left Side Content */}
              <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? '' : 'text-right'}`}>
                {index % 2 !== 0 && (
                  <div className={`bg-gray-900 p-6 rounded-lg shadow-xl border transition-colors duration-300 ${isActive ? 'border-amber-400' : 'border-slate-700'}`}>
                    <h3 className="mb-3 font-bold text-amber-400 text-xl">{event.title}</h3>
                    <p className="text-sm leading-snug tracking-wide text-slate-300">{event.description}</p>
                  </div>
                )}
              </div>

              {/* Desktop Spacer & Icon */}
              <div className="hidden md:block md:w-2/12">
                <div className={`z-10 flex items-center justify-center shadow-xl w-12 h-12 rounded-full mx-auto transition-all duration-300 ${isActive ? 'bg-amber-300 scale-110' : 'bg-amber-400'}`}>
                  {event.icon}
                </div>
              </div>
              
              {/* Right side for Desktop (even indices) and all content for Mobile */}
              <div className="w-full md:w-5/12 ml-12 md:ml-0">
                <div className={`${index % 2 !== 0 ? 'md:hidden' : 'md:block'} bg-gray-900 p-6 rounded-lg shadow-xl border transition-colors duration-300 ${isActive ? 'border-amber-400' : 'border-slate-700'}`}>
                  <h3 className="mb-3 font-bold text-amber-400 text-xl">{event.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-slate-300">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;