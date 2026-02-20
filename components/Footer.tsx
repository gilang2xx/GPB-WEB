import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white pt-20 pb-10 border-t border-gray-200 dark:border-gpb-blue/30 transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
          
          {/* Logo Section */}
          <div className="md:w-1/3">
            <img 
                src="/images/logo-color.png" 
                alt="Global Private Badminton" 
                className="h-20 w-auto object-contain mb-6 dark:brightness-100 dark:invert-0 transition-all duration-300"
            />
            <div className="max-w-xs">
               <h3 className="font-teko text-3xl uppercase leading-none mb-2 text-black dark:text-white">
                 The Elite Badminton Sanctuary
               </h3>
               <p className="font-satoshi text-gray-600 dark:text-gray-400 text-sm">
                 Defining the standard for high-performance since 2021.
               </p>
            </div>
          </div>

          {/* Quick Links (Simplified) */}
          <div className="md:w-1/3">
            <h4 className="font-teko text-2xl uppercase mb-4 text-gpb-blue">Menu</h4>
            <div className="flex flex-col gap-2">
               <span className="font-teko text-xl uppercase hover:text-gpb-blue transition-colors cursor-pointer">Home</span>
               <span className="font-teko text-xl uppercase hover:text-gpb-blue transition-colors cursor-pointer">Services</span>
               <span className="font-teko text-xl uppercase hover:text-gpb-blue transition-colors cursor-pointer">Shop</span>
               <span className="font-teko text-xl uppercase hover:text-gpb-blue transition-colors cursor-pointer">Events</span>
               <span className="font-teko text-xl uppercase hover:text-gpb-blue transition-colors cursor-pointer">Contact</span>
            </div>
          </div>

          {/* Social */}
          <div className="md:w-1/3">
             <h4 className="font-teko text-2xl uppercase mb-4 text-gpb-blue">Follow Us</h4>
             <div className="flex gap-4 text-2xl">
               <i className="fab fa-instagram hover:text-gpb-blue cursor-pointer transition-colors"></i>
               <i className="fab fa-twitter hover:text-gpb-blue cursor-pointer transition-colors"></i>
               <i className="fab fa-youtube hover:text-gpb-blue cursor-pointer transition-colors"></i>
               <i className="fab fa-tiktok hover:text-gpb-blue cursor-pointer transition-colors"></i>
             </div>
          </div>
        </div>

        <div className="text-center mt-10 pt-8 border-t border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-600 font-satoshi text-xs uppercase tracking-widest">
           © 2026 Global Private Badminton. All rights reserved.
        </div>
      </div>
    </footer>
  );
};