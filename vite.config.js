/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import * as path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    createVuePlugin(),
  ],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    port: 8080,
  },
});
