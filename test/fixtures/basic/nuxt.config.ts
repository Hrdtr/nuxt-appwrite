import { NuxtModule } from '@nuxt/schema'
import nuxtAppwrite, { ModuleOptions } from '../../../src/module'

export default defineNuxtConfig({
  modules: [nuxtAppwrite as NuxtModule<Partial<ModuleOptions>>],
  appwrite: {
    project: 'nuxt-playground'
  }
})
