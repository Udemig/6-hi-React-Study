import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import axiosInstance from "./../../constants";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  const navigate = useNavigate();

  //key: hangi inputa yazıldığının bilgisi
  //value: inputun içerisindeki değer
  const onInputChange = (key, e) => {
    //console.log(key,e.target.value)
    setForm({ ...form, [key]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.text || !form.title) {
      alert("Tüm Alanları Doldurun");
    }
    axiosInstance.post("posts", form).then((response) => navigate("/"));
  };
  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
