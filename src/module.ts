import { defineNuxtModule, addPlugin, addImportsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  endpoint: string,
  projectId: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-appwrite',
    configKey: 'appwrite'
  },
  defaults: {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: ''
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    if (!options.projectId) throw new Error('`appwrite.projectId` is required')
    nuxt.options.runtimeConfig.public.appwrite = options

    addPlugin(resolve('./runtime/plugin'))
    addImportsDir(resolve('./runtime/composables'))
    console.log('added')
  }
})
