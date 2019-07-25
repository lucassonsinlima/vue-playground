<template>
  <div id="app">
    <!-- <Message/> -->
    <CandidatesProfile/>
  </div>
</template>

<script>
import CandidatesProfile from './components/candidates/CandidatesProfile.vue'
// import Message from './components/Message.vue'
// import Cats from './components/Cats.vue'

export default {
  name: 'app',
  components: {
    // Message,
    CandidatesProfile
    // Cats
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
</style>
