import { action } from "easy-peasy";

const model = {
  todos: [
    {
      id: 1,
      title: "try out easy-peasy",
      completed: false,
    },
    {
      id: 2,
      title: "prepare supper",
      completed: true,
    },
    {
      id: 3,
      title: "wash scott",
      completed: true,
    },
  ],

  //Actions
  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id) {
        todo.complete = !todo.completed;
      }
      return todo;
    });
  }),
};
export default model;
