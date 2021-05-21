const { Appwrite } = require('appwrite')

const sdk = (endpoint, project) => {
  return new Appwrite()
    .setEndpoint(endpoint)
    .setProject(project)
}

module.exports = sdk
