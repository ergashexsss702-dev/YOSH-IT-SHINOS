import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';
import {
  ExternalLink,
  Github,
  Layout,
  Cpu,
  Gamepad2,
  Smartphone,
  Sparkles,
  Bot,
  X,
  Info,
  Clock,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Layout,
  Cpu,
  Gamepad2,
  Smartphone,
  Sparkles,
  Bot,
};

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ai' | 'mobile' | 'arduino' | 'creative'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters: { key: 'all' | 'web' | 'ai' | 'mobile' | 'arduino' | 'creative'; label: string }[] = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'web', label: t.projects.filterWeb },
    { key: 'ai', label: t.projects.filterAi },
    { key: 'mobile', label: t.projects.filterMobile },
    { key: 'arduino', label: t.projects.filterArduino },
    { key: 'creative', label: t.projects.filterCreative },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const getStatusLabel = (key: ProjectItem['statusKey']) => {
    switch (key) {
      case 'statusLive':
        return { label: t.projects.statusLive, color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
      case 'statusInDev':
        return { label: t.projects.statusInDev, color: 'text-blue-500', bg: 'bg-blue-500/10' };
      case 'statusPrototype':
        return { label: t.projects.statusPrototype, color: 'text-amber-500', bg: 'bg-amber-500/10' };
      case 'statusComingSoon':
      default:
        return { label: t.projects.statusComingSoon, color: 'text-purple-500', bg: 'bg-purple-500/10' };
    }
  };

  const getProjectContent = (key: ProjectItem['key']) => {
    return t.projects.items[key];
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-cyan-500 font-semibold mb-2 block">
            {t.projects.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {t.projects.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/60 shadow-sm">
            {filters.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap min-h-[38px] ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl glass-panel border border-dashed border-slate-300 dark:border-slate-700">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t.projects.emptyMessage}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const Icon = ICON_MAP[project.iconName] || Layout;
              const content = getProjectContent(project.key);
              const status = getStatusLabel(project.statusKey);

              return (
                <div
                  key={project.id}
                  className="group glass-panel rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-1.5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Status */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                        style={{
                          backgroundColor: `${project.accentColor}18`,
                          color: project.accentColor,
                          border: `1px solid ${project.accentColor}35`,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Unboxed Status Metadata with dot */}
                      <div className="text-xs font-mono font-medium flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full inline-block animate-pulse"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        <span className={status.color}>{status.label}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {content.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {content.desc}
                    </p>

                    {/* Technology tags: unboxed clean text line */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-6">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                          {i < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons: GitHub & Demo */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 min-h-[36px]"
                    >
                      <span>{t.projects.viewDetails}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {/* GitHub Button: Disabled if not available, no fake URL */}
                      {project.hasGithub && project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                          title={t.projects.btnCode}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      ) : (
                        <span
                          title={t.projects.btnComingSoon}
                          className="p-2 rounded-lg bg-slate-100/60 dark:bg-slate-800/40 text-slate-400 dark:text-slate-600 cursor-not-allowed min-h-[36px] min-w-[36px] flex items-center justify-center"
                        >
                          <Github className="w-4 h-4" />
                        </span>
                      )}

                      {/* Demo Button */}
                      {project.hasLiveDemo ? (
                        <a
                          href={project.demoUrl || '#'}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all min-h-[36px]"
                        >
                          <span>{t.projects.btnDemo}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span
                          title={t.projects.btnComingSoon}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100/70 dark:bg-slate-800/50 cursor-not-allowed min-h-[36px]"
                        >
                          <Clock className="w-3 h-3" />
                          <span>{t.projects.statusComingSoon}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl glass-panel bg-slate-900/95 text-slate-100 shadow-2xl border border-blue-500/30 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label={t.projects.modal.close}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${selectedProject.accentColor}20`,
                  color: selectedProject.accentColor,
                  border: `1px solid ${selectedProject.accentColor}40`,
                }}
              >
                {React.createElement(ICON_MAP[selectedProject.iconName] || Layout, { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {getProjectContent(selectedProject.key).title}
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  Category: {getProjectContent(selectedProject.key).category}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold mb-1">
                  {t.projects.modal.overview}
                </h4>
                <p className="leading-relaxed">
                  {getProjectContent(selectedProject.key).desc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold mb-2">
                  {t.projects.modal.techStack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold mb-1">
                  {t.projects.modal.status}
                </h4>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{getStatusLabel(selectedProject.statusKey).label}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="py-2 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
              >
                {t.projects.modal.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
