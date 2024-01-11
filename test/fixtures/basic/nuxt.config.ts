import type { NuxtModule } from '@nuxt/schema'
import type { ModuleOptions } from '../../../src/module'
import nuxtAppwrite from '../../../src/module'

export default defineNuxtConfig({
  modules: [nuxtAppwrite as NuxtModule<Partial<ModuleOptions>>],
  appwrite: {
    project: 'nuxt-playground'
  }
})
