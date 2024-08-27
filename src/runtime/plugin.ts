import {
  Client,
  Account,
  AppwriteException,
  Avatars,
  Databases,
  Functions,
  Graphql,
  ID,
  Locale,
  Permission,
  Query,
  Role,
  Storage,
  Teams,
  Messaging,
} from 'appwrite'
import { defineNuxtPlugin } from '#app'

export type AppwriteConfig = {
  endpoint: string
  project: string
}

export type Appwrite = {
  config: AppwriteConfig
  client: Client

  account: Account
  avatars: Avatars
  database: Databases
  functions: Functions
  graphql: Graphql
  locale: Locale
  storage: Storage
  teams: Teams
  messaging: Messaging

  Permission: typeof Permission
  Query: typeof Query
  Role: typeof Role
  AppwriteException: typeof AppwriteException
  ID: typeof ID
}

export default defineNuxtPlugin((nuxtApp) => {
  const moduleOptions = nuxtApp.$config.public.appwrite
  const config: AppwriteConfig = {
    endpoint: moduleOptions.endpoint || 'https://cloud.appwrite.io/v1',
    project: moduleOptions.project,
  }
  const client = new Client()
  client.setEndpoint(config.endpoint)
  client.setProject(config.project)

  return {
    provide: {
      appwrite: {
        config,
        client,

        account: new Account(client),
        avatars: new Avatars(client),
        database: new Databases(client),
        functions: new Functions(client),
        graphql: new Graphql(client),
        locale: new Locale(client),
        storage: new Storage(client),
        teams: new Teams(client),
        messaging: new Messaging(client),

        Permission,
        Query,
        Role,
        AppwriteException,
        ID,
      },
    },
  }
})

declare module '#imports' {
  interface NuxtApp {
    $appwrite: Appwrite
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $appwrite: Appwrite
  }
}
