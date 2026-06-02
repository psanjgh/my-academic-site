// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  build: {
    inlineStylesheets: 'always'
  },

  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://psanjgh.github.io',
  base: '/my-academic-site',
  integrations: [sitemap()],
  adapter: cloudflare(),
});