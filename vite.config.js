// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gemini-clone/', // 👈 your repo name
  plugins: [react()],
})
