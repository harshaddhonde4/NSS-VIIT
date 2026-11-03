import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'bootstrap-vendor': ['bootstrap', 'react-bootstrap'],
          'icons-vendor': ['react-icons'],
          'animations-vendor': ['aos', 'react-countup', 'react-scroll-trigger'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
