export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  plugins: ['~/plugins/vuetify.ts'],
  compatibilityDate: '2025-01-28',
});