<template>
  <div class="todo">
    <h1>Todoist</h1>
    <TodoTasksGrid :tasks="tasks" />
  </div>
</template>

<script>
import TodoTasksGrid from "@/components/todo/TodoTasksGrid.vue"

export default {
  components: {
    TodoTasksGrid
  },
  data() {
    return {
      tasks: [
        { name: 'Cook Potatoes', pending: false },
        { name: 'Foo', pending: false },
        { name: 'Making mistakes', pending: false },
        { name: 'Doe', pending: false },
      ]
    }
  },
}
</script>

<style scoped lang="scss">

$green: #38cf9a;
$blue: #00386B;

%bg {
  &--blue {
    background: $blue;
  }
}

%h1 {
  font-size: 40px;
}

h1 {
  @extend %h1;
}

.todo {
  @extend %bg--blue;

  color: #fff;
  height: 100vh;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
