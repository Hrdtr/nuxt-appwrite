import {Client, Account, Avatars, Query, Databases, Functions, Locale, Storage, Teams, Permission, Role, ID} from 'appwrite'

export default (endpoint, project, jwt) => {
  const client  = new Client()
                        .setEndpoint(endpoint)
                        .setProject(project)
                        .setJWT(jwt)
  return {
    client: client,
    account: new Account(client),
    query: Query,
    avatars: new Avatars(client),
    database: new Databases(client),
    functions: new Functions(client),
    locale: new Locale(client),
    storage: new Storage(client),
    teams: new Teams(client),
    permission: Permission,
    role: Role,
    ID: ID,
  }
}
