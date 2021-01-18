<template>
  <div>
    Works!
  </div>
</template>

<script>
export default {
  asyncData ({ $appwrite }) {
    // eslint-disable-next-line no-console
    console.log($appwrite)
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.$appwrite)
  }
}
</script>
