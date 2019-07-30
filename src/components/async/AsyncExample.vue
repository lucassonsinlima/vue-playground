<template>
  <div class="c-async container">
    <h1>Async Component With Some Random Stuff</h1>

    <div class="c-async__content">
      <span class="text"><strong>Teacher: </strong>{{ teacher }}</span>
      <span class="text"><strong>Subject: </strong>{{ subject }}</span>
      <span class="text"><strong>FullClass: </strong>{{ fullClass }}</span>
    </div>

    <div class="c-async__buttons">
      <button class="btn btn--green" @click="changeTeacher">Change Teacher</button>
      <button class="btn btn--red" @click="changeSubject">Change Subject</button>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      teacher: 'Foo',
      subject: 'Some random subject'
    }
  },
  computed: {
    fullClass(){
      const vm = this

      return `${vm.teacher} teaching ${vm.subject}`
    }
  },
  methods: {
    changeTeacher() {
      this.teacher += "#"
    },
    changeSubject() {
      this.subject += "#"
    },
    changeFullClass() {
      this.fullClass += "#"
    }
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

.c-async {
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
