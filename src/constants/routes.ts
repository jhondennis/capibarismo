// Rutas base
export const ROUTES = {
  HOME: '/',
  NEWS: '/news',
  VIDEOS: '/videos',
} as const

// Función helper para construir rutas con idioma
export const getLocalizedRoute = (route: string, lang: string) => {
  if (lang === 'es') return route
  return `/${lang}${route}`
}
