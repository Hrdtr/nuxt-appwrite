import { useNuxtApp } from '#imports'

/**
 * Returns the Appwrite instance from the Nuxt app context.
 *
 * @return {Appwrite} The Appwrite instance.
 * @throws {Error} If the Appwrite plugin is not accessible.
 */
export const useAppwrite = () => {
  const { $appwrite } = useNuxtApp()
  if (!$appwrite) { throw new Error('Appwrite plugin not accessible') }
  return $appwrite
}
