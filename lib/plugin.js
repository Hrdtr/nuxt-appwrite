import server from 'nuxt-appwrite/sdk/server'
import client from 'nuxt-appwrite/sdk/client'

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
