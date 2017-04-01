<template>
  <div>
    <h1>404</h1>
    <h2>Sorry, Page Not Found</h2>
    <a href="" @click="goHome">Go To Home Page</a>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    goHome() {
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 48px;
  }
</style>