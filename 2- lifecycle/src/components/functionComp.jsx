import { useState, useEffect } from 'react';

const Paper = (props) => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState('Ahmet');

  // bileşenin ekrana gelme olayı
  useEffect(() => {
    console.log('Bilşeen ekrana geldi');

    // componentWillUnMount'ı izlemeye yarar
    return () => {
      console.log('Bileşnin ekrandan gitme olayı');
    };
  }, []);

  // render olayını  izler
  useEffect(() => {
    console.log('Bilşen render oldu');
  });

  // belirli bir state'in/lerin değişimini izler
  useEffect(() => {
    console.log('Sayfa state"i değişti', page);
  }, [page]);

  return (
    <div>
      <p>Sayfa: {page}</p>
      <button
        className="btn btn-primary"
        onClick={() => setPage(page + 1)}
      >
        Sayfa Değiş
      </button>
    </div>
  );
};

export default Paper;
