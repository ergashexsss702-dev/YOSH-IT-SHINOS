import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEasterEgg: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEasterEgg }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#projects', label: t.nav.projects },
    { href: '#terminal', label: t.nav.terminal },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['contact', 'terminal', 'projects', 'education', 'skills', 'about', 'hero'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element Brand */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenEasterEgg}
            title="Olimov Muhammadzoir — Click for info"
            className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
              &lt;OM/&gt;
            </span>
            <span className="hidden sm:inline-block font-display font-bold text-sm tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
              MUHAMMADZOIR
            </span>
          </button>
        </div>

        {/* Zone 2: Clean 4-6 text nav links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-sm shadow-blue-500/25 whitespace-nowrap"
          >
            <span>{t.nav.getInTouch}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-300/40 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:text-blue-500 transition-colors"
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-slate-900/95 backdrop-blur-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in border-t border-slate-800">
          <div className="space-y-2 pt-2">
            <div className="mb-4 pb-4 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                Menu &amp; Settings
              </span>
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800 mt-6 space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-white bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition-all shadow-lg shadow-blue-600/30"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center text-xs text-slate-400 font-mono">
              Olimov Muhammadzoir · Namangan, UZ
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
