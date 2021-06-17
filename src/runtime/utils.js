import Cookie from 'cookie-universal'

const cookies = Cookie()

export const setJWT = (token) => {
  if (token) {
    cookies.set('appwrite-jwt', token)
  }
}

export const removeJWT = () => {
  cookies.remove('appwrite-jwt')
}
