import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, BookOpen, CheckCircle, Clock } from 'lucide-react';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-cyan-500 font-semibold mb-2 block">
            {t.education.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {t.education.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Timeline Showcase Card */}
        <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/70 dark:border-slate-800 shadow-xl overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {t.education.centerName}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 mt-0.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{t.education.fields}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/20 text-blue-700 dark:text-blue-300 w-fit">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>{t.education.period}</span>
            </div>
          </div>

          {/* Description */}
          <div className="py-6">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {t.education.description}
            </p>
          </div>

          {/* Curriculum / Learning Milestones */}
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold mb-3">
              Curriculum &amp; Milestones (2025 → 2026)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {t.education.learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer of the card */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Student · Level: Continuous Skill Advancement</span>
            </div>
            <div className="italic text-slate-400">
              {t.education.viewCertSoon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
