import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";
import rehypeToc from "rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      gfm: true,
      syntaxHighlight: "prism",
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
    }),
    sitemap(),
    tailwind(),
    solidJs({ include: ["**/solid/**"] }),
  ],
});
