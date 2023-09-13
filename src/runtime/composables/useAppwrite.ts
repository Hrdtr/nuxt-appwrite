import { Appwrite } from '../plugin'
import { useNuxtApp } from '#app'

export const useAppwrite = () => {
  const { $appwrite } = useNuxtApp()
  if (!$appwrite) { throw new Error('Appwrite plugin not accessible') }
  return $appwrite as Appwrite
}
