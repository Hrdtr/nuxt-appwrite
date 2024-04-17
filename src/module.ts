import type { CookieSerializeOptions } from 'cookie-es'
import { defineNuxtModule, addPlugin, addImportsDir, createResolver, extendViteConfig } from '@nuxt/kit'

export { useServerSideAppwrite } from './runtime/server'

export interface ModuleOptions {
  endpoint: string,
  project: string,
  cookieSerializeOptions?: Omit<CookieSerializeOptions, 'expires'>
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-appwrite',
    configKey: 'appwrite'
  },
  defaults: {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: '',
    cookieSerializeOptions: {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    }
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    if (!options.project) throw new Error('`appwrite.project` is required')
    nuxt.options.runtimeConfig.public.appwrite = {
      endpoint: options.endpoint,
      project: options.project,
      cookieSerializeOptions: options.cookieSerializeOptions
    }

    // Fix esm error with cross-fetch used by appwrite js sdk
    extendViteConfig((config) => {
      config.optimizeDeps = config.optimizeDeps || {}
      config.optimizeDeps.include = config.optimizeDeps.include || []
      config.optimizeDeps.include.push('cross-fetch')
    })

    addPlugin(resolve('./runtime/plugin'))
    addImportsDir(resolve('./runtime/composables'))

    nuxt.hook('listen', () => {
      console.info(`Appwrite Endpoint: ${options.endpoint}`)
      console.info(`Appwrite Project: ${options.project}`)
    })
  }
})

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    appwrite: {
      apiKey?: string,
    }
  }
  interface PublicRuntimeConfig {
    appwrite: {
      endpoint: string,
      project: string,
      cookieSerializeOptions?: CookieSerializeOptions
    }
  }
}
