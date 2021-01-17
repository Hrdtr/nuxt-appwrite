const { resolve } = require('path')
const defu = require('defu')
const sdk = require('../sdk/server')

const defaults = {
  endpoint: process.env.APPWRITE_ENDPOINT || 'https://appwrite.io/v1',
  project: process.env.APPWRITE_PROJECT || null
}

module.exports = function (moduleOptions) {
  const { nuxt } = this

  const options = defu(moduleOptions, nuxt.options.appwrite, defaults)

  nuxt.options.publicRuntimeConfig = nuxt.options.publicRuntimeConfig || {}
  nuxt.options.publicRuntimeConfig.appwrite = nuxt.options.publicRuntimeConfig.strapi || {}
  nuxt.options.publicRuntimeConfig.appwrite.endpoint = options.endpoint
  nuxt.options.publicRuntimeConfig.appwrite.project = options.project

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-appwrite.js',
    options
  })

  this.extendBuild((config, { isClient }) => {
    if (isClient) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }
  })

  nuxt.hook('listen', (server, { port }) => {
    nuxt.options.cli.badgeMessages.push(
      `Appwrite Endpoint: ${options.endpoint}`
    )
    nuxt.options.cli.badgeMessages.push(
      `Appwrite Project: ${options.project}`
    )
  })

  nuxt.hook('vue-renderer:ssr:prepareContext', (ssrContext) => {
    ssrContext.$appwrite = sdk(options.endpoint, options.project)
  })
}

module.exports.meta = require('../package.json')
