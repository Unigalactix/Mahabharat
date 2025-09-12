import React from 'react';

const iconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 text-slate-400";
const divineIconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 text-amber-300";

export const CrownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M2 12l2 8h16l2-8-5-6-5 4-5-4z"></path>
    </svg>
);

export const SwordIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M11 2v10.6l-2.6-2.6-1.4 1.4 5 5 5-5-1.4-1.4L13 12.6V2h-2zM5 16v6h14v-6H5z"/>
    </svg>
);

export const SparkleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={divineIconClass}>
        <path d="M12 2L9.5 9.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"></path>
    </svg>
);

export const FemaleIcon: React.FC = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={iconClass}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
    </svg>
);

export const SageIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={divineIconClass}>
        <path d="M19.88,14.68,16,11.33V5a1,1,0,0,0-2,0v4.21l-1.46-1.22a1,1,0,0,0-1.12.08,9,9,0,1,0,8.44,11.59,1,1,0,0,0,.08-1.12,1,1,0,0,0-.56-.56ZM4,12a7,7,0,1,1,12,6.07V12a1,1,0,0,0-1-1H9.83l1.59-1.59a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0L6.29,11.71a1,1,0,0,0,0,1.41L10,16.83V18A7.08,7.08,0,0,1,4,12Z"/>
    </svg>
);

export const ShieldIcon: React.FC = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M12,2A10,10,0,0,0,4.65,18.76a1,1,0,0,0,1.41-1.41A8,8,0,1,1,12,20a7.92,7.92,0,0,1-4.9-1.7,1,1,0,0,0-1.41,1.41A10,10,0,1,0,12,2Z"/>
     </svg>
);

export const PersonIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={iconClass}>
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);