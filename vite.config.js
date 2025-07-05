import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression(),
  ],
  base: '/',
  assetsInclude: ['**/*.md'],
  server: {
    proxy: {
      '/api': 'http://localhost:5173'
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          filename: 'stats.html',
          gzipSize: true,
          brotliSize: true
        })
      ]
    }
  }
})
