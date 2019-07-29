<template>
  <div class="loading">
    Hello I'm loading......
  </div>
</template>

<script>
export default {
  page:{
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }]
  }
}
</script>

<style scoped lang="scss">
  .loading {
    padding: 15px;
    background: red;
  }
</style>
