import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://alebisi.it',
  output: 'server',
  adapter: cloudflare(),
  compressHTML: true,
  build: {
    inlineStylesheets: 'always', // Forza l'inline di tutti i CSS per evitare blocchi
    assetsPrefix: undefined,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      cssMinify: true,
      cssCodeSplit: false, // Un solo file CSS invece di multiple chunks
    },
  },
  integrations: [mdx()],
});

