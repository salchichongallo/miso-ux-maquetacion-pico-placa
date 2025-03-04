import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src/web',
  build: {
    outDir: resolve(__dirname, 'dist/web'),
  },
});
