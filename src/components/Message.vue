<template>
  <div class="hello">
    <span v-once>{{ title }}</span>
    <span>{{ greetings() }}</span>
    <a v-bind:href="link">Cat Facts URL</a>
    <span v-html="linkHtml"></span>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      title: 'Its just a title here',
      link: 'https://cat-fact.herokuapp.com/facts',
      linkHtml: `<a href="http://google.com.br"> Gugles </a>`
    }
  },
  methods: {
    greetings(){
      this.title = `Oh gosh another cat`
      return this.title
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

a,span {
  padding: 10px 0;
  display: block;
}
</style>
