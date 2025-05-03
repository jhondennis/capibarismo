import type { Locale } from '@/i18n'
import type { NewsDictionaryProps } from '../views/News.astro'

export const newsLocale: Record<Locale, NewsDictionaryProps> = {
  es: {
    sectionNewsProps: {
      readMore: 'Leer más',
    },
  },
  en: {
    sectionNewsProps: {
      readMore: 'Read more',
    },
  },
}
