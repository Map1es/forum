<template>
  <div id="app">
    {{ res }}
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      res: ''
    }
  },
  created() {
    api.getCode().then(res => {
      // console.log(res)
      this.res = res
    })
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
