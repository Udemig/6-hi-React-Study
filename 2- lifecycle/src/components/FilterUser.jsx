import { useEffect, useState, useRef } from 'react';
import Table from './table.jsx';

const FilterUser = () => {
  const [users, setUsers] = useState(null);
  const [filtredUsers, setFiltredUsers] = useState(null);

  const inputRef = useRef();

  // bileşen ekrana basılma anını izleme
  useEffect(() => {
    // kullanıların verisini çekme
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltredUsers(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputun değerine erişme
    const query = inputRef.current.value.toLowerCase();

    // arama termiyle eşelşen kullanıcılar
    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    setFiltredUsers(filtred);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex gap-4 my-5 p-4">
        <input
          ref={inputRef}
          className="form-control shadow"
          type="text"
        />
        <button className="btn btn-primary shadow">Ara</button>
      </form>

      {filtredUsers === null ? (
        <p>Yükleniyor....</p>
      ) : (
        <Table users={filtredUsers} />
      )}
    </div>
  );
};

export default FilterUser;
