import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FSAD-review1/',   // ✅ EXACT repo name
  plugins: [react()],
})