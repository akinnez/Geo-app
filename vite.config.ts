/// <reference types="vite" />

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '');
  return {
    publicDir: 'src/assets',
    build: {
      target: ['es2020'],
    },
    server: {
      port: 3001,
      cors: { origin: '*' },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      mainFields: ['module'],
    },
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    plugins: [react()],

    define: {
      // __APP_ENV__: JSON.stringify(env['APP_ENV']),
    },
  };
});
