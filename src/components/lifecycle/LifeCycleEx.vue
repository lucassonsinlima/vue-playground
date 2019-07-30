<template>
  <div class="c-lifecycle container">
    <h1>Lifecycle Component With Some Random Stuff</h1>

    <div class="c-lifecycle__content">
      <span class="text"><strong> {{ title }} </strong></span>
    </div>

    <div class="c-lifecycle__buttons">
      <button class="btn btn--green" @click="changeTitle">Change Title</button>
      <button class="btn btn--red" @click="$destroy()">Destroy</button>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      title: 'Random Title here :)'
    }
  },
  computed: {
  },
  methods: {
    changeTitle() {
      this.title += "#"
    }
  },
  beforeCreate(){
    console.log('before create');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated(){
    console.log('updated');
  },
  beforeDestroy(){
    console.log('beforeDestroy');
  },
  destroyed(){
    console.log('destroyed')
  }
}
</script>

<style scoped lang="scss">

h1 {
  font-weight: 700;
  font-size: 20px;
}

strong {
  font-weight: 700;
}

.c-lifecycle {
  &__content {
    display: flex;
    align-items: center;
    flex-flow: column;
    text-align: left;
  }
  &__buttons {
    display: flex;
    justify-content: center;

    button {
      margin: 10px;
    }
  }
}
</style>
