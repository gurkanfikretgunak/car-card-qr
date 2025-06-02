// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://carcardqr.web.app', // Update this with your actual domain
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind()
    // sitemap() - Add this when @astrojs/sitemap is installed
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});
