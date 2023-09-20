import AddForm from "./components/AddForm";
import { useSelector } from "react-redux";
import ListTodos from "./components/ListTodos";
import React, { useState } from "react";
function App() {
  //store abone olma (Subscribe)
  const merkeziVeri = useSelector((store) => store.todoReducer);

  console.log("asdasd", merkeziVeri.sayi);

  const [todoCount, setTodoCount] = useState(merkeziVeri.sayi);
  return (
    <div>
      <header
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        mevcut todo miktarı: {merkeziVeri.sayi}
      </header>
      <AddForm />
      <ListTodos />
    </div>
  );
}

export default App;
