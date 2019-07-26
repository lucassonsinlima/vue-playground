<template>
  <div class="conditional">
    <p v-if="logged">User Logged as {{ name }}</p>
    <p v-else-if="anonymous">Anonymous</p>
    <p v-else>No user logged</p>
    <button @click="logged = !logged">
      {{ logged ? 'Log out' : 'Login' }}
    </button>
    <input type="checkbox" v-model="anonymous">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John doe',
      logged: false,
      anonymous: false
    }
  },
}
</script>

<style lang="scss">

</style>
