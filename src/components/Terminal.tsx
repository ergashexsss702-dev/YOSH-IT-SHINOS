import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal as TerminalIcon, Play, RotateCcw, CornerDownLeft } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: string;
}

export const Terminal: React.FC = () => {
  const { t } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: t.terminal.commands.whoami,
    },
    {
      command: 'skills',
      output: t.terminal.commands.skills,
    },
    {
      command: 'status',
      output: t.terminal.commands.status,
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Update initial output when language changes
  useEffect(() => {
    setHistory([
      { command: 'whoami', output: t.terminal.commands.whoami },
      { command: 'skills', output: t.terminal.commands.skills },
      { command: 'status', output: t.terminal.commands.status },
    ]);
  }, [t]);

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    const commandsMap = t.terminal.commands;

    if (cleanCmd in commandsMap) {
      output = commandsMap[cleanCmd as keyof typeof commandsMap];
    } else {
      output = `zsh: command not found: ${cleanCmd}. Type "help" to see available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');

    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickCommands = ['whoami', 'skills', 'location', 'status', 'education', 'contact', 'goals', 'help'];

  const runAllDemo = () => {
    setHistory([
      { command: 'whoami', output: t.terminal.commands.whoami },
      { command: 'skills', output: t.terminal.commands.skills },
      { command: 'location', output: t.terminal.commands.location },
      { command: 'education', output: t.terminal.commands.education },
      { command: 'status', output: t.terminal.commands.status },
      { command: 'contact', output: t.terminal.commands.contact },
    ]);
  };

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-500 font-semibold mb-2 block">
            {t.terminal.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {t.terminal.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {t.terminal.subtitle}
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">
              Quick:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors border border-slate-300/50 dark:border-slate-700"
              >
                ${cmd}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={runAllDemo}
              title={t.terminal.autoRunBtn}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              <Play className="w-3 h-3" />
              <span>{t.terminal.autoRunBtn}</span>
            </button>
            <button
              onClick={() => setHistory([])}
              title={t.terminal.clearBtn}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.terminal.clearBtn}</span>
            </button>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#090D16] text-slate-200 font-mono text-xs sm:text-sm">
          {/* Window Header */}
          <div className="px-4 py-3 bg-[#0D1322] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm" />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>muhammadzoir@portfolio:~</span>
            </div>

            <div className="text-[11px] text-slate-500 font-mono">zsh</div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 space-y-4 min-h-[300px] max-h-[460px] overflow-y-auto">
            <div className="text-slate-500 text-xs pb-2 border-b border-slate-800/80">
              Welcome to Olimov Muhammadzoir Interactive Terminal (v1.0.0). Type `help` for commands.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5 animate-fade-in">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-blue-400 font-bold">{t.terminal.promptText}</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-slate-300 pl-4 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-blue-400 font-bold shrink-0">{t.terminal.promptText}</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'whoami', 'skills'..."
                className="w-full bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 font-mono text-xs sm:text-sm focus:ring-0"
              />
              <button
                type="submit"
                aria-label="Execute command"
                className="p-1 rounded text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
