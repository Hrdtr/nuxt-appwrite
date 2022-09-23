import Appwrite from 'appwrite'

export default (endpoint, project, jwt) => {
  const client  = new Appwrite.Client()
                        .setEndpoint(endpoint)
                        .setProject(project)
                        .setJWT(jwt)
  return {
    appwrite: Appwrite,
    client: client,
    account: new Appwrite.Account(client),
    query: Appwrite.Query,
    avatars: new Appwrite.Avatars(client),
    database: new Appwrite.Databases(client),
    functions: new Appwrite.Functions(client),
    locale: new Appwrite.Locale(client),
    storage: new Appwrite.Storage(client),
    teams: new Appwrite.Teams(client),
    permission: Appwrite.Permission,
    role: Appwrite.Role,
    ID: Appwrite.ID,
  }
}
