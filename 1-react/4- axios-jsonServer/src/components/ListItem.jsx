import axios from 'axios';
import { useState, useRef } from 'react';

const ListItem = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  //! elemanı kaldırma
  const handleDelete = () => {
    // api'dan kaldırma
    axios.delete(`/todos/${todo.id}`).then(() => {
      // diziden api'dan silinen elemanı çıkart
      const filtred = todos.filter((item) => item.id !== todo.id);
      // state'i güncelle
      setTodos(filtred);
    });
  };

  //! isDone durumunu değiştirme
  const handleChange = () => {
    // isDone değerini tersine çevir
    const updated = { ...todo, isDone: !todo.isDone };

    // api'ı güncelle
    axios
      .put(`/todos/${todo.id}`, updated)
      // state'i güncelle
      .then(() => {
        // dizideki id'sini bildiğimiz elemanı güncelleme
        const filtred = todos.map((item) =>
          item.id === updated.id ? updated : item
        );

        setTodos(filtred);
      });
  };

  //! onay butonuna tıklanırsa
  const handleEdit = () => {
    // objenin title değerini güncelleme
    const updated = { ...todo, title: inputRef.current.value };

    // API'ı güncelle
    axios
      .put(`todos/${updated.id}`, updated)
      // arayüzü güncelle
      .then(() => {
        // yeni bir dizi oluştur
        // güncellenmeyen bütün elemanları ekle
        // güncelenen elemanın eski halinı eklemek yerine yenisini ekle
        const filtred = todos.map((item) =>
          item.id === updated.id ? updated : item
        );

        //  state'i güncelle
        setTodos(filtred);

        // editleme modunu kapat
        setIsEditing(false);
      });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex gap-1">
        <input
          checked={todo.isDone}
          onChange={handleChange}
          type="checkbox"
          className="form-check-input"
        />
        <span>{todo.isDone ? 'Tamalandı' : 'Devam Ediyor'}</span>
      </div>

      {/* düznelem modunysa input değilse başlık bas */}
      {isEditing ? (
        <div className="d-flex gap-2">
          <input
            ref={inputRef}
            className="form-control shadow"
            defaultValue={todo.title}
          />
          <button
            onClick={handleEdit}
            className="btn btn-success shadow"
          >
            Onay
          </button>
        </div>
      ) : (
        <span>{todo.title}</span>
      )}

      <div className="btn-group">
        {isEditing ? (
          <button
            onClick={() => setIsEditing(false)}
            className="btn btn-secondary"
          >
            Vazgeç
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-info"
          >
            Düzenle
          </button>
        )}
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>
      </div>
    </li>
  );
};

export default ListItem;
