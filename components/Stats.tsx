import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Elite Athletes' },
    { value: '20+', label: 'Pro Coaches' },
    { value: '50+', label: 'Championships' },
    { value: '100%', label: 'Performance' },
  ];

  return (
    <div className="bg-gpb-blue py-12 relative overflow-hidden transform -skew-y-2 origin-left z-20 border-y-4 border-gpb-darker">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform skew-y-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative group cursor-default">
              <h3 className="text-6xl md:text-8xl font-teko font-bold text-white leading-none mb-2 group-hover:scale-110 transition-transform duration-300 shadow-black drop-shadow-lg">
                {stat.value}
              </h3>
              <p className="text-gpb-darker font-satoshi font-black uppercase tracking-widest text-sm md:text-base bg-white/20 inline-block px-2 py-1 transform -skew-x-12">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};