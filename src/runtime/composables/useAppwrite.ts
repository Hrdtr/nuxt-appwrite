import { useNuxtApp } from "#app"

export default () => {
  const { $appwrite } = useNuxtApp()
  if (!$appwrite) { throw new Error('Appwrite plugin not accessible') }
  return $appwrite
}
