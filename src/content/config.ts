import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    lang: z.string(),
  }),
})

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    image: z.string().url(),
    category: z.string(),
    url: z.string(),
    lang: z.string(),
  }),
})

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    embed: z.string(),
    author: z.string(),
    lang: z.string(),
  }),
})

export const collections = {
  about,
  news,
  videos,
}
