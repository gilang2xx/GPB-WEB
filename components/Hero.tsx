import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const handleJoin = () => {
    const phoneNumber = '6281806333337';
    const message = 'Hi GPB Team, I am interested in joining Global Private Badminton.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col md:flex-row bg-white dark:bg-black pt-20 transition-colors duration-300">
      
      {/* Left Column: Typography */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-0 z-10 bg-white dark:bg-black relative transition-colors duration-300">
        <div className="flex flex-col">
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] font-teko font-bold uppercase tracking-tighter text-black dark:text-white transition-colors duration-300">
             <span className="block hover:text-gpb-blue transition-colors duration-300 cursor-default">WELCOME TO</span>
             <span className="block hover:text-gpb-blue transition-colors duration-300 cursor-default">GLOBAL PRIVATE</span>
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-500 hover:to-gpb-blue transition-all duration-500">BADMINTON.</span>
          </h1>
        </div>
        
        <div className="mt-12 flex flex-col items-start gap-6">
          <p className="text-gray-600 dark:text-gray-400 font-satoshi text-lg max-w-lg border-l-4 border-gpb-blue pl-4 transition-colors duration-300">
            More than a club, we are an elite sanctuary. For half a decade, GPB has defined the standard for premium badminton coaching and high-society community. We don't just play; we elevate.
          </p>
          
          {/* CTA: Orange for Action */}
          <button 
            onClick={handleJoin}
            className="group relative px-10 py-5 bg-gpb-orange text-black font-teko font-bold text-3xl uppercase tracking-wider overflow-hidden rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 sharp-shadow"
          >
            <span className="relative z-10 flex items-center gap-3">
              JOIN NOW <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>

      {/* Right Column: Visual - Team Image */}
      <div className="w-full md:w-1/2 relative bg-gray-100 dark:bg-neutral-900 min-h-[50vh] md:min-h-auto overflow-hidden group">
        {/* Main Hero Image - Explicit img tag to ensure visibility */}
        <img 
            src="/images/hero.jpg"
            alt="GPB Athlete" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        
        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>
        
        {/* Cutout / High Contrast Overlay Effect */}
        <div className="absolute bottom-0 right-0 p-8 md:p-16 z-10">
          {/* Decorative Line: Blue for Structure */}
          <div className="border-t-4 border-gpb-blue w-32 mb-4 ml-auto"></div>
          <h2 className="text-white font-teko text-6xl md:text-8xl uppercase leading-none text-right shadow-black drop-shadow-xl">
            EST.<br/>2021
          </h2>
        </div>
      </div>

    </div>
  );
};