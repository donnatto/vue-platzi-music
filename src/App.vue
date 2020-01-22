<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Hola Vue.js'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
