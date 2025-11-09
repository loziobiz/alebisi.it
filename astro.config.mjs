import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

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
    build: {
      minify: 'terser',
      cssMinify: true,
      cssCodeSplit: false, // Un solo file CSS invece di multiple chunks
    },
  },
});

