<template>
  <div class="flex items-center">
    <input
      v-model="title"
      type="text"
      id="todo-name"
      class="
        bg-gray-500
        text-white text-sm
        rounded-full
        focus:ring-white
        block
        w-full
        px-4
        py-2.5
        mr-2
      "
      placeholder="To Do Name"
      required
    />
    <button
      @click="onAddTodo"
      type="button"
      class="
        text-white
        bg-purple-700
        hover:bg-purple-800
        focus:ring-4 focus:ring-purple-300
        font-medium
        rounded-full
        text-sm
        px-5
        py-2.5
        text-center
        dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
      "
    >
      Add
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: null,
    };
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),

    onAddTodo() {
      if (this.title != null && this.title.trim() !== "") {
        this.addTodo({
          title: this.title.trim(),
          status: "pending",
        });
        this.title = null;
      }
      this.title = null;
    },
  },
};
</script>