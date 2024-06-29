import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  assetsInclude: ["**/*.riv"],
  optimizeDeps: {
    include: ["@rive-app/canvas", "preline"],
  },
  plugins: [
    react(),
    Pages(),
  ],
});
