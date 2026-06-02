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

  // 站点信息
  site: 'https://peiyucai.com',

  // 根路径
  base: '/',

  // 强制静态输出
  output: 'static',

  integrations: [sitemap()],
  adapter: cloudflare(),
});