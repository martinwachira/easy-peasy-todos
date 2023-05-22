import React from "react";
import TodoItem from "./TodoItem";
import { useStore } from "easy-peasy";

const Todos = () => {
  const todos = useStore((state) => state.todos);
  return (
    <>
      <h1>Todos</h1>
      <p>Click todo to mark completed</p>
      <hr />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
