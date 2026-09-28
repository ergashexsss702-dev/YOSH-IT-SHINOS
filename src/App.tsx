import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { TechMarquee } from './components/TechMarquee';
import { Projects } from './components/Projects';
import { Terminal } from './components/Terminal';
import { WhyCoding } from './components/WhyCoding';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EasterEggModal } from './components/EasterEggModal';

const PortfolioContent: React.FC = () => {
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <ScrollProgress />
      <CustomCursor />
      
      <Navbar onOpenEasterEgg={() => setEasterEggOpen(true)} />

      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <TechMarquee />
        <Projects />
        <Terminal />
        <WhyCoding />
        <Contact />
      </main>

      <Footer onOpenEasterEgg={() => setEasterEggOpen(true)} />

      <EasterEggModal
        isOpen={easterEggOpen}
        onClose={() => setEasterEggOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
