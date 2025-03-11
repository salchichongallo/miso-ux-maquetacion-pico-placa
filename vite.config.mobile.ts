import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import optimizeLocales from '@react-aria/optimize-locales-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      ...optimizeLocales.vite({ locales: ['es'] }),
      enforce: 'pre',
    },
  ],
  root: 'src/mobile',
  build: {
    outDir: resolve(__dirname, 'dist/mobile'),
  },
});
