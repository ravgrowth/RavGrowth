import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.md'],
  server: {
    proxy: {
      '/api': 'http://localhost:5173' // or wherever your backend runs
    }
  }
})
