import React from 'react';

export const Squad: React.FC = () => {
  const staff = [
    { name: 'FIKRI', role: 'HEAD COACH', image: '/images/fikri.jpg' },
    { name: 'REGGIE', role: 'THE COACH', image: '/images/reggie.jpg' },
    { name: 'GILANG', role: 'THE CREATOR', image: '/images/gilang.jpg' },
    { name: 'ELLE', role: 'THE ADMIN', image: '/images/elle.jpg' },
    { name: 'PAKDE', role: 'ASPRIMAN', image: '/images/pakde.jpg' },
    { name: 'FARHAN', role: 'HELPER MAN', image: '/images/farhan.jpg' },
  ];

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto">
        <div className="px-6 md:px-12 mb-10">
          <span className="block font-teko font-bold text-xl tracking-widest text-gpb-blue uppercase mb-2">Technical Staff</span>
          <h2 className="text-7xl md:text-9xl font-teko font-bold uppercase tracking-tighter leading-none text-black dark:text-white transition-colors duration-300">
            Team GPB
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-10 hide-scrollbar pl-6 md:pl-12 gap-1">
          {staff.map((coach, idx) => (
            <div key={idx} className="flex-shrink-0 w-[280px] md:w-[350px] relative group cursor-pointer">
              <div className="relative h-[450px] overflow-hidden bg-gray-100 dark:bg-neutral-900 transition-colors duration-300">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent dark:from-black/80 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Border: Blue for Structure */}
              <div className="pt-4 border-t-4 border-gray-300 dark:border-white/20 group-hover:border-gpb-blue transition-colors duration-300">
                <p className="font-satoshi font-bold text-sm text-gpb-blue uppercase tracking-widest mb-1">{coach.role}</p>
                <h3 className="font-teko font-bold text-5xl uppercase leading-none break-words text-black dark:text-white transition-colors duration-300">
                  {coach.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};