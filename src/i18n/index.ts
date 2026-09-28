import { Language, TranslationSchema } from './types';
import { uz } from './uz';
import { ru } from './ru';
import { en } from './en';

export const translations: Record<Language, TranslationSchema> = {
  uz,
  ru,
  en,
};

export const LANGUAGE_STORAGE_KEY = 'om_portfolio_lang';
export const DEFAULT_LANGUAGE: Language = 'uz';

export * from './types';
