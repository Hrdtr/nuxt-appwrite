const cookies = require('cookie-universal')()

export const setJWT = (token) => {
  if (token) {
    cookies.set('appwrite-jwt', token)
  }
}

export const removeJWT = () => {
  cookies.remove('appwrite-jwt')
}
