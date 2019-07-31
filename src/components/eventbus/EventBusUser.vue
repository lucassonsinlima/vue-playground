<template>
  <div class="eventbus__user table--row">
    <div class="eventbus__user--id">{{ user.id }}</div>
    <div class="eventbus__user--name">{{ user.login }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>
