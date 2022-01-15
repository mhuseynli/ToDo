<template>
  <div class="home">
    <h1 class="font-semibold text-white text-3xl mb-4">Add new To Do</h1>
    <AddTodo class="mb-6" />
    <TodoList />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  name: "Home",
  components: {
    AddTodo,
    TodoList
  },
};
</script>
