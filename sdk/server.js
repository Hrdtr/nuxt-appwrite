const NodeAppwrite = require('node-appwrite')

const sdk = (endpoint, project) => {
  const client = new NodeAppwrite.Client()
    .setEndpoint(endpoint)
    .setProject(project)
  return {
    users: new NodeAppwrite.Users(client),
    teams: new NodeAppwrite.Teams(client),
    database: new NodeAppwrite.Database(client),
    storage: new NodeAppwrite.Storage(client),
    locale: new NodeAppwrite.Locale(client),
    avatars: new NodeAppwrite.Avatars(client),
    health: new NodeAppwrite.Health(client)
  }
}

module.exports = sdk
