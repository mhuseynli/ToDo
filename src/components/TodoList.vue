<template>
  <ul
    class="
      w-full
      text-sm
      font-medium
      text-gray-900
      bg-white
      rounded-xl
      border border-gray-200
      dark:bg-gray-700 dark:border-gray-600 dark:text-white
    "
  >
    <li
      class="
        py-2
        px-4
        w-full
        rounded-t-lg
        text-lg
        flex
        items-center
        justify-between
      "
      v-for="(todo, index) in todos"
      :key="index"
    >
      <div>
        <span
          class="text-xs font-semibold px-2.5 py-0.5 rounded"
          :class="{
            'bg-yellow-200': todo.status == 'pending',
            'text-yellow-900': todo.status == 'pending',
            'bg-green-200': todo.status == 'done',
            'text-green-900': todo.status == 'done',
          }"
          >{{ todo.status == "pending" ? "Pending" : "Done" }}</span
        >
        <p>{{ todo.title }}</p>
      </div>
      <div class="flex items-center">
        <input
          :id="index"
          aria-describedby="checkbox-2"
          type="checkbox"
          :checked="todo.status == 'done'"
          @change="onChangeStatus(index)"
          class="
            w-4
            h-4
            text-blue-600
            bg-gray-100
            rounded-xl
            border-gray-300
            focus:ring-blue-500
            dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2
            dark:bg-gray-700 dark:border-gray-600
          "
        />
        <label
          :for="index"
          class="ml-3 mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Done</label
        >
        <button
          @click="onDeleteTodo(index)"
          type="button"
          class="
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm text-center
            p-1
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          "
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("todos", ["todos"]),
  },
  methods: {
    ...mapActions("todos", ["changeTodoStatus", "deleteTodo"]),

    onChangeStatus(index) {
      this.changeTodoStatus({
        index: index,
      });
    },

    onDeleteTodo(index) {
      this.deleteTodo({
        index: index,
      });
    },
  },
};
</script>