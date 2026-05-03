// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

import cloudflare from '@astrojs/cloudflare';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  vite: {
    plugins: [
      ...(isDev ? [basicSsl()] : []),
      tailwindcss(),
      Icons({
        compiler: 'astro',
      }),
    ],
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
