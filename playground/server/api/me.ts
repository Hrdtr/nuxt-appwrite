import { useServerSideAppwrite } from '../../../src/module'
import { defineEventHandler } from '#build/types/nitro-imports'

export default defineEventHandler(async (event) => {
  const { account } = useServerSideAppwrite(event).withSession()
  try {
    const user = await account.get()
    return user
  } catch (e) {
    return null
  }
})
