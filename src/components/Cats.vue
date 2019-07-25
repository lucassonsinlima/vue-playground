<template>
  <section class='c-cats'>
    <a v-bind:href="link">cat facts</a>
    <button v-on:click='fetchCats()'></button>
    <article class="c-cats__item" v-for="cat in cats" v-bind:key="cat.id">
      <div>{{ cat.text }}</div>
    </article>
  </section>
</template>
<script>
export default {
  name: 'Cats',
  data() {
    return {
      cats: [],
      link: 'https://cat-fact.herokuapp.com'
    }
  },
  methods: {
    fetchCats(){
      const vm = this
      const api = `https://cat-fact.herokuapp.com`
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
