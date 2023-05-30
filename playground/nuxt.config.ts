export default defineNuxtConfig({
  modules: ['../src/module'],
  appwrite: {
    project: 'nuxt-playground'
  },
  typescript: {
    shim: false
  }
})
