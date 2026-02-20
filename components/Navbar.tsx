import React, { useState, useEffect } from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize state based on DOM
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleJoin = () => {
    const phoneNumber = '6281806333337';
    const message = 'Hi GPB Team, I am interested in joining the squad.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const navItems = [
    { label: 'Home', view: View.HOME },
    { label: 'About', view: View.ABOUT },
    { label: 'Services', view: View.SERVICES },
    { label: 'Shop', view: View.SHOP },
    { label: 'Events', view: View.EVENTS },
    { label: 'Contact', view: View.CONTACT },
  ];

  // Sun/Moon Icon Toggle Button
  const ThemeToggleBtn = () => (
    <button 
      onClick={toggleTheme}
      className="p-2 hover:bg-white/10 transition-colors focus:outline-none group rounded-full" 
      aria-label="Toggle Dark Mode"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <i className={`fas ${isDark ? 'fa-sun text-yellow-400' : 'fa-moon text-white'} text-2xl md:text-3xl transition-transform duration-500 transform group-hover:rotate-12`}></i>
    </button>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-gpb-blue dark:bg-black/90 text-white border-b border-white/10 dark:border-gpb-blue/30 backdrop-blur-md transition-colors duration-300 shadow-lg">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo - Image Placeholder */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setView(View.HOME)}
          >
            <img 
                src="/images/logo-color.png" 
                alt="Global Private Badminton" 
                // Always invert in light mode (since bg is blue and logo text is black) AND dark mode (bg black).
                // Using brightness-0 invert makes it pure white.
                className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setView(item.view)}
                className={`text-xl font-teko font-bold uppercase tracking-wide decoration-4 underline-offset-8 transition-all duration-300
                  ${currentView === item.view ? 'text-white underline decoration-gpb-orange' : 'text-white/80 hover:text-white hover:underline hover:decoration-gpb-orange'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6 text-xl">
             {/* Theme Toggle */}
             <ThemeToggleBtn />

             <div className="w-px h-6 bg-white/30 mx-2"></div>
             
             {/* CTA */}
             <button 
                onClick={handleJoin}
                className="bg-gpb-orange text-black font-teko font-bold text-lg px-6 py-2 uppercase hover:bg-white hover:text-gpb-blue dark:hover:bg-white dark:hover:text-black transition-colors rounded-none"
             >
                Join
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggleBtn />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gpb-blue/30 h-screen absolute w-full z-40 transition-colors duration-300">
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setView(item.view);
                  setIsOpen(false);
                }}
                className="text-left text-4xl font-teko font-bold uppercase tracking-tight text-black dark:text-white hover:text-gpb-blue border-b border-gray-100 dark:border-white/10 pb-4"
              >
                {item.label}
              </button>
            ))}
            <button 
                onClick={() => {
                    handleJoin();
                    setIsOpen(false);
                }}
                className="bg-gpb-orange text-black font-teko font-bold text-2xl py-4 uppercase mt-4 rounded-none"
            >
                Join The Squad
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};