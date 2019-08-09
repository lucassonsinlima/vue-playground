<template>
  <div class="todo__tasks--item grid--item bg--yellow">
    <span class="title">{{ task.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

$beige: #FAF0CA;
$yellow: #F4D35E;
$orange: #EE964B;
$red: #F95738;

.bg {
  &--beige {
    background: $beige;
  }
  &--yellow {
    background: $yellow;
  }
  &--orange {
    background: $orange;
  }
  &--red {
    background: $red;
  }
}

.title {
  font-weight: 700;
}

</style>
