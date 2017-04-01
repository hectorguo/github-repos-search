<template>
  <div>
    <input class="search-input" type="text" placeholder="Search repository..." v-model="queryTxt">
    <button class="btn" @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      queryTxt: ''
    }
  },
  methods: {
    search() {
      // go to /repos?name=queryTxt
      this.$router.push({ name: 'repos', query: { name: this.queryTxt }});
    }
  }
}
</script>
