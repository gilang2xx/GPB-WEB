import React from 'react';

export const News: React.FC = () => {
  // Gallery data focusing on community, style, and numbers
  const gallery = [
    {
      id: 1,
      image: '/images/5th-anniversary.jpg',
      caption: '5th ANNIVERSARY CELEBRATION',
      sub: ''
    },
    {
      id: 2,
      image: '/images/meet-legend.jpg',
      caption: 'MEET THE LEGEND',
      sub: 'Mengundang bintang tamu spesial setiap tahun untuk sesi eksklusif dengan anggota GPB. Tahun ini, kita kedatangan juara dunia dan ikon badminton Indonesia.'
    },
    {
      id: 3,
      image: '/images/tourney-internal.jpeg',
      caption: 'TOURNEY INTERNAL',
      sub: ''
    },
    {
      id: 4,
      image: '/images/gpb-news-1.jpeg',
      caption: '',
      sub: ''
    },
    {
      id: 5,
      image: '/images/gpb-news-2.jpeg',
      caption: '',
      sub: ''
    },
    {
      id: 6,
      image: '/images/gpb-news-3.jpeg',
      caption: '',
      sub: ''
    }
  ];

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 border-t border-gray-200 dark:border-gpb-blue/50 transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
             <h2 className="text-6xl md:text-8xl font-teko font-bold uppercase tracking-tighter leading-none">
               The Boar<br/>Chronicles
             </h2>
             <p className="mt-4 font-satoshi text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl border-l-4 border-gpb-orange pl-6">
               Not just a club. A movement. Witness the energy of hundreds of members dominating the court and elevating the culture.
             </p>
           </div>
           
           {/* Functional Link: Blue */}
           <button className="hidden md:block text-gpb-blue font-teko text-3xl uppercase underline decoration-2 underline-offset-4 hover:text-black dark:hover:text-white transition-colors">
             Follow Our Journey
           </button>
        </div>

        {/* Gallery Grid - Masonry feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {gallery.map((item) => (
            <div key={item.id} className="relative group overflow-hidden aspect-[4/3] md:aspect-square cursor-pointer">
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gpb-blue/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                 <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block font-teko text-white text-xl uppercase tracking-widest mb-2">{item.sub}</span>
                    <h3 className="font-teko text-5xl font-bold text-white uppercase leading-none">{item.caption}</h3>
                    <div className="w-12 h-1 bg-gpb-orange mx-auto mt-4"></div>
                 </div>
              </div>

              {/* Default Tag (Always visible until hover) */}
              <div className="absolute bottom-6 left-6 bg-black/80 text-white px-4 py-2 font-teko font-bold text-xl uppercase tracking-wide group-hover:opacity-0 transition-opacity duration-300">
                 GPB {}
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full border border-gpb-blue text-gpb-blue font-teko text-2xl uppercase py-3 hover:bg-gpb-blue hover:text-white transition-colors">
             View Gallery
        </button>
      </div>
    </section>
  );
};