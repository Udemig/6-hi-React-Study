import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const [text, setText] = useState("");

  //dispatch metodunu kurma

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
        id:new Date().getTime(),
      text,
      isDone:false,
      data:new Date()
    };

    dispatch({ type: "ADD_TODO", payload:newTodo });
    e.target[0].value=''
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      
      style={{
        outline:'none',
        border:'none',
        backgroundColor:'gray',
        padding:'10px',
        borderRadius:'5px'
      }}
      type="text" onChange={(e) => setText(e.target.value)} />
      <Button title={"Todo Ekle"} color={'green'} />
    </form>
  );
};

export default AddForm;
