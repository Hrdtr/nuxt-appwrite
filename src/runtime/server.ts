import type { H3Event, EventHandlerRequest } from 'h3'
import { useRuntimeConfig } from '#app'
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
  Service,
  Health,
  Users,
  type Models
} from 'node-appwrite'
import { getCookie, setCookie, deleteCookie, getHeader } from '#build/types/nitro-imports'

/**
 * Returns an object containing the Appwrite SDK client, account, avatars, database, functions,
 * graphql, locale, storage, teams, messaging, service, health, users, and session objects.
 *
 * @param {H3Event<EventHandlerRequest>} event - The H3 event object.
 * @param {string} [jwt] - An optional JWT token.
 * @return {Object} An object containing the Appwrite SDK client, account, avatars, database, functions,
 * graphql, locale, storage, teams, messaging, service, health, users, and session objects.
 */
export const useServerSideAppwrite = (event: H3Event<EventHandlerRequest>, jwt?: string) => {
  const config = useRuntimeConfig(event)
  const publicConfig = config.public.appwrite

  const client = new Client()
    .setEndpoint(publicConfig.endpoint)
    .setProject(publicConfig.project)

  const privateConfig = config.appwrite
  const apiKey = jwt || privateConfig.apiKey
  if (apiKey) client.setJWT(apiKey)

  const session = {
    /**
     * Sets the session secret and serializes it into a cookie.
     *
     * @param {Models.Session} session - The session object containing the secret and expiration date.
     */
    set: (session: Models.Session) => setCookie(event, 'appwrite_session', session.secret, {
      ...publicConfig.cookieSerializeOptions,
      expires: new Date(session.expire)
    }),
    /**
     * Deletes the session secret cookie.
     */
    unset: () => deleteCookie(event, 'appwrite_session', publicConfig.cookieSerializeOptions)
  }
  return {
    config: publicConfig,
    client,
    session,

    account: new Account(client),
    avatars: new Avatars(client),
    database: new Databases(client),
    functions: new Functions(client),
    graphql: new Graphql(client),
    locale: new Locale(client),
    storage: new Storage(client),
    teams: new Teams(client),
    messaging: new Messaging(client),
    service: new Service(client),
    health: new Health(client),
    users: new Users(client),

    AppwriteException,
    Role,
    Permission,
    Query,
    ID,

    withSession: () => {
      const sessionClient = new Client()
        .setEndpoint(publicConfig.endpoint)
        .setProject(publicConfig.project)

      const session = getCookie(event, 'appwrite_session')
      if (session) sessionClient.setSession(session)
      const userAgent = getHeader(event, 'User-Agent')
      if (userAgent) client.setForwardedUserAgent(userAgent)

      return {
        config: publicConfig,
        client: sessionClient,
        session,

        account: new Account(sessionClient),
        avatars: new Avatars(sessionClient),
        database: new Databases(sessionClient),
        functions: new Functions(sessionClient),
        graphql: new Graphql(sessionClient),
        locale: new Locale(sessionClient),
        storage: new Storage(sessionClient),
        teams: new Teams(sessionClient),
        messaging: new Messaging(sessionClient),

        AppwriteException,
        Role,
        Permission,
        Query,
        ID
      }
    }
  }
}
