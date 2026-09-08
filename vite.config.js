import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  esbuild: {
    drop: ['debugger'],
    pure: ['console.log', 'console.debug', 'console.info'],
  },
  server: {
    port: 3055,
    proxy: {
      '/api': 'http://localhost:8005',
    },
  },
  build: {
    outDir: 'dist',
  },
})
