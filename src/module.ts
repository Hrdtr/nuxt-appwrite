import { defineNuxtModule, addPlugin, addImportsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  endpoint: string,
  project: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-appwrite',
    configKey: 'appwrite'
  },
  defaults: {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: ''
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    if (!options.project) throw new Error('`appwrite.project` is required')
    nuxt.options.runtimeConfig.public.appwrite = options

    addPlugin(resolve('./runtime/plugin'))
    addImportsDir(resolve('./runtime/composables'))
    nuxt.hook('listen', () => {
      console.info(`Appwrite Endpoint: ${options.endpoint}`)
      console.info(`Appwrite Project: ${options.project}`)
    })
  }
})
