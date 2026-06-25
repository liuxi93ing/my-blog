// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: change to your real domain once deployed (used by sitemap + canonical URLs)
  site: 'https://blog.example.com',

  integrations: [mdx(), react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    // Built-in Shiki highlighting with dual light/dark themes.
    // CSS variables in global.css drive which one shows per `data-theme`.
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: false,
    },
  },
});
