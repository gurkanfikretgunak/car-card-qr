import { ui, defaultLang } from './languages';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAlternativeLanguage(currentLang: string) {
  return currentLang === 'tr' ? 'en' : 'tr';
}

export function isValidLang(lang: string): lang is keyof typeof ui {
  return lang in ui;
}
