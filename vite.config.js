import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/portfolio-2025/',

  // for development purpose
  // server: { 
  // host: true, 
  // }
})
