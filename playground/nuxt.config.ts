export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['../src/module'],
  appwrite: {
    project: 'nuxt-playground',
  },
})
