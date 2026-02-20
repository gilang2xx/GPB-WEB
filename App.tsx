import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { News } from './components/News';
import { Squad } from './components/Squad';
import { Membership } from './components/Membership';
import { Footer } from './components/Footer';
import { AICoach } from './components/AICoach';
import { Programs } from './components/Programs';
import { Contact } from './components/Contact';
import { Shop } from './components/Shop';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <Hero onStart={() => setCurrentView(View.SERVICES)} />
            <News />
            <Squad />
            <Partners />
            <Programs onNavigate={() => setCurrentView(View.CONTACT)} />
            <Membership />
          </>
        );
      case View.ABOUT:
        return <About />;
      case View.SERVICES:
        return <Programs onNavigate={() => setCurrentView(View.CONTACT)} />;
      case View.SHOP:
        return <Shop />;
      case View.EVENTS:
        return (
           <>
            <div className="bg-white dark:bg-black text-black dark:text-white pt-32 pb-10 px-6 text-center transition-colors duration-300">
               <h1 className="text-8xl font-teko font-bold uppercase">Upcoming Events</h1>
            </div>
            <News />
           </>
        );
      case View.CONTACT:
        return <Contact />;
      case View.AI_COACH:
        return <AICoach />;
      case View.PROGRAMS: // Fallback legacy
        return <Programs onNavigate={() => setCurrentView(View.CONTACT)} />;
      default:
        return (
          <>
            <Hero onStart={() => setCurrentView(View.SERVICES)} />
            <News />
            <Squad />
            <Partners />
            <Programs onNavigate={() => setCurrentView(View.CONTACT)} />
            <Membership />
          </>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white overflow-x-hidden selection:bg-gpb-orange selection:text-white transition-colors duration-300">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main>
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;