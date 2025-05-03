import type { Locale } from '@/i18n'
import type { HeaderProps } from '../components/Header.astro'
import type { FooterProps } from '../components/Footer.astro'
import { SECTIONS_LINKS } from '@/constants'
import { envs } from '@/envs'

export interface LayoutProps {
  header: Omit<HeaderProps, 'github' | 'hrefBuymeacoffee' | 'buyMeACoffee'>
  footer: Pick<
    FooterProps,
    'title' | 'description' | 'links' | 'connect' | 'rights' | 'poweredby' | 'sections'
  >
}

export const layoutLocale: Record<Locale, LayoutProps> = {
  en: {
    header: {
      title: 'Capibarismo',
      navLinks: [
        {
          href: SECTIONS_LINKS.ABOUT,
          text: 'About Them',
        },
        {
          href: SECTIONS_LINKS.NEWS,
          text: "What's New",
        },
        {
          href: SECTIONS_LINKS.VIDEOS,
          text: 'Cool Videos',
        },
      ],
    },
    footer: {
      title: 'Capibarismo',
      description: 'Capivarismo is your spot for all things capybara and their chill life.',
      links: 'Links',
      connect: 'Chat With Us!',
      rights: 'Capibarismo -Ours, hehe!',
      poweredby: 'Powered by',
      sections: [
        {
          href: SECTIONS_LINKS.ABOUT,
          text: 'About Them',
        },
        {
          href: SECTIONS_LINKS.NEWS,
          text: "What's New",
        },
        {
          href: SECTIONS_LINKS.VIDEOS,
          text: 'Cool Videos',
        },
        {
          href: envs.github,
          text: 'Repo on GitHub',
        },
      ],
    },
  },
  es: {
    header: {
      title: 'Capibarismo',
      navLinks: [
        {
          href: SECTIONS_LINKS.ABOUT,
          text: 'Sobre ellos',
        },
        {
          href: SECTIONS_LINKS.NEWS,
          text: 'Novedades',
        },
        {
          href: SECTIONS_LINKS.VIDEOS,
          text: 'Videos geniales',
        },
      ],
    },
    footer: {
      title: 'Capibarismo',
      description:
        'Capivarismo es el lugar para enterarte de todo sobre los capivaras y su vida relajada.',
      links: 'Links',
      connect: '¡Habla con nosotros!',
      rights: 'Capibarismo - Todo nuestro, jeje.',
      poweredby: 'Powered by',
      sections: [
        {
          href: SECTIONS_LINKS.ABOUT,
          text: 'Sobre ellos',
        },
        {
          href: SECTIONS_LINKS.NEWS,
          text: 'Novedades',
        },
        {
          href: SECTIONS_LINKS.VIDEOS,
          text: 'Videos geniales',
        },
        {
          href: envs.github,
          text: 'Repo en GitHub',
        },
      ],
    },
  },
}
