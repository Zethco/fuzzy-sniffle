import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), tailwind()],
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true },
  }),
});
