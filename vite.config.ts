import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build' // change from 'dist' to 'build'
  },
  plugins: [react()],
})
