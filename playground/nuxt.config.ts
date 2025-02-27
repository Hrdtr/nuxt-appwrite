export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-02-27',
  modules: ['../src/module'],
  appwrite: {
    project: 'nuxt-playground',
  },
})
