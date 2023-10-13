import React from "react";

const AddPostView = ({ handleSubmit,onInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Gönderi Ekle</h2>

      <fieldset>
        <label>Kullanıcı Adı</label>
        <input onChange={(e)=>onInputChange('user',e)} type="text" placeholder="Kullanıcı Adı Giriniz" />
      </fieldset>
      <fieldset>
        <label>Başlık</label>
        <input type="text" placeholder="Başlık Giriniz" onChange={(e)=>onInputChange('title',e)}  />
      </fieldset>
      <fieldset>
        <label>Açıklama</label>
        <textarea
        onChange={(e)=>onInputChange('text',e)} 
     maxLength={'150'}
        type="text" placeholder="Açıklama Giriniz" />
      </fieldset>
      <button>Gönder</button>
    </form>
  );
};

export default AddPostView;
