[![nuxt-appwrite](https://github.com/Hrdtr/nuxt-appwrite/raw/main/docs/static/cover.jpg)](#nuxt-appwrite)
*Cover Image by [@Atinux](https://github.com/Atinux)*

# nuxt-appwrite

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Appwrite is a self-hosted solution that provides developers with a set of easy-to-use and integrate REST APIs to manage their core backend needs. This module is made to connect Appwrite SDKs to Nuxt more easily.

[**Docs**](./README.md)

[**Release Notes**](./CHANGELOG.md)

## Setup

First, add `nuxt-appwrite` dependency to your project

  ```bash
  npx nuxi@latest module add appwrite
  ```

Next, add `nuxt-appwrite` to the `modules` section of `nuxt.config`

  ```js
  export default {
    modules: ['nuxt-appwrite'],
    appwrite: {
      /* module options */
    }
  }
  ```

## Options

### API endpoint - `endpoint`

- type: `String`
- default: `https://cloud.appwrite.io/v1`

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
    endpoint: 'https://cloud.appwrite.io/v1',
    project: 'nuxt-playground',
  }
}
```

## Usage

Using `useAppwrite` composable:

  ```js
  const { account } = useAppwrite()
  try {
    const res = await account.get()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
  ```

### Server Side User Action

Currently Not Supported

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Herdi Tr. <iam@icm.hrdtr.dev>

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