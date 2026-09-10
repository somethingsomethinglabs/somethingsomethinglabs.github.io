import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import { sites } from '@openai/sites-vite-plugin';

export default defineConfig({
  site: 'https://somethingsomethinglabs.com',
  output: 'static',
  outDir: './dist/client',
  integrations: [svelte()],
  vite: {
    plugins: [sites()],
    server: {
      allowedHosts: ['terminal.local'],
    },
  },
});
