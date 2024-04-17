<script setup lang="ts">
import type { Models } from 'appwrite'
import { ref, onMounted } from 'vue'
import { useAsyncData, useAppwrite } from '#imports'

const { account, session } = useAppwrite()
const { data: userAsyncData } = await useAsyncData(async () => {
  const response = await account.get()
  console.info('useAsyncData response:', response)
  return response
})

const userClient = ref<Models.User<Models.Preferences>>()
onMounted(async () => {
  const response = await account.get()
  console.info('onMounted response:', response)
  userClient.value = response
})

const email = ref('')
const password = ref('')
const login = async () => {
  const res = await account.createEmailPasswordSession(email.value, password.value)
  session.set(res.secret)
  const response = await account.get()
  userClient.value = response
}
const logout = async () => {
  await account.deleteSession('current')
  session.unset()
  userClient.value = undefined
}
</script>

<template>
  <div>
    <form v-if="!userClient && !userAsyncData" @submit.prevent="login">
      <input v-model="email" placeholder="Email" type="email">
      <input v-model="password" placeholder="Password" type="password">
      <button>Login</button>
    </form>
    <button v-else @click="logout">
      Logout
    </button>

    <pre>userClient</pre>
    <pre>{{ JSON.stringify(userClient, null, 2) }}</pre>
    <pre>userAsyncData</pre>
    <pre>{{ JSON.stringify(userAsyncData, null, 2) }}</pre>
  </div>
</template>
