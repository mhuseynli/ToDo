export function SET_TODOS(state, payload) {
  state.todos = payload;
}

export function ADD_TODO(state, payload) {
  state.todos.push(payload);
}

export function CHANGE_TODO_STATUS(state, payload) {
  let todo = state.todos[payload.index];
  switch (todo.status) {
    case "done":
      todo.status = "pending";
      break;
    case "pending":
      todo.status = "done";
      break;
  }
}

export function DELETE_TODO(state, payload) {
  state.todos.splice(payload.index, 1);
}
