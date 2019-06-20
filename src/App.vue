<template>
  <div id="app">
    <img src="./assets/logo.png">
    <cd-button></cd-button>
    <router-view/>
  </div>
</template>

<script>
import cdButton from './components/button/button'
export default {
  name: 'App',
  components: {
    cdButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
