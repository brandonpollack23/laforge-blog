import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageSubtext: z.string().optional(),
    minutesRead: z.string().optional(),
  }),
});

const file = defineCollection({
  type: "content",
  schema: z.object({
    filename: z.string(),
    lang: z.string(),
    class: z.string().optional(),
  }),
});

const fileSubtitled = defineCollection({
  type: "content",
  schema: z.object({
    filename: z.string(),
    lang: z.string(),
    class: z.string().optional(),
  }),
});

export const collections = { blog, file, fileSubtitled };
