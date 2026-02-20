import React from 'react';
import { SectionHeader } from './UI/SectionHeader';
import { Program } from '../types';

const programs: Program[] = [
  {
    id: '1',
    title: 'PRIVATE SESSION',
    level: 'SNIPER',
    tagline: 'Undivided Focus. Maximum Growth.',
    detail: '1 ON 1  |  1 ON 3',
    description: 'Dirancang untuk presisi mutlak. Kurikulum yang dipersonalisasi penuh untuk memperbaiki setiap detail gerakan Anda.',
    image: '/images/programs-private.jpg'
  },
  {
    id: '2',
    title: 'SEMI-PRIVATE',
    level: 'WOLFPACK',
    tagline: 'Competitive Energy. Shared Progress.',
    detail: '4 - 8 PLAYERS',
    description: 'Rasakan atmosfer kompetitif yang sehat dalam grup kecil. Kombinasi sempurna antara drills intensif dan match simulasi.',
    image: '/images/programs-semi-private.jpg'
  }
];

const getIcon = (level: string) => {
    switch(level) {
        case 'SNIPER': return 'fa-crosshairs';
        case 'WOLFPACK': return 'fa-users';
        default: return 'fa-shuttlecock';
    }
}

interface ProgramsProps {
  onNavigate?: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onNavigate }) => {

  const handleBooking = (programTitle: string) => {
    const phoneNumber = '6281806333337';
    const message = `Hi GPB Team, I am interested in securing a slot for the ${programTitle} program.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-24 md:py-32 bg-white dark:bg-black relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Program - Renamed & Subtitle Removed */}
        <SectionHeader title="PROGRAMS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="group relative h-[600px] w-full transform transition-all duration-500 hover:-translate-y-4"
            >
              {/* Card Container Skewed */}
              <div className="absolute inset-0 transform -skew-x-3 overflow-hidden bg-gray-100 dark:bg-[#0a0f16] border border-gray-300 dark:border-white/10 group-hover:border-gpb-blue group-hover:shadow-[0_0_30px_rgba(0,82,204,0.3)] transition-all duration-500">
                
                {/* Background Texture/Image (Darkened) */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"></div>
                </div>
                
                {/* Large Icon in Center */}
                <div className="absolute top-20 right-10 transform skew-x-3">
                    <i className={`fas ${getIcon(program.level)} text-8xl text-black/5 dark:text-white/5 group-hover:text-gpb-blue/20 transition-colors duration-500`}></i>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform skew-x-3 flex flex-col justify-end h-full">
                  
                  {/* ID Badge Only */}
                  <div className="flex items-center gap-4 mb-2">
                     <span className="text-gpb-blue font-teko text-6xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl md:text-6xl font-teko font-bold uppercase text-black dark:text-white mb-2 leading-none group-hover:text-gpb-blue transition-colors">
                    {program.title}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-black dark:text-white font-satoshi font-bold text-lg italic mb-6 opacity-90">
                    "{program.tagline}"
                  </p>

                  {/* Detail Badge */}
                   <div className="mb-6">
                    <span className="text-gpb-blue font-teko text-2xl uppercase tracking-widest border-b border-gpb-blue/50 pb-1">
                      {program.detail}
                    </span>
                  </div>

                  {/* Description - Bold & High Contrast */}
                  <p className="text-black dark:text-white font-satoshi text-lg font-bold leading-relaxed mb-8 border-l-4 border-gpb-blue pl-4 bg-white/60 dark:bg-black/60 p-2 backdrop-blur-sm rounded-r-sm">
                    {program.description}
                  </p>

                  <button 
                    onClick={() => handleBooking(program.title)}
                    className="w-full py-5 border border-black/20 dark:border-white/20 text-black dark:text-white font-teko text-2xl uppercase tracking-widest hover:bg-gpb-blue hover:border-gpb-blue hover:text-white transition-all duration-300 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                  >
                      Secure Your Slot
                  </button>
                </div>
              </div>

              {/* Glowing Corner Accents */}
              <div className="absolute -top-1 -right-1 w-24 h-24 border-t-4 border-r-4 border-gpb-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-3xl"></div>
              <div className="absolute -bottom-1 -left-1 w-24 h-24 border-b-4 border-l-4 border-gpb-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl"></div>
            </div>
          ))}
        </div>

        {/* NEW SECTION: TRAINING GROUNDS */}
        <div className="mt-32 max-w-6xl mx-auto">
           <SectionHeader title="TRAINING GROUNDS" subtitle="OPERATIONAL ZONES" align="center" />
           
           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              
              {/* Decorative Center Line (Desktop Only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-white/10 -translate-x-1/2"></div>
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-black border border-gray-300 dark:border-white/20 items-center justify-center rounded-full z-20">
                 <i className="fas fa-map-marker-alt text-gpb-orange text-xl"></i>
              </div>

              {/* Location 1: Depok */}
              <div className="group relative h-72 md:h-80 w-full overflow-hidden bg-gray-100 dark:bg-[#0a0f16] border-l-4 border-gpb-orange transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-900">
                 {/* Map Pattern Overlay */}
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 
                 <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="w-2 h-2 bg-gpb-orange rounded-full animate-pulse"></span>
                       <span className="font-teko uppercase tracking-widest text-gpb-orange font-bold">PRIMARY BASE CAMP</span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-teko font-bold uppercase text-black dark:text-white leading-none mb-2">
                       DEPOK
                    </h3>
                    <p className="font-satoshi text-lg text-gray-600 dark:text-gray-400 max-w-sm">
                       The Central Headquarters. Where the doctrine is forged. Full-scale academy facilities and the heart of our operations.
                    </p>
                    
                    {/* Hover Reveal Button */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                       <button 
                         onClick={onNavigate} 
                         className="text-gpb-orange font-teko text-xl uppercase tracking-wider underline cursor-pointer hover:text-white transition-colors"
                       >
                         View HQ Coordinates
                       </button>
                    </div>
                 </div>
                 
                 {/* Big Background Text */}
                 <div className="absolute right-0 bottom-0 text-9xl font-teko font-bold text-gray-200 dark:text-white/5 leading-none -mb-8 -mr-8 select-none pointer-events-none">
                    HQ
                 </div>
              </div>

              {/* Location 2: Jakarta Selatan */}
              <div className="group relative h-72 md:h-80 w-full overflow-hidden bg-gray-100 dark:bg-[#0a0f16] border-r-4 border-gpb-blue text-right transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-900">
                 {/* Map Pattern Overlay */}
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                 <div className="relative z-10 h-full flex flex-col justify-center items-end p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="font-teko uppercase tracking-widest text-gpb-blue font-bold">EXPANSION ZONE</span>
                       <span className="w-2 h-2 bg-gpb-blue rounded-full animate-pulse"></span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-teko font-bold uppercase text-black dark:text-white leading-none mb-2">
                       SOUTH JAKARTA
                    </h3>
                    <p className="font-satoshi text-lg text-gray-600 dark:text-gray-400 max-w-sm">
                       Strategic City Coverage. Bringing elite standards closer to the capital. Specialized sparring and private deployment.
                    </p>

                    {/* Hover Reveal Button */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                       <button 
                         onClick={onNavigate} 
                         className="text-gpb-blue font-teko text-xl uppercase tracking-wider underline cursor-pointer hover:text-white transition-colors"
                       >
                         View Sector Map
                       </button>
                    </div>
                 </div>

                 {/* Big Background Text */}
                 <div className="absolute left-0 bottom-0 text-9xl font-teko font-bold text-gray-200 dark:text-white/5 leading-none -mb-8 -ml-8 select-none pointer-events-none">
                    EXP
                 </div>
              </div>

           </div>
           
           <div className="mt-8 text-center">
              <p className="font-satoshi text-sm md:text-base text-gray-500 uppercase tracking-widest">
                 *Exclusive training sessions are strictly limited to these territories to ensure quality control.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};