import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Calendar, Languages, Code2, MapPin, GraduationCap, Compass, Target } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: t.about.stats.experience.value,
      label: t.about.stats.experience.label,
      icon: Calendar,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      value: t.about.stats.age.value,
      label: t.about.stats.age.label,
      icon: User,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      value: t.about.stats.languages.value,
      label: t.about.stats.languages.label,
      icon: Languages,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10 border-indigo-500/20',
    },
    {
      value: t.about.stats.skillsCount.value,
      label: t.about.stats.skillsCount.label,
      icon: Code2,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
    },
  ];

  const highlights = [
    {
      icon: MapPin,
      title: t.about.highlights.locationTitle,
      value: t.about.highlights.locationValue,
      accent: 'text-blue-500',
    },
    {
      icon: GraduationCap,
      title: t.about.highlights.centerTitle,
      value: t.about.highlights.centerValue,
      accent: 'text-cyan-500',
    },
    {
      icon: Compass,
      title: t.about.highlights.directionTitle,
      value: t.about.highlights.directionValue,
      accent: 'text-indigo-500',
    },
    {
      icon: Target,
      title: t.about.highlights.mindsetTitle,
      value: t.about.highlights.mindsetValue,
      accent: 'text-purple-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-500 font-semibold mb-2 block">
            {t.about.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {t.about.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Main Content Glass Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/60 dark:border-slate-800/80 mb-12 relative overflow-hidden">
          {/* Subtle accent corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block text-xs font-mono text-cyan-500 uppercase tracking-wider font-semibold">
                Olimov Muhammadzoir · 13 Years Old
              </div>
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                "{t.about.paragraph1}"
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.about.paragraph2}
              </p>

              {/* Highlights 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-700/40 flex items-start gap-3"
                    >
                      <div className={`p-2 rounded-lg bg-white dark:bg-slate-900 ${item.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          {item.title}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Card: Modern Coder Monogram Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-100/80 to-slate-200/50 dark:from-slate-900/80 dark:to-slate-950/90 border border-slate-300/40 dark:border-slate-800 text-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4 transform hover:rotate-3 transition-transform">
                <span className="font-display font-black text-2xl text-white tracking-wider">&lt;OM/&gt;</span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Olimov Muhammadzoir
              </h3>
              <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mt-1">
                Student @ Ilmhub O'quv Markazi
              </p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 my-4 rounded-full" />
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                "Learn. Build. Create."
              </p>
            </div>
          </div>
        </div>

        {/* 4 Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-panel p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-1 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bgColor} border flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
