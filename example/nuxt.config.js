const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{
    handler: require('../'),
    options: {
      endpoint: 'http://localhost/v1',
      project: '60046530a120d'
    }
  }]
}
