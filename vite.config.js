import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/portofolio/' → for project page (azrialahmad.github.io/portofolio/)
// base: '/'            → for custom domain (currently active)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
