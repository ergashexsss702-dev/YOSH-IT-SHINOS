import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ArrowUp, Send, Instagram, Github, Heart } from 'lucide-react';

interface FooterProps {
  onOpenEasterEgg: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEasterEgg }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/60 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200/60 dark:border-slate-800/80 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <button
              onClick={onOpenEasterEgg}
              className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            >
              <span className="font-display font-black text-2xl tracking-tighter bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                &lt;OM/&gt;
              </span>
              <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white">
                OLIMOV MUHAMMADZOIR
              </span>
            </button>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.footer.brandTagline}
            </p>
            <div className="text-xs font-mono text-cyan-500">
              Ilmhub O'quv Markazi · Namangan, Uzbekistan
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
              {t.footer.quickLinks}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Controls */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
              {t.footer.socialLinks}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://t.me/ergashexsss7o2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:border-blue-400/40 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-blue-500" />
                <span>Telegram</span>
              </a>

              <a
                href="https://www.instagram.com/ergashex_702?stkn=ZWxxNDMydmVpZzI5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-pink-500 hover:border-pink-400/40 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                <span>Instagram</span>
              </a>

              <span
                title={t.footer.githubComingSoon}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 text-xs font-medium text-slate-400 dark:text-slate-500 cursor-not-allowed"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.footer.githubComingSoon}</span>
              </span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Olimov Muhammadzoir · {t.footer.rights}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
              <span>in Namangan</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-500 transition-colors p-1"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
