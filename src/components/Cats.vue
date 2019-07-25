<template>
  <section class='c-cats'>
    <article class="c-cats__item" v-for="info in catInfos" v-bind:key="info.id">
      <div>{{ info.text }}</div>
    </article>
  </section>
</template>
<script>
export default {
  name: 'Cats',
  methods: {
    fetchCats(){
      const api = `https://cat-fact.herokuapp.com/facts`
      return fetch(api)
    }
  }
}
</script>

<style scoped>
.c-cats {
  border: 1px solid red;
  padding: 15px;
}

.c-cats__item {
  border: 1px solid yellow;
  margin: 10px 0;
  padding: 10px;
}
</style>
