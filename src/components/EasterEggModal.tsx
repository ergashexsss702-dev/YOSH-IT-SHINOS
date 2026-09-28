import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, X, Terminal, Cpu, Heart, CheckCircle2 } from 'lucide-react';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="easter-egg-title"
    >
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl glass-panel bg-slate-900/95 text-slate-100 shadow-2xl border border-blue-500/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label={t.easterEgg.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="font-display font-bold text-white text-lg tracking-wider">&lt;OM/&gt;</span>
          </div>
          <div>
            <h3 id="easter-egg-title" className="text-lg font-bold text-white flex items-center gap-2">
              {t.easterEgg.title}
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </h3>
            <p className="text-xs text-blue-400 font-mono">EST. 2025 · ILMHUB STUDENT</p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {t.easterEgg.desc}
        </p>

        <div className="space-y-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 mb-6 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Age: 13 · Location: Namangan, UZ</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Hardware: Arduino &amp; Sensor Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Frontend: React, TypeScript &amp; Tailwind</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-400 shrink-0" />
            <span>Motto: Learn. Build. Create.</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/30 active:scale-[0.98]"
        >
          {t.easterEgg.close}
        </button>
      </div>
    </div>
  );
};
