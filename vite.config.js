import { defineConfig } from 'vite'

export default defineConfig({
  // Tell Vite where each page of the site lives
  build: {
    rollupOptions: {
      input: {
        main:    'index.html',
        work:    'work.html',
        about:   'about.html',
        contact: 'contact.html',
        // blog: 'blog.html' — uncomment when the blog is ready
      }
    }
  },
  // Tell Vite to treat .riv files as static assets, not code
  assetsInclude: ['**/*.riv']
})