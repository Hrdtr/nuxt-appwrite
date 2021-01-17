# nuxt-appwrite

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Appwrite module for Nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-appwrite` dependency to your project

```bash
yarn add nuxt-appwrite # or npm install nuxt-appwrite
```

2. Add `nuxt-appwrite` to the `modules` section of `nuxt.config.js`

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

### Using top level options

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

#### API endpoint - `endpoint`

- type: `String`
- default: `https://appwrite.io/v1`

Appwrite API endpoint _(Console -> Project -> Setting -> API Endpoint)_

#### Project ID - `project`

- type: `String`
- default: `null`

Appwrite project ID _(Console -> Project -> Setting -> Project ID)_

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

1. Inject the module in your `nuxt.config.js` file. See [Setup](#Setup).
2. Use `this.$appwrite` in nuxt component:

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

3. Use `$appwrite` in nuxt context:

```js
{
  ...
  async asyncData({ $appwrite }) {
    try {
      const res = await $appwrite.locale.getDocument(
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
