import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Send,
  Instagram,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-500 font-semibold mb-2 block">
            {t.contact.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Telegram Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 hover:border-blue-500/40 transition-all flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <Send className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase text-slate-400">
                    {t.contact.telegramLabel}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    @ergashexsss7o2
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => copyToClipboard('https://t.me/ergashexsss7o2', 'tg')}
                  title={copiedField === 'tg' ? t.contact.copiedTooltip : t.contact.copyTooltip}
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {copiedField === 'tg' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href="https://t.me/ergashexsss7o2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  title="Open Telegram"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 hover:border-pink-500/40 transition-all flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase text-slate-400">
                    {t.contact.instagramLabel}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    @ergashex_702
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href="https://www.instagram.com/ergashex_702?stkn=ZWxxNDMydmVpZzI5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-pink-600 text-white hover:bg-pink-500 transition-colors"
                  title="Open Instagram"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 hover:border-emerald-500/40 transition-all flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase text-slate-400">
                    {t.contact.phoneLabel}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    +998-97-943-75-77
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => copyToClipboard('+998979437577', 'phone')}
                  title={copiedField === 'phone' ? t.contact.copiedTooltip : t.contact.copyTooltip}
                  className="p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href="tel:+998979437577"
                  className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                  title="Call Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 flex items-center gap-3.5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  {t.contact.locationLabel}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Namangan, O'zbekiston
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Frontend Demo Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                {t.contact.form.title}
              </h3>
            </div>

            {/* Clear notice about frontend demo mode */}
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-500/10 dark:bg-blue-950/30 border border-blue-500/20 text-xs text-blue-700 dark:text-blue-300 mb-6 font-mono">
              <AlertCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>{t.contact.form.demoNotice}</span>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.contact.form.successMsg}
                </h4>
                <div className="pt-2">
                  <a
                    href="https://t.me/ergashexsss7o2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-md shadow-blue-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Telegram Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                    {t.contact.form.contactLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder={t.contact.form.contactPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-[0.99] min-h-[44px]"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.form.sendBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
