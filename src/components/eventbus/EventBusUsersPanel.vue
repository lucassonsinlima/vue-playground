<template>
  <div class="eventbus__panel">
    <div class="" v-if="user">
      <ul>
        <li><strong>ID: {{ user.id }}</strong></li>
        <li><strong>Login: {{ user.login }}</strong></li>
      </ul>
    </div>
    <div class="" v-else>
      <h2>User not selected.</h2>
    </div>
  </div>
</template>

<script>

import eventbus from '@/components/eventbus/eventbus'

export default {
  data() {
    return {
      user: null
    }
  },

  methods: {

  },
  created(){
    const vm = this
    eventbus.onUserSelect(user => {
      vm.user = user
    })
  }
}
</script>

<style lang="scss">

.eventbus {
  &__panel {
    border: 1px solid #eee;
  }
}

</style>
