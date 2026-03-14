import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// NOTE: Change `base` to '/' if deploying to username.github.io (user site)
// or keep as '/portofolio/' if deploying to a project page (github.com/user/portofolio)
export default defineConfig({
  plugins: [react()],
  base: '/portofolio/',
})
