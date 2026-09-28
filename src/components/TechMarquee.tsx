import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TECH_MARQUEE_ITEMS } from '../data/marquee';
import { Code, Cpu, Smartphone, Sparkles, Terminal, Globe, Layers } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const { t } = useLanguage();

  // Double items for seamless infinite loop
  const marqueeItems = [...TECH_MARQUEE_ITEMS, ...TECH_MARQUEE_ITEMS];

  const getTechIcon = (category: string) => {
    switch (category) {
      case 'Hardware':
        return Cpu;
      case 'Mobile':
        return Smartphone;
      case 'AI':
      case 'Intelligence':
        return Sparkles;
      case 'Language':
      case 'Logic':
        return Code;
      case 'Tooling':
      case 'VCS':
        return Terminal;
      default:
        return Globe;
    }
  };

  return (
    <div className="py-12 relative overflow-hidden border-y border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400">
          {t.marquee.title}
        </span>
      </div>

      {/* Fade Gradients at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {marqueeItems.map((item, idx) => {
            const Icon = getTechIcon(item.category);
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/60 shadow-sm whitespace-nowrap text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-500/40 hover:text-blue-500 transition-colors"
              >
                <Icon className="w-4 h-4 text-blue-500" />
                <span>{item.name}</span>
                <span className="text-[10px] text-slate-400 font-mono font-normal">
                  / {item.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
