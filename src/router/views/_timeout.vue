<template>
  <div class="timeout">
    Ooops! Timeout here
  </div>
</template>

<script>

export default {
  page: {
    title: 'Timeout page',
    meta: [{ name: 'description', content: 'Timeout Page' }]
  }
}
</script>

<style scoped lang="scss">
  .timeout {
    padding: 15px;
    background: purple;
  }
</style>
