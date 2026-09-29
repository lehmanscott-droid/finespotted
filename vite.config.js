import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` makes every asset URL relative, so the same build works when
// served from a domain root (Vercel, Netlify, a custom domain) AND from a
// GitHub Pages project path like https://<user>.github.io/finespotted/.
// This is a single page with no client-side routing, so relative paths are safe.
export default defineConfig({
  base: './',
  plugins: [react()],
})
