import { defineNuxtModule, addPlugin, addImportsDir, createResolver } from '@nuxt/kit'
import type { AppwriteConfig } from './runtime/plugin'

export type {
  Models,
  AuthenticationFactor,
  AuthenticatorType,
  Browser,
  CreditCard,
  ExecutionMethod,
  Flag,
  ImageFormat,
  ImageGravity,
  OAuthProvider,
  Payload,
  QueryTypes,
  QueryTypesList,
  RealtimeResponseEvent,
  UploadProgress,
} from 'appwrite'

export type { AppwriteConfig }
export interface ModuleOptions extends AppwriteConfig {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-appwrite',
    configKey: 'appwrite',
  },
  defaults: {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: '',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    if (!options.project) {
      console.error('`appwrite.project` is required')
    }
    nuxt.options.runtimeConfig.public.appwrite = options

    addPlugin(resolve('./runtime/plugin'))
    addImportsDir(resolve('./runtime/composables'))

    nuxt.hook('listen', () => {
      console.info(`Appwrite Endpoint: ${options.endpoint}`)
      console.info(`Appwrite Project: ${options.project}`)
      if(options.locale){
        console.info(`Appwrite Locale: ${options.locale}`)
      }
    })
  },
})
