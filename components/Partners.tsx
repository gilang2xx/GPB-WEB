import React from 'react';
import { SectionHeader } from './UI/SectionHeader';

export const Partners: React.FC = () => {
  const brands = [
    { name: "KAHF", logo: "/images/brand-1.png" },
    { name: "NOBL", logo: "/images/brand-2.png" },
    { name: "SOBATHP", logo: "/images/brand-3.jpg" },
    { name: "ZINC", logo: "/images/brand-4.png" }
  ];

  return (
    <div className="py-24 bg-gray-50 dark:bg-[#050505] transition-colors duration-300 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="STRATEGIC ALLIANCES" subtitle="OFFICIAL PARTNERS" align="center" />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-satoshi text-lg md:text-xl text-gray-600 dark:text-gray-400">
              We are proud to collaborate with leading brands to elevate our competitive ecosystem. 
              These partners provide exclusive equipment and prizes for our <span className="text-gpb-orange font-bold">GPB Internal Championships</span>, 
              fueling the drive for victory.
            </p>
          </div>

          {/* Brand Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
  {brands.map((brand, idx) => (
    <div 
      key={idx} 
      // 1. WADAH KOTAK:
      // aspect-square: Memaksa jadi persegi.
      // p-8: Memberi jarak "napas" yang cukup besar di dalam kotak.
      // flex items-center justify-center: Memastikan gambar tepat di tengah.
      className="group relative bg-white dark:bg-white/5 aspect-square flex items-center justify-center p-8 rounded-xl border border-transparent hover:border-gray-500 transition-all"
    >
      <img
        src={brand.logo}
        alt={`${brand.name} Logo`}
        // 2. GAMBAR LOGO:
        // w-full h-full: Menyuruh gambar mengisi 100% area di dalam padding p-8 tadi.
        // object-contain: KUNCI UTAMA. Ini memastikan gambar dimuat utuh sesuai proporsi aslinya, tidak akan terpotong atau gepeng, meskipun wadahnya persegi.
        // HAPUS 'dark:invert' agar warnanya asli.
        className="w-full h-full object-contain transition-all"
      />
      
      {/* Corner Accent (Biarkan jika masih mau dipakai) */}
      {/* <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] ..."></div> */}
    </div>
  ))}
</div>
          
          <div className="mt-12 text-center">
            <p className="text-sm font-satoshi text-gray-500 uppercase tracking-widest">
                *Official Tournament Sponsors & Prize Partners
            </p>
          </div>
      </div>
    </div>
  );
};