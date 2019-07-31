<template>
  <div class="eventbus__user table--row" @click="setUser(user)">
    <div class="eventbus__user--id">{{ user.id }}</div>
    <div class="eventbus__user--name">{{ user.login }}</div>
  </div>
</template>

<script>
import eventbus from '@/components/eventbus/eventbus'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    setUser(user){
      const vm = this
      eventbus.setSelectedUser(user)
    }
  }
}
</script>

<style lang="scss">
</style>
