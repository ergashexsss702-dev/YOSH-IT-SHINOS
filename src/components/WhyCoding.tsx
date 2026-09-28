import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Lightbulb, Puzzle, Cpu, Quote } from 'lucide-react';

export const WhyCoding: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Lightbulb,
      title: t.whyCoding.pillars.curiosity.title,
      desc: t.whyCoding.pillars.curiosity.desc,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Puzzle,
      title: t.whyCoding.pillars.problemSolving.title,
      desc: t.whyCoding.pillars.problemSolving.desc,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Cpu,
      title: t.whyCoding.pillars.aiFuture.title,
      desc: t.whyCoding.pillars.aiFuture.desc,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-purple-500 font-semibold mb-2 block">
            {t.whyCoding.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {t.whyCoding.title}
          </h2>
        </div>

        {/* Central Quote Showcase */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200/70 dark:border-slate-800 shadow-xl mb-12 relative overflow-hidden text-center">
          <div className="absolute top-4 left-6 text-blue-500/15 dark:text-blue-500/20 pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          <p className="text-lg sm:text-2xl font-display font-semibold text-slate-800 dark:text-slate-100 max-w-3xl mx-auto leading-relaxed relative z-10 italic">
            "{t.whyCoding.quote}"
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-[2px] bg-blue-500 rounded-full" />
            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-cyan-400">
              OLIMOV MUHAMMADZOIR · NAMANGAN, UZ
            </span>
            <div className="w-8 h-[2px] bg-blue-500 rounded-full" />
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-1 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} border flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
