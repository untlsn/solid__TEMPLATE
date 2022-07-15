import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';
import css from 'unocss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.join(__dirname, '/src')}/`,
      $css: path.join(__dirname, '/src/assets/style/index.ts'),
    },
  },
  plugins: [
    solidPlugin(),
    css(),
  ],
  server: {
    port: 3333,
  },
  build: {
    target: 'esnext',
  },
});
