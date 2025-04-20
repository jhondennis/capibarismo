'use client'

export const languages = {
  en: 'English',
  es: 'Español',
} as const

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const

export const defaultLang = 'en'

export type Locale = (typeof i18n)['locales'][number]

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (i18n.locales.includes(lang as Locale)) return lang
  return defaultLang
}

export function useTranslations<T>(lang: Locale, ui: Record<Locale, T>) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
