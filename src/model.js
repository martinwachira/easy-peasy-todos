import { action, thunk } from "easy-peasy";

import { v4 as uuid } from "uuid";

const model = {
  todos: [],
  fetchTodos: thunk(async (actions) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    const todos = await res.json();
    actions.setTodos(todos);
    console.log("todos api", todos);
  }),

  // Actions
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),
  add: action((state, todo) => {
    todo.id = uuid();
    state.todos = [...state.todos, todo];
  }),
  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),

  remove: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
};
export default model;
