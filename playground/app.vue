<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { /* useAsyncData,  */ useAppwrite } from '#imports'

const { account } = useAppwrite()
// const { data } = await useAsyncData(async () => {
//   const response = await account.get()
//   console.log(response)
//   return response
// })

const user = ref<unknown>()
const getAccount = async () => {
  const response = await account.get()
  user.value = response
}
onMounted(getAccount)

const email = ref('')
const password = ref('')
const login = async () => {
  const res = await account.createEmailPasswordSession(
    email.value,
    password.value,
  )
  await getAccount()
  console.log(res)
}
const logout = async () => {
  const res = await account.deleteSession('current')
  user.value = undefined
  console.log(res)
}
</script>

<template>
  <div>
    <form
      v-if="!user"
      @submit.prevent="login"
    >
      <input
        v-model="email"
        placeholder="Email"
        type="email"
      >
      <input
        v-model="password"
        placeholder="Password"
        type="password"
      >
      <button>Login</button>
    </form>
    <button
      v-else
      @click="logout"
    >
      Logout
    </button>

    <pre>{{ JSON.stringify(user, null, 2) }}</pre>
  </div>
</template>
