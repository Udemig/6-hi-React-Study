import React, { useState } from "react";
import Button, { buttonTypes } from "./Button";
import { useDispatch } from "react-redux";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  console.log(todo);
  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  const updateTodo = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };

    dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
  };
  return (
    <div >
      <h4
        style={{
          fontSize: "45px",
        }}
      >
        {todo.text}
      </h4>
      <h6
        style={{
          fontSize: "30px",
        }}
      >
        {todo.isDone === false ? "Henüz Tamamlanmadı" : "Tamamlandı"}
      </h6>
      <div>
        <Button
          onClick={() => deleteTodo()}
          title={"Sil"}
          type={buttonTypes.DELETE_BUTTON}
          color={"red"}
        />
        <Button
          onClick={() => updateTodo()}
          title={todo.isDone === false ? "Bitir" : "Geri Al"}
          color={"yellow"}
        />
      </div>
    </div>
  );
};

export default TodoCard;
