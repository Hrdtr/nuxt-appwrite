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
  Users
} from 'node-appwrite'
import { getCookie } from '#build/types/nitro-imports'

export const useAppwriteServer = (event: H3Event<EventHandlerRequest>, jwt?: string) => {
  const config = useRuntimeConfig(event)
  const publicConfig = config.public.appwrite

  const client = new Client()
    .setEndpoint(publicConfig.endpoint)
    .setProject(publicConfig.project)

  const privateConfig = config.appwrite
  const apiKey = jwt || privateConfig.apiKey
  if (apiKey) client.setJWT(apiKey)

  const sessionClient = new Client()
    .setEndpoint(publicConfig.endpoint)
    .setProject(publicConfig.project)

  const session = getCookie(event, 'appwrite_session')
  if (session) sessionClient.setSession(session)

  return {
    config: publicConfig,
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
    service: new Service(client),
    health: new Health(client),
    users: new Users(client),

    AppwriteException,
    Role,
    Permission,
    Query,
    ID,

    session: {
      config: publicConfig,
      client: sessionClient,

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
