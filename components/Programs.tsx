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

const rateCards = [
  {
    id: '1',
    title: 'Member / Month',
    subtitle: 'Beginner Recommend',
    oldPrice: 'Rp 2.600K',
    newPrice: 'Rp 1.860K',
    discountLabel: 'UP TO 30% OFF',
    highlightColor: 'blue',
    specs: [
      'Fee Private: 350K x 4 pertemuan = 1.400K',
      'Shuttlecock: FREE 1 BULAN',
      'Lapangan: 45K/Jam x 8 = 360K (Lapangan Tirta / Jaya Baru MEMBER)',
      'Kok Helper 4 x 25K = 100K'
    ],
    benefits: [
      'FREE Chiropractic Full Body 1x',
      'FREE Pembuatan Reel Instagram'
    ],
    note: 'Diluar Gor yang ditentukan / luar Depok transport 100–300K'
  },
  {
    id: '2',
    title: 'Per Visit',
    oldPrice: 'Rp 700K',
    newPrice: 'Rp 555K',
    discountLabel: 'UP TO 20% OFF',
    highlightColor: 'orange',
    specs: [
      'Fee Private: 400K',
      'Shuttlecock: 50K',
      'Lapangan: 45K/Jam x 2 = 90K (Lapangan Tirta / Jaya Baru MEMBER)',
      'Kok Helper 25K'
    ],
    benefits: [
      'FREE Chiropractic Full Body 1x',
      'FREE Pembuatan Reel Instagram'
    ],
    note: 'Diluar Gor yang ditentukan / luar Depok transport 100–300K'
  },
  {
    id: '3',
    title: 'Private 2 People / Month',
    oldPrice: 'Rp 3.400K',
    newPrice: 'Rp 2.860K',
    discountLabel: 'UP TO 20% OFF',
    highlightColor: 'blue',
    specs: [
      'Fee Private: 600K x 4 pertemuan = 2.400K',
      'Shuttlecock: FREE 1 BULAN',
      'Lapangan: 45K/Jam x 8 = 360K (Lapangan Tirta / Jaya Baru MEMBER)',
      'Kok Helper 4 x 25K = 100K'
    ],
    benefits: [
      'FREE Chiropractic Full Body 1x',
      'FREE Pembuatan Reel Instagram'
    ],
    note: 'Diluar Gor yang ditentukan / luar Depok transport 100–300K'
  },
  {
    id: '4',
    title: 'Private 3 People / Month',
    oldPrice: 'Rp 3.900K',
    newPrice: 'Rp 3.260K',
    discountLabel: 'UP TO 20% OFF',
    highlightColor: 'orange',
    specs: [
      'Fee Private: 700K x 4 pertemuan = 2.800K',
      'Shuttlecock: FREE 1 BULAN',
      'Lapangan: 45K/Jam x 8 = 360K (Lapangan Tirta / Jaya Baru MEMBER)',
      'Kok Helper 4 x 25K = 100K'
    ],
    benefits: [
      'FREE Chiropractic Full Body 1x',
      'FREE Pembuatan Reel Instagram'
    ],
    note: 'Diluar Gor yang ditentukan / luar Depok transport 100–300K'
  },
  {
    id: '5',
    title: 'Semi Group 4 People',
    oldPrice: 'Rp 3.900K',
    newPrice: 'Rp 3.260K',
    discountLabel: 'UP TO 15% OFF',
    highlightColor: 'blue',
    specs: [
      'Fee Private: 700K x 4 pertemuan = 2.800K',
      'Shuttlecock: FREE 1 BULAN',
      'Lapangan: 45K/Jam x 8 = 360K (Lapangan Tirta / Jaya Baru MEMBER)',
      'Kok Helper 4 x 25K = 100K'
    ],
    benefits: [
      'FREE Chiropractic Full Body 1x',
      'FREE Pembuatan Reel Instagram'
    ],
    note: 'Diluar Gor yang ditentukan / luar Depok transport 100–300K'
  },
  {
    id: '6',
    title: 'Semi Group Regular 4–8 Orang',
    subtitle: 'Training with GPB Member | Intermediate - Advance',
    oldPrice: 'Rp 800K',
    newPrice: 'Rp 600K / Month',
    discountLabel: 'UP TO 25% OFF',
    highlightColor: 'teal',
    specs: [
      'Only 160K per visit',
      '600K / Month 4x pertemuan'
    ],
    benefits: [
      'Lapangan 3–4 Jam',
      'Beresin Kok Drilling',
      'Kok Game',
      'Mention Story Instagram'
    ],
    note: 'Diluar Depok transport 50–100K'
  }
];

const getIcon = (level: string) => {
  switch (level) {
    case 'SNIPER':
      return 'fa-crosshairs';
    case 'WOLFPACK':
      return 'fa-users';
    default:
      return 'fa-shuttlecock';
  }
};

interface ProgramsProps {
  onNavigate?: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onNavigate }) => {
  const phoneNumber = '6281806333337';

  const handleBooking = (programTitle: string) => {
    const message = `Hi GPB Team, I am interested in securing a slot for the ${programTitle} program.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleRateCardBooking = (packageTitle: string) => {
    const message = `Hi GPB Team, saya tertarik dengan paket ${packageTitle}. Boleh info slot dan detail pendaftarannya?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getPriceColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-gpb-blue';
      case 'orange':
        return 'text-gpb-orange';
      case 'teal':
        return 'text-cyan-600 dark:text-cyan-400';
      default:
        return 'text-gpb-blue';
    }
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-gpb-blue';
      case 'orange':
        return 'bg-gpb-orange';
      case 'teal':
        return 'bg-cyan-600';
      default:
        return 'bg-gpb-orange';
    }
  };

 const getCardBg = (color: string) => {
  if (color === 'teal') {
    return 'bg-[#eef2f7] dark:bg-neutral-900 border border-gray-300 dark:border-white/10';
  }
  return 'bg-[#eef2f7] dark:bg-neutral-900 border border-gray-300 dark:border-white/10';
};

  return (
    <div className="min-h-screen py-24 md:py-32 bg-white dark:bg-black relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader title="PROGRAMS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group relative h-[600px] w-full transform transition-all duration-500 hover:-translate-y-4"
            >
              <div className="absolute inset-0 transform -skew-x-3 overflow-hidden bg-gray-100 dark:bg-[#0a0f16] border border-gray-300 dark:border-white/10 group-hover:border-gpb-blue group-hover:shadow-[0_0_30px_rgba(0,82,204,0.3)] transition-all duration-500">
                <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"></div>
                </div>

                <div className="absolute top-20 right-10 transform skew-x-3">
                  <i className={`fas ${getIcon(program.level)} text-8xl text-black/5 dark:text-white/5 group-hover:text-gpb-blue/20 transition-colors duration-500`}></i>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform skew-x-3 flex flex-col justify-end h-full">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-gpb-blue font-teko text-6xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-5xl md:text-6xl font-teko font-bold uppercase text-black dark:text-white mb-2 leading-none group-hover:text-gpb-blue transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-black dark:text-white font-satoshi font-bold text-lg italic mb-6 opacity-90">
                    "{program.tagline}"
                  </p>

                  <div className="mb-6">
                    <span className="text-gpb-blue font-teko text-2xl uppercase tracking-widest border-b border-gpb-blue/50 pb-1">
                      {program.detail}
                    </span>
                  </div>

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

              <div className="absolute -top-1 -right-1 w-24 h-24 border-t-4 border-r-4 border-gpb-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-3xl"></div>
              <div className="absolute -bottom-1 -left-1 w-24 h-24 border-b-4 border-l-4 border-gpb-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-7xl mx-auto">
          <SectionHeader title="RATE CARD" subtitle="PROGRAM PRICING" align="center" />

          <div className="mt-16 space-y-12">
            {rateCards.map((card) => (
              <div
                key={card.id}
                className={`relative p-8 md:p-12 overflow-hidden ${getCardBg(card.highlightColor)}`}
              >
                <div className={`absolute top-5 right-5 ${getBadgeColor(card.highlightColor)} text-white px-4 py-2 font-teko text-sm md:text-base uppercase tracking-wider`}>
                  {card.discountLabel}
                </div>

                <div className="pr-28 md:pr-40">
                  <h2 className="text-4xl md:text-6xl font-teko font-bold text-black dark:text-white leading-none">
                    {card.title}
                  </h2>

                  {card.subtitle && (
                    <p className="mt-3 font-satoshi text-base md:text-lg text-gray-800 dark:text-gray-300">
                      {card.subtitle}
                    </p>
                  )}
                </div>

                <div className="mt-6 w-full max-w-4xl flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-white border border-gray-300 dark:border-white/20 shrink-0"></div>
                  <div className="h-[3px] flex-1 bg-white/80 dark:bg-white/70"></div>
                  <div className="w-4 h-4 rounded-full bg-white border border-gray-300 dark:border-white/20 shrink-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                  <div>
                    <h3 className="font-teko text-3xl uppercase tracking-wider text-black dark:text-white mb-6">
                      Spesifikasi
                    </h3>

                    <div className="space-y-5">
                      {card.specs.map((spec, index) => (
                        <p
                          key={index}
                          className="font-satoshi text-lg md:text-2xl font-bold text-black dark:text-white leading-snug"
                        >
                          • {spec}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <span className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 line-through font-satoshi font-semibold">
                        {card.oldPrice}
                      </span>

                      <span className={`text-3xl md:text-5xl font-teko font-bold ${getPriceColor(card.highlightColor)}`}>
                        {card.newPrice}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-teko text-3xl uppercase tracking-wider text-black dark:text-white mb-6">
                      Benefit
                    </h3>

                    <div className="space-y-5">
                      {card.benefits.map((benefit, index) => (
                        <p
                          key={index}
                          className="font-satoshi text-lg md:text-2xl font-bold text-black dark:text-white leading-snug"
                        >
                          • {benefit}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <p className="font-satoshi text-sm md:text-base text-gray-700 dark:text-gray-400">
                    NOTE: {card.note}
                  </p>

                  <button
                    onClick={() => handleRateCardBooking(card.title)}
                    className="px-8 py-4 border border-black/20 dark:border-white/20 text-black dark:text-white font-teko text-xl uppercase tracking-widest hover:bg-gpb-blue hover:border-gpb-blue hover:text-white transition-all duration-300 bg-white/60 dark:bg-black/40 backdrop-blur-sm"
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 max-w-6xl mx-auto">
          <SectionHeader title="TRAINING GROUNDS" subtitle="OPERATIONAL ZONES" align="center" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-white/10 -translate-x-1/2"></div>
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-black border border-gray-300 dark:border-white/20 items-center justify-center rounded-full z-20">
              <i className="fas fa-map-marker-alt text-gpb-orange text-xl"></i>
            </div>

            <div className="group relative h-72 md:h-80 w-full overflow-hidden bg-gray-100 dark:bg-[#0a0f16] border-l-4 border-gpb-orange transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-900">
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

                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    onClick={onNavigate}
                    className="text-gpb-orange font-teko text-xl uppercase tracking-wider underline cursor-pointer hover:text-white transition-colors"
                  >
                    View HQ Coordinates
                  </button>
                </div>
              </div>

              <div className="absolute right-0 bottom-0 text-9xl font-teko font-bold text-gray-200 dark:text-white/5 leading-none -mb-8 -mr-8 select-none pointer-events-none">
                HQ
              </div>
            </div>

            <div className="group relative h-72 md:h-80 w-full overflow-hidden bg-gray-100 dark:bg-[#0a0f16] border-r-4 border-gpb-blue text-right transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-900">
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

                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    onClick={onNavigate}
                    className="text-gpb-blue font-teko text-xl uppercase tracking-wider underline cursor-pointer hover:text-white transition-colors"
                  >
                    View Sector Map
                  </button>
                </div>
              </div>

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