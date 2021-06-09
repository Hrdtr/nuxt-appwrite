[![nuxt-appwrite](https://github.com/Hrdtr/nuxt-appwrite/raw/main/docs/static/preview-bg-white.png)](#nuxt-appwrite)

# nuxt-appwrite

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Appwrite is a self-hosted solution that provides developers with a set of easy-to-use and integrate REST APIs to manage their core backend needs. This module is made to connect Appwrite SDKs to Nuxt more easily.

[**Docs**](/#)

[**Release Notes**](./CHANGELOG.md)

## Setup

First, add `nuxt-appwrite` dependency to your project

  ```bash
  yarn add nuxt-appwrite # or npm install nuxt-appwrite
  ```

Next, add `nuxt-appwrite` to the `modules` section of `nuxt.config.js`

  ```js
  export default {
    modules: [
      // Simple usage
      'nuxt-appwrite',

      // With options
      ['nuxt-appwrite', { /* module options */ }]
    ]
  }
  ```

  Using top level options

  ```js
  export default {
    modules: [
      'nuxt-appwrite'
    ],
    appwrite: {
      /* module options */
    }
  }
  ```

## Options

### API endpoint - `endpoint`

- type: `String`
- default: `https://appwrite.io/v1`

Appwrite API endpoint (Console -> Project -> Setting -> API Endpoint)

### Project ID - `project`

- type: `String`
- default: `null`

Appwrite project ID (Console -> Project -> Setting -> Project ID)

### Full Example

```js
export default {
  modules: [
    'nuxt-appwrite'
  ],
  appwrite: {
    endpoint: 'https://appwrite.example.com/v1',
    project: '60046530a120d',
  }
}
```

## Usage

Using `this.$appwrite` in nuxt component:

  ```js
  {
    ...
    mounted() {
      try {
        const res = this.$appwrite.database.getDocument(collectionID, documentID)
        this.document = res
      } catch (err) {
        console.log(err.message)
      }
    },
    ...
  }
  ```

Using `$appwrite` in nuxt context:

```js
{
  ...
  async asyncData({ $appwrite }) {
    try {
      const res = await $appwrite.database.getDocument(
        collectionID,
        documentID
      )
      return {
        document: res,
      }
    } catch (err) {
      console.log(err.message)
    }
  },
  ...
}
```

### Server Side User Action

Talking about server-side rendering, when doing SDK calls in your users scope from the server, it is not possible right away, since the HTTP-only cookie used for authentication is saved in the user's browser. That's why the Appwrite Web SDK allows to use JWT for authentication.

Below is an example set JWT using the APIs available in this module (do it directly after the user has successfully logged in):

  ```js
  this.$appwrite.account
    .createJWT()
    .then((response) => {
      console.log(response)
      this.$appwrite.utils.setJWT(response.jwt)
    })
    .catch((error) => {
      console.log(error)
    })
  ```

Once the JWT is set, we can use the user-scoped action on the Nuxt process.server context, asyncData and nuxtServerInit.

Don't forget to remove the JWT after the user logs out

  ```js
  this.$appwrite
    .account.deleteSessions('current')
    .then(() => {
      this.$appwrite.utils.removeJWT()
    }, function (error) {
      console.log(error);
    });
  ```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Herdi Tr. <hrdtr@cognitive.id>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-appwrite/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-appwrite

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-appwrite.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-appwrite

[github-actions-ci-src]: https://github.com/Hrdtr/nuxt-appwrite/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/Hrdtr/nuxt-appwrite/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/Hrdtr/nuxt-appwrite.svg
[codecov-href]: https://codecov.io/gh/Hrdtr/nuxt-appwrite

[license-src]: https://img.shields.io/npm/l/nuxt-appwrite.svg
[license-href]: https://npmjs.com/package/nuxt-appwrite
