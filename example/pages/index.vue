<template>
  <div>
    <h1>Hrdtr/nuxt-appwrite</h1>
    <h2>options.endpoint</h2>
    <pre>{{ $appwrite.config.endpoint }}</pre>
    <h2>options.project</h2>
    <pre>{{ project }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      endpoint: '',
      project: ''
    }
  }
}
</script>

<style scoped>
div {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
