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
  
  // 填入你现在的测试网址，等要绑定独立域名时再改成 peiyucai.com
  site: 'https://my-academic-site.cpyexp.workers.dev', 
  
  // 根路径
  base: '/', 
  
  // 强制静态输出
  output: 'static',

  integrations: [sitemap()],
});