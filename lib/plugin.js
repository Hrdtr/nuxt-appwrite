import server from './sdk/server.js'
import client from './sdk/client.js'

export default async function (ctx, inject) {
  ctx.$config = ctx.$config || {} // fallback for Nuxt < 2.13
  const runtimeConfig = ctx.$config.appwrite || {}
  
  const endpoint = runtimeConfig.endpoint || '<%= options.endpoint %>'
  const project = runtimeConfig.project || '<%= options.project %>'
  
  inject('appwrite',
    process.server 
      ? server(endpoint, project) 
      : client(endpoint, project)
  )
}
