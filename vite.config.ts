import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // suzukiyo.github.io is a user page served from the domain root.
  base: '/',
  plugins: [react(), tailwindcss()],
})
