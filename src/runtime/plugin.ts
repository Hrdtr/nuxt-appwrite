import {
  Client,
  Account,
  Avatars,
  Databases,
  Functions,
  Graphql,
  Locale,
  Storage,
  Teams,
  Messaging,
  AppwriteException,
  Role,
  Permission,
  Query,
  ID,
  type Models
} from 'appwrite'
import { defineNuxtPlugin, useCookie } from '#imports'

export type AppwriteConfig = {
  endpoint: string;
  project: string;
};

export type Appwrite = {
  config: AppwriteConfig;
  client: Client;
  session: {
    set: (sessionSecret: string) => void;
    unset: () => void;
  }

  account: Account;
  avatars: Avatars;
  database: Databases;
  functions: Functions;
  graphql: Graphql;
  locale: Locale;
  storage: Storage;
  teams: Teams;
  messaging: Messaging,

  AppwriteException: typeof AppwriteException;
  Role: typeof Role;
  Permission: typeof Permission;
  Query: typeof Query;
  ID: typeof ID;
};

export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config.public.appwrite
  const sessionCookie = useCookie<string | null>('appwrite_session', config.cookieSerializeOptions)
  const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.project)
  if (sessionCookie.value) client.setSession(sessionCookie.value)

  return {
    provide: {
      appwrite: {
        config,
        client,
        session: {
          /**
           * Sets the session secret and serializes it into a cookie.
           *
           * @param {Models.Session} session - The session object containing the secret and expiration date.
           */
          set: (session: Models.Session) => {
            sessionCookie.value = session.secret
            console.log('session.secret:', session.secret)
            console.log('sessionCookie.value:', sessionCookie.value)
          },
          /**
           * Deletes the session secret cookie.
           */
          unset: () => {
            sessionCookie.value = null
          }
        },

        account: new Account(client),
        avatars: new Avatars(client),
        database: new Databases(client),
        functions: new Functions(client),
        graphql: new Graphql(client),
        locale: new Locale(client),
        storage: new Storage(client),
        teams: new Teams(client),
        messaging: new Messaging(client),

        AppwriteException,
        Role,
        Permission,
        Query,
        ID
      }
    }
  }
})

declare module '#app' {
  interface NuxtApp {
    $appwrite: Appwrite;
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $appwrite: Appwrite;
  }
}
