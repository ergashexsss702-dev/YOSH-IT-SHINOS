import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SKILLS_DATA, SkillItem } from '../data/skills';
import {
  Code2,
  Cpu,
  Bot,
  Smartphone,
  Layers,
  Globe,
  Monitor,
  Sparkles,
  Brain,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Cpu,
  Bot,
  Smartphone,
  Layers,
  Globe,
  Monitor,
  Sparkles,
  Brain,
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'coding' | 'hardware' | 'ai'>('all');

  const categories: { key: 'all' | 'coding' | 'hardware' | 'ai'; label: string }[] = [
    { key: 'all', label: t.skills.categories.all },
    { key: 'coding', label: t.skills.categories.coding },
    { key: 'hardware', label: t.skills.categories.hardware },
    { key: 'ai', label: t.skills.categories.ai },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const getSkillDesc = (id: string) => {
    const key = id as keyof typeof t.skills.items;
    return t.skills.items[key] || { name: id, desc: '' };
  };

  const getLevelLabel = (levelKey: SkillItem['levelKey']) => {
    return t.skills.levels[levelKey] || levelKey;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-500 font-semibold mb-2 block">
            {t.skills.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/60 shadow-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap min-h-[38px] ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = ICON_MAP[skill.icon] || Code2;
            const item = getSkillDesc(skill.id);
            const levelLabel = getLevelLabel(skill.levelKey);

            return (
              <div
                key={skill.id}
                className="group glass-panel rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.accentColor}18`,
                        color: skill.accentColor,
                        border: `1px solid ${skill.accentColor}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Clean unboxed metadata separator */}
                    <div className="text-right">
                      <div className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 justify-end">
                        <span
                          className="w-1.5 h-1.5 rounded-full inline-block"
                          style={{ backgroundColor: skill.accentColor }}
                        />
                        <span>{levelLabel}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle progress indicator bar */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Progress Focus</span>
                  <span className="text-slate-500 dark:text-slate-300 font-semibold">Active at Ilmhub</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
