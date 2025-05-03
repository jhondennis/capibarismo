import type { Locale } from '@/i18n'
import type { VideosDictionaryProps } from '../views/Videos.astro'

export const videosLocale: Record<Locale, VideosDictionaryProps> = {
  es: {
    sectionVideosProps: {
      readMore: 'Leer más',
    },
  },
  en: {
    sectionVideosProps: {
      readMore: 'Read more',
    },
  },
}
