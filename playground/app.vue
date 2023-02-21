<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { /* useAsyncData,  */useAppwrite } from '#imports';

const { account } = useAppwrite()
// const { data } = await useAsyncData(async () => {
//   const response = await account.get()
//   console.log(response)
//   return response
// })

const user = ref<any>()
onMounted(async () => {
  const response = await account.get()
  user.value = response
})

const email = ref('')
const password = ref('')
const login = async () => {
  const res = await account.createEmailSession(email.value, password.value)
  console.log(res)
}
</script>

<template>
  <div>
    <form @submit.prevent="login">
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

      <pre>
        {{ JSON.stringify(user, null, 2) }}
      </pre>
    </form>
  </div>
</template>
