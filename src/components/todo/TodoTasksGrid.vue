<template>
  <section class="todo__tasks--grid grid--column">
    <TodoTasksGridItem :task="task" v-for="task in tasks" :key="task.name" />
  </section>
</template>

<script>
import TodoTasksGridItem from "@/components/todo/TodoTasksGridItem"

export default {
  components: {
    TodoTasksGridItem
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

.grid {
  &--column {
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    align-items: flex-start;
  }

  &--item {
    padding: 10px;
    margin: 10px;
  }
}
</style>
