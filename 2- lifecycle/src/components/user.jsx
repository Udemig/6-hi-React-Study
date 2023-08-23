import { useState, useEffect } from 'react';
import UserCard from './userCard';

const User = () => {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState(null);

  // sayfanın her değştiğinde
  // ve bileşen ilk ekrna geldiğind çalışır
  useEffect(() => {
    // yeni kullanıcyı çekmeden önce eskini sil
    setUserData(null);

    // kullanıcı verileirni al
    fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [page]);

  return (
    <div>
      <p>Sayfa: {page}</p>
      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary"
      >
        Sayfa Değiş
      </button>

      {/* api'dan henüz cevap gelmemişse ekrana loading bas */}
      {userData === null ? (
        <p>Loading...</p>
      ) : (
        <UserCard userData={userData} />
      )}
    </div>
  );
};

export default User;
