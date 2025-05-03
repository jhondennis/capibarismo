import type { Locale } from '@/i18n'
import type { HomeDictionaryProps } from '../views/Home.astro'

export const homeLocale: Record<Locale, HomeDictionaryProps> = {
  es: {
    sectionHeroProps: {
      welcome: '¡Hola, amante de los capivaras!',
      titleFirst: 'Explora el',
      titleHighlight: 'Capivarismo',
      titleSecond: 'y su vida divertida',
      description:
        '¡Sumérgete en el mundo de los capivaras! Son los roedores más grandes y amistosos que existen. Descubre dónde viven, qué hacen y por qué todos los quieren tanto.',
      buttonPrimary: '¡A explorar!',
      buttonSecondary: 'Mira las noticias',
      updated: 'Última movida',
      heroScroll: '¡Baja y descubre más!',
      heroCardLove: '¡Los capivaras molan!',
    },
    sectionAboutProps: {
      title: 'Todo sobre los capivaras',
      subtitle: '¡Entérate de la vida de estos animales súper geniales!',
      whatTitle: '¿Qué son los capivaras?',
      whatDescription1:
        'Los capivaras son los roedores más grandes del planeta, ¡vienen de Sudamérica! Pueden pesar un montón (hasta 65 kg) y son largos como un metro y pico.',
      whatDescription2:
        'Son súper sociables, viven en pandillas de 10-20 cerca del agua y son amigos de todos. ¡Siempre están chill!',
      whatScientific: 'Nombre pro',
      whatScientificValue: 'Hydrochoerus hydrochaeris',
      aboutMore: '¡Sigue explorando abajo!',
      facts: [
        {
          icon: 'water',
          title: 'Nadan como pros',
          description: '¡Son cracks en el agua! Pueden estar bajo el agua hasta 5 minutos.',
        },
        {
          icon: 'users',
          title: 'Súper amigos',
          description: 'Les encanta estar en grupo y hacer amigos con otros animales.',
        },
        {
          icon: 'leaf',
          title: 'Fan de las plantas',
          description: 'Comen hierba, plantas de agua y frutas. ¡Nada de carne!',
        },
        {
          icon: 'heart',
          title: 'Pura buena onda',
          description: 'Son tranquilos y se llevan bien con todos. ¡Un amor!',
        },
      ],
    },
    sectionNewsProps: {
      title: 'Novedades del Capivarismo',
      subtitle: '¡Entérate de lo último sobre estos capis adorables!',
      viewAll: 'Ver todo el chisme',

      newsLetterTitle: '¡Únete al club capi!',
      newsLetterDescription: 'Recibe noticias y cositas cool de capivaras en tu correo.',
      newsLetterPrivacy: 'Tranqui, no molestamos. Puedes salir cuando quieras.',
      newsLetterEmail: 'Tu correo',
      newsLetterSubscribe: '¡Me apunto!',
      readMore: 'Leer más',
    },
    sectionVideosProps: {
      title: 'Videos de capivaras',
      subtitle: '¡Mira los mejores videos de capis en TikTok y YouTube!',
      viewAll: 'Ver todos los videos',
      readMore: 'Leer más',
    },
  },
  en: {
    sectionHeroProps: {
      welcome: 'Hello, capybara lover!',
      titleFirst: 'Explore',
      titleHighlight: 'Capybarism',
      titleSecond: 'and their fun life',
      description:
        'Dive into the world of capybaras! They’re the largest and friendliest rodents out there. Discover where they live, what they do, and why everyone loves them so much.',
      buttonPrimary: 'Let’s explore!',
      buttonSecondary: 'Check the news',
      updated: 'Latest scoop',
      heroScroll: 'Scroll down to discover more!',
      heroCardLove: 'Capybaras rock!',
    },
    sectionAboutProps: {
      title: 'All about capybaras',
      subtitle: 'Get the scoop on these super cool animals!',
      whatTitle: 'What are capybaras?',
      whatDescription1:
        'Capybaras are the largest rodents on the planet, hailing from South America! They can weigh up to 65 kg and stretch over a meter long.',
      whatDescription2:
        'They’re super social, living in groups of 10-20 near water, and they’re friends with everyone. Always chilling!',
      whatScientific: 'Scientific name',
      whatScientificValue: 'Hydrochoerus hydrochaeris',
      aboutMore: 'Keep exploring below!',
      facts: [
        {
          icon: 'water',
          title: 'Swim like pros',
          description: 'They’re water champs! They can stay underwater for up to 5 minutes.',
        },
        {
          icon: 'users',
          title: 'Super friendly',
          description: 'They love hanging out in groups and making friends with other animals.',
        },
        {
          icon: 'leaf',
          title: 'Plant fans',
          description: 'They munch on grass, water plants, and fruits. No meat for them!',
        },
        {
          icon: 'heart',
          title: 'Pure good vibes',
          description: 'They’re chill and get along with everyone. Total sweethearts!',
        },
      ],
    },
    sectionNewsProps: {
      title: 'Capybara News',
      subtitle: 'Stay updated on these adorable capys!',
      viewAll: 'See all the buzz',
      newsLetterTitle: 'Join the capy club!',
      newsLetterDescription: 'Get capybara news and cool stuff straight to your inbox.',
      newsLetterPrivacy: 'No worries, we won’t spam. Unsubscribe anytime.',
      newsLetterEmail: 'Your email',
      newsLetterSubscribe: 'Sign me up!',
      readMore: 'Read more',
    },
    sectionVideosProps: {
      title: 'Capybara Videos',
      subtitle: 'Check out the best capy videos on TikTok and YouTube!',
      viewAll: 'See all videos',
      readMore: 'Read more',
    },
  },
}
