import { en } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';

export const LOCALES = { en, es } as const;

export function normalizeLang(input?: string | null): Lang {
  if (!input) return 'es';
  const lower = input.toLowerCase();
  if (lower.startsWith('es')) return 'es';
  return 'en';
}

export function getStrings(lang: Lang) {
  return LOCALES[lang];
}
