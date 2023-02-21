export default defineNuxtConfig({
  modules: ['../src/module'],
  appwrite: {
    projectId: 'nuxt-playground',
  },
  typescript: {
    shim: false
  }
})
