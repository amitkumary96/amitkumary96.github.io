import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
});

export const collections = {
  technical: defineCollection({ schema: postSchema }),
  shayari: defineCollection({ schema: postSchema }),
  news: defineCollection({ schema: postSchema }),
};
