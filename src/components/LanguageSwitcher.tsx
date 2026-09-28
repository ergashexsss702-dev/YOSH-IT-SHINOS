import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string; full: string }[] = [
    { code: 'uz', label: 'UZ', full: "O'zbekcha" },
    { code: 'ru', label: 'RU', full: 'Русский' },
    { code: 'en', label: 'EN', full: 'English' },
  ];

  return (
    <div
      role="group"
      aria-label={t.nav.switchLanguage}
      className={`inline-flex items-center p-1 rounded-xl bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/60 text-xs font-semibold ${className}`}
    >
      {languages.map((item) => {
        const isActive = language === item.code;
        return (
          <button
            key={item.code}
            onClick={() => setLanguage(item.code)}
            aria-pressed={isActive}
            title={item.full}
            className={`px-2.5 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap min-w-[32px] ${
              isActive
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
