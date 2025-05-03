import type { Locale } from '@/i18n'
import type { HomeProps } from '../views/Home.astro'

export const homeLocale: Record<Locale, HomeProps> = {
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
      lang: 'es',

      newsLetterTitle: '¡Únete al club capi!',
      newsLetterDescription: 'Recibe noticias y cositas cool de capivaras en tu correo.',
      newsLetterPrivacy: 'Tranqui, no molestamos. Puedes salir cuando quieras.',
      newsLetterEmail: 'Tu correo',
      newsLetterSubscribe: '¡Me apunto!',

      news: [
        {
          title: 'Capivaras: las estrellas de Internet',
          excerpt: 'Estos cuties están arrasando en redes con videos mega divertidos!',
          date: '2024-03-10',
          image: 'https://i.pinimg.com/736x/eb/eb/b7/ebebb71e0bbc0e86ac548416b1f16f09.jpg',
          category: 'Vida capi',
          url: '#',
          readMore: 'Leer más',
        },
        {
          title: '¡Más zonas seguras para capivaras en Brasil!',
          excerpt: 'Brasil está cuidando a los capis con nuevas áreas protegidas en la selva.',
          date: '2024-03-20',
          image: 'https://i.pinimg.com/736x/eb/eb/b7/ebebb71e0bbc0e86ac548416b1f16f09.jpg',
          category: 'Cuidarlos',
          url: '#',
          readMore: 'Leer más',
        },
        {
          title: '¡Los capivaras son súper listos!',
          excerpt: 'Un estudio dice que los capis reconocen a un montón de amigos.',
          date: '2024-03-15',
          image: 'https://i.pinimg.com/736x/eb/eb/b7/ebebb71e0bbc0e86ac548416b1f16f09.jpg',
          category: 'Descubrimientos',
          url: '#',
          readMore: 'Leer más',
        },
      ],
    },
    sectionVideosProps: {
      title: 'Videos de capivaras',
      subtitle: '¡Mira los mejores videos de capis en TikTok y YouTube!',
      moreTikTok: 'Más en TikTok',
      hrefTikTok: 'https://tiktok.com/tag/capybara',

      videos: [
        {
          title: 'Capivaras chilling en aguas calientes',
          description: 'Estos capis se relajan a tope en aguas termales japonesas.',
          embedIdYoutube: 'dQw4w9WgXcQ',
          author: '@capybaraworld',
          viewsYoutube: '1.2M',
          viewText: 'vistas',
        },
        {
          title: 'Bebés capi jugando en el agua',
          description: '¡Pequeños capivaras nadando y pasándola genial en un charco!',
          embedIdYoutube: 'dQw4w9WgXcQ',
          author: '@capylovers',
          viewsYoutube: '856K',
          viewText: 'vistas',
        },
        {
          title: 'Capivaras haciendo amigos',
          description: '¡Mira cómo los capis se llevan bien con un montón de animales!',
          embedIdYoutube: 'dQw4w9WgXcQ',
          author: '@wildlifefacts',
          viewsYoutube: '543K',
          viewText: 'vistas',
        },
      ],
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
      lang: 'en',
      newsLetterTitle: 'Join the capy club!',
      newsLetterDescription: 'Get capybara news and cool stuff straight to your inbox.',
      newsLetterPrivacy: 'No worries, we won’t spam. Unsubscribe anytime.',
      newsLetterEmail: 'Your email',
      newsLetterSubscribe: 'Sign me up!',
      news: [
        {
          title: 'Capybaras: Internet stars',
          excerpt: 'These cuties are taking over social media with super fun videos!',
          date: '2024-03-10',
          image: 'https://i.pinimg.com/736x/eb/eb/b7/ebebb71e0bbc0e86ac548416b1f16f09.jpg',
          category: 'Capy life',
          url: '#',
          readMore: 'Read more',
        },
        {
          title: 'More safe zones for capybaras in Brazil!',
          excerpt: 'Brazil is protecting capys with new safe areas in the jungle.',
          date: '2024-03-20',
          image: 'https://i.pinimg.com/736x/eb/eb/b7/ebebb71e0bbc0e86ac548416b1f16f09.jpg',
          category: 'Conservation',
          url: '#',
          readMore: 'Read more',
        },
        {
          title: 'Capybaras are super smart!',
          excerpt: 'A study says capys can recognize tons of friends.',
          date: '2024-03-15',
          image: 'https://i.pinimg.com/736x/eb/eb/b7/ebebb71e0bbc0e86ac548416b1f16f09.jpg',
          category: 'Discoveries',
          url: '#',
          readMore: 'Read more',
        },
      ],
    },
    sectionVideosProps: {
      title: 'Capybara Videos',
      subtitle: 'Check out the best capy videos on TikTok and YouTube!',
      moreTikTok: 'More on TikTok',
      hrefTikTok: 'https://tiktok.com/tag/capybara',
      videos: [
        {
          title: 'Capybaras chilling in hot springs',
          description: 'These capys are relaxing big time in Japanese hot springs.',
          embedIdYoutube: 'dQw4w9WgXcQ',
          author: '@capybaraworld',
          viewsYoutube: '1.2M',
          viewText: 'views',
        },
        {
          title: 'Baby capys playing in water',
          description: 'Tiny capybaras swimming and having a blast in a puddle!',
          embedIdYoutube: 'dQw4w9WgXcQ',
          author: '@capylovers',
          viewsYoutube: '856K',
          viewText: 'views',
        },
        {
          title: 'Capybaras making friends',
          description: 'Watch capys buddy up with all sorts of animals!',
          embedIdYoutube: 'dQw4w9WgXcQ',
          author: '@wildlifefacts',
          viewsYoutube: '543K',
          viewText: 'views',
        },
      ],
    },
  },
}
