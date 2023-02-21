[![nuxt-appwrite](https://github.com/Hrdtr/nuxt-appwrite/raw/main/docs/static/preview-bg-white.png)](#nuxt-appwrite)

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
  yarn add nuxt-appwrite # or npm install nuxt-appwrite
  ```

Next, add `nuxt-appwrite` to the `modules` section of `nuxt.config.js`

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

Copyright (c) Herdi Tr. <iam@hrdtr.xyz>
