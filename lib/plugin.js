import sdk from './sdk/web.js'
import * as utils from './utils.js'

export default (ctx, inject) => {
  ctx.$config = ctx.$config || {} // fallback for Nuxt < 2.13
  const cookies = require('cookie-universal')(ctx.req, ctx.res)
  const runtimeConfig = ctx.$config.appwrite || {}
  
  const endpoint = runtimeConfig.endpoint || '<%= options.endpoint %>'
  const project = runtimeConfig.project || '<%= options.project %>'
  const jwt = cookies.get('appwrite-jwt') || ''
  
  inject('appwrite', {
    ...sdk(endpoint, project, jwt),
    utils
  })
}
