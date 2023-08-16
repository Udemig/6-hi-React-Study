import { useState } from 'react';
import { users } from './../contants';

const Form = () => {
  // formda tutulan verilerin state'i
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [pass, setPass] = useState('');
  // kullanıcılar state'i
  const [users, setUsers] = useState([]);

  // form gönderildiğinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault();

    // gönderilecek kullanıcıyı hazırlama
    const newUser = { id: new Date().getTime(), name, surname, pass };

    // yeni kullanıcı ekler
    setUsers([...users, newUser]);

    // input'ları sıfırlama
    setName('');
    setSurname('');
    setPass('');
  };

  // kulllanıcı silme
  const handleDelete = (id) => {
    // id'sini bildiğimiz elemanı diziden çıkartma
    const filtred = users.filter((user) => user.id !== id);

    // state'i güncelleme
    setUsers(filtred);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-5">
        <h1 className="text-center">Form Alanı</h1>
        <label className="mt-4">İsim</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
        />

        <label className="mt-4">Soyad</label>
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="form-control"
          type="text"
        />

        <label className="mt-4">şifre</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="form-control"
          type="password"
        />

        <button className="btn btn-info mt-4">Gönder</button>
      </form>

      <table className=" table table-dark  mt-5">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Şifre</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        {/* kullanıcıları listeleme */}
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.pass}</td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;

// State her güncellendiğinde
// Bileşen tekrardan render olur (ekran basılır)

// bu sayade arayüz güncel kalır
