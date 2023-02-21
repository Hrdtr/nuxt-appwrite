import { useNuxtApp } from "#app"
import { Appwrite } from "../plugin"

export const useAppwrite = () => {
  const { $appwrite } = useNuxtApp()
  if (!$appwrite) { throw new Error('Appwrite plugin not accessible') }
  return $appwrite as Appwrite
}
