import { get, setupTest } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    fixture: '../example',
    configFile: 'nuxt.config.js',
    server: true,
    config: {
      appwrite: {
        endpoint: 'http://localhost/v1'
      }
    }
  })

  it('renders', async () => {
    const { body } = await get('/')
    expect(body).toContain('Hrdtr/nuxt-appwrite')
    expect(body).toContain('http://localhost/v1')
  })
})
