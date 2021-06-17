import { Appwrite } from 'appwrite'

export default (endpoint, project, jwt) => {
  return new Appwrite()
    .setEndpoint(endpoint)
    .setProject(project)
    .setJWT(jwt)
}
