import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ghezdev.github.io',
  base: '/cv',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
