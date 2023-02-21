import nuxtAppwrite, { ModuleOptions } from '../../../src/module'
import { NuxtModule } from '@nuxt/schema'

export default defineNuxtConfig({
  modules: [ nuxtAppwrite as NuxtModule<Partial<ModuleOptions>> ],
  appwrite: {
    project: 'nuxt-playground'
  }
})
