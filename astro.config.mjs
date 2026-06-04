// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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
  
  // Site URL
  site: 'https://peiyucai.com', 
  
  // Base path (use '/' for root)
  base: '/', 
  
  // Force static output
  output: 'static',

  integrations: [sitemap({
    filter: (page) => !page.includes('/dev-tools/'),
  })],
});