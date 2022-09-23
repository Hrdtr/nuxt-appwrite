import Appwrite from 'appwrite'

export default (endpoint, project, jwt) => {
  return {
    appwrite: Appwrite,
    client: new Appwrite.Client()
    .setEndpoint(endpoint)
    .setProject(project)
    .setJWT(jwt)
  }
}
