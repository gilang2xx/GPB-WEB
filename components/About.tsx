import React from 'react';
import { Partners } from './Partners';

export const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 pt-24">
       
       {/* MAIN PHILOSOPHY SECTION */}
       <div className="relative py-24 overflow-hidden border-b border-gray-200 dark:border-white/5">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-gpb-blue/5 to-transparent transform skew-x-12 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               
               {/* Image Section (Asymmetrical) */}
               <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gpb-orange transform translate-x-4 translate-y-4 -skew-x-6"></div>
                  <div className="relative h-[500px] md:h-[600px] w-full transform -skew-x-6 overflow-hidden border-2 border-white/10 bg-gray-900">
                     <img 
                       src="/images/about-boar-spirit.jpg" 
                       alt="The Boar Spirit"
                       className="w-full h-full object-cover transform skew-x-6 scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transform skew-x-6"></div>
                     
                     {/* Floating Overlay Text on Image */}
                     <div className="absolute bottom-10 left-10 transform skew-x-6">
                       <h3 className="text-white font-teko text-5xl uppercase leading-none">The Boar<br/><span className="text-gpb-orange">Spirit</span></h3>
                     </div>
                  </div>
               </div>

               {/* Text Content */}
               <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex items-center gap-4 relative">
                     <span className="text-gpb-blue font-teko text-9xl leading-none opacity-10 absolute -z-10 -ml-10 select-none dark:opacity-20">01</span>
                     <h2 className="text-6xl md:text-8xl font-teko font-bold text-black dark:text-white uppercase leading-[0.85]">
                       Relentless <br/>
                       <span className="text-gpb-blue">Energy</span>
                     </h2>
                  </div>
                  
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-satoshi leading-relaxed border-l-4 border-gpb-orange pl-6 py-2">
                    The wild boar symbolizes raw power and unyielding determination. In badminton, this translates to explosive footwork, aggressive net play, and the mental fortitude to never drop a point.
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-4">
                     <div>
                       <h4 className="text-black dark:text-white font-teko text-3xl uppercase mb-2">Instinct</h4>
                       <p className="text-gray-600 dark:text-gray-400 font-satoshi text-sm">React before you think. Train your reflexes to be faster than thought itself.</p>
                     </div>
                     <div>
                       <h4 className="text-black dark:text-white font-teko text-3xl uppercase mb-2">Aggression</h4>
                       <p className="text-gray-600 dark:text-gray-400 font-satoshi text-sm">Control the pace. Dominate the front court. Attack at every opportunity.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
       </div>

       {/* BRAND COLLABORATION SECTION */}
       <Partners />

    </div>
  );
};