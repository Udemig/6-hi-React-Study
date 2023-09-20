import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
const ListTodos = () => {
  const merkeziVeri = useSelector((store) => store.todoReducer);
  console.log(merkeziVeri.todos);
  return (
    <div>
      {merkeziVeri.todos.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
