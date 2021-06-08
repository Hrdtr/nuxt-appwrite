const { resolve, join } = require('path')
const defu = require('defu')

const defaults = {
  endpoint: process.env.APPWRITE_ENDPOINT || 'https://appwrite.io/v1',
  project: process.env.APPWRITE_PROJECT || null
}

module.exports = function (moduleOptions) {
  const { nuxt } = this
  const options = defu(moduleOptions, nuxt.options.appwrite, defaults)

  nuxt.options.publicRuntimeConfig = nuxt.options.publicRuntimeConfig || {}
  nuxt.options.publicRuntimeConfig.appwrite = nuxt.options.publicRuntimeConfig.appwrite || {}
  nuxt.options.publicRuntimeConfig.appwrite.endpoint = options.endpoint
  nuxt.options.publicRuntimeConfig.appwrite.project = options.project

  this.addTemplate({
    src: join(__dirname, 'sdk', 'web.js'),
    fileName: 'appwrite/sdk/web.js'
  })
  this.addTemplate({
    src: join(__dirname, 'utils.js'),
    fileName: 'appwrite/utils.js'
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'appwrite/plugin.js',
    options
  })

  nuxt.hook('listen', () => {
    nuxt.options.cli.badgeMessages.push(
      `Appwrite Endpoint: ${options.endpoint}`
    )
    nuxt.options.cli.badgeMessages.push(`Appwrite Project: ${options.project}`)
  })
}

module.exports.meta = require('../package.json')
