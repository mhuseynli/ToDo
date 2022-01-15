export function setTodos({ commit }) {
  if (localStorage.getItem("todos") === null) {
    commit("SET_TODOS", []);
  } else {
    const todos = JSON.parse(localStorage.getItem("todos"));
    commit("SET_TODOS", todos);
  }
}

export function addTodo({ commit }, payload) {
  if (payload) {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([payload]));
    } else {
      let todos = JSON.parse(localStorage.getItem("todos"));
      todos.push(payload);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    commit("ADD_TODO", payload);
  }
}

export function changeTodoStatus({ commit }, payload) {
  if (payload) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    switch (todos[payload.index].status) {
      case "done":
        todos[payload.index].status = "pending";
        break;
      case "pending":
        todos[payload.index].status = "done";
        break;
    }

    localStorage.setItem("todos", JSON.stringify(todos));

    commit("CHANGE_TODO_STATUS", payload);
  }
}

export function deleteTodo({ commit }, payload) {
  if (payload) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(payload.index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));

    commit("DELETE_TODO", payload);
  }
}
