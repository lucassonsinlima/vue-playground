<template>
  <div id="app">
    <link rel="stylesheet"
    href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">

    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  font-size: 16px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  display: inline-block;
  border-bottom: 1px solid;
}
</style>
