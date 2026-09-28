import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowDown,
  ArrowUpRight,
  Send,
  Instagram,
  Terminal,
  Cpu,
  Code2,
  Sparkles,
  Layers,
  MapPin,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [t.hero.roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-futuristic-grid"
    >
      {/* Ambient gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[540px] lg:w-[720px] h-[320px] sm:h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-12 right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Subtle Code Symbols in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10 opacity-30 dark:opacity-20 font-mono text-xs">
        <span className="absolute top-28 left-[10%] text-blue-500 animate-pulse">&lt;/&gt;</span>
        <span className="absolute top-44 right-[15%] text-cyan-400">{'{'} state: 'learning' {'}'}</span>
        <span className="absolute top-[60%] left-[8%] text-indigo-400">const age = 13;</span>
        <span className="absolute top-[75%] right-[10%] text-blue-400">npm run build</span>
        <span className="absolute top-36 left-[48%] text-purple-400">01011001</span>
        <span className="absolute bottom-20 left-[35%] text-emerald-400">[Arduino.IDE]</span>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-900/30 border border-blue-500/30 text-blue-600 dark:text-blue-300 text-xs font-medium mb-6 backdrop-blur-sm animate-fade-in shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{t.hero.statusBadge}</span>
        </div>

        {/* Profile Avatar Frame with Initials OM & Floating Tech Icons */}
        <div className="relative mb-8 group">
          {/* Outer glow ring */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

          {/* Main Avatar Circle */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {/* Subtle inner grid & glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-slate-950/80" />
              
              <span className="font-display font-black text-4xl sm:text-5xl tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-300 bg-clip-text text-transparent relative z-10 select-none">
                OM
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-cyan-400 font-semibold mt-1 relative z-10">
                CODER BOY
              </span>
            </div>
          </div>

          {/* Floating Small Technology Icons Around Avatar */}
          <div
            title="Frontend / React"
            className="absolute -top-2 -left-2 w-9 h-9 rounded-xl bg-slate-900/90 border border-blue-500/40 shadow-lg flex items-center justify-center text-blue-400 transition-transform duration-300 hover:scale-110"
          >
            <Code2 className="w-4 h-4" />
          </div>

          <div
            title="Arduino & Hardware"
            className="absolute -top-2 -right-2 w-9 h-9 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-lg flex items-center justify-center text-cyan-400 transition-transform duration-300 hover:scale-110"
          >
            <Cpu className="w-4 h-4" />
          </div>

          <div
            title="AI & Prompt Engineering"
            className="absolute -bottom-2 -left-2 w-9 h-9 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-lg flex items-center justify-center text-purple-400 transition-transform duration-300 hover:scale-110"
          >
            <Sparkles className="w-4 h-4" />
          </div>

          <div
            title="Terminal & Development"
            className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-slate-900/90 border border-indigo-500/40 shadow-lg flex items-center justify-center text-indigo-400 transition-transform duration-300 hover:scale-110"
          >
            <Terminal className="w-4 h-4" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mb-3 text-balance">
          {t.hero.greeting}{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.name}
          </span>
        </h1>

        {/* Dynamic Rotating Role */}
        <div className="h-8 sm:h-10 mb-4 flex items-center justify-center">
          <span className="text-base sm:text-xl font-mono font-semibold text-blue-600 dark:text-cyan-400 transition-all duration-300">
            &gt; {t.hero.roles[currentRoleIndex]}
          </span>
        </div>

        {/* Bio Line */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
          {t.hero.bioLine}
        </p>

        {/* Location & Age metadata unboxed with separators */}
        <div className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.hero.location}</span>
          </span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>{t.hero.ageBadge}</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>Ilmhub O'quv Markazi (1.5y)</span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap min-h-[44px]"
          >
            <Layers className="w-4 h-4" />
            <span>{t.hero.viewProjects}</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700/80 active:scale-95 transition-all shadow-sm whitespace-nowrap min-h-[44px]"
          >
            <span>{t.hero.contactMe}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Social Direct Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://t.me/ergashexsss7o2"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram: @ergashexsss7o2"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/50 hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-400/40 transition-all"
          >
            <Send className="w-3.5 h-3.5 text-blue-500" />
            <span>Telegram</span>
          </a>

          <a
            href="https://www.instagram.com/ergashex_702?stkn=ZWxxNDMydmVpZzI5"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram: @ergashex_702"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/50 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-400/40 transition-all"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-500" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce opacity-60">
          <a
            href="#about"
            aria-label={t.hero.scrollDown}
            className="p-2 text-slate-400 hover:text-blue-500 transition-colors inline-block"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
