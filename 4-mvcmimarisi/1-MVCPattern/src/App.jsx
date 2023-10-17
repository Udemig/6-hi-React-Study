import React from "react";
import "./assets/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPostController from "./pages/ListPostPage/ListPostController";
import AddPostController from "./pages/AddPostPage/AddPostController";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<ListPostController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
