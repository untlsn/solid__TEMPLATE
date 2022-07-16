import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';
import css from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  ssr: {
    noExternal: ['solid-app-router', 'solid-js/web'],
  },
  resolve: {
    alias: {
      '~/': `${path.join(__dirname, '/src')}/`,
      $css: path.join(__dirname, '/src/assets/style/index.ts'),
    },
  },
  plugins: [
    solidPlugin({ ssr: true }),
    css(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'solid-js',
        'solid-app-router',
      ],
    }),
    Inspect(),
  ],
  server: {
    port: 3333,
  },
  build: {
    target: 'esnext',
  },
});
