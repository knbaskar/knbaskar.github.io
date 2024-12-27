import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // for dev
  server: {
    port: 3001,
    host: true
  },
  resolve: {
    alias: {
      services: "/src/services",
      assets: "/src/assets",
      components: "/src/components",
      context: "/src/context",
      layouts: "/src/layouts",
      subComponents: "/src/subComponents",
      "page.routes": "/src/page.routes"
    },
  },
  define: {
    // Some libraries use the global object, even though it doesn't exist in the browser.
    // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
    // https://github.com/vitejs/vite/discussions/5912
    global: {},
  },
})
