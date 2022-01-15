<template>
  <router-view class="container mx-auto p-4 max-w-screen-lg mt-9" />
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.setTodos();
  },
  methods: {
    ...mapActions("todos", ["setTodos"]),
  },
};
</script>