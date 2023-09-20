import { useState } from 'react';

const Counter = () => {
  //* useState dizi içerisinde iki değer gönderir
  //* 1- durumun son haline erişmemizi sağlayacak değişken
  //* 2- durumu değiştirmemzi sağlayan fonksiyon
  const [count, setCount] = useState(0);

  return (
    // react fragment
    // kapsayıcı eleman herhangi bir stil almyıcaksa
    // boşuna yer kaplamaması için kullanılır
    <>
      <h1 className="text-center">Sayaç</h1>

      <button
        onClick={() => setCount(0)}
        className="btn btn-primary mx-5"
      >
        Sıfırla
      </button>

      <div className="mt-5 container d-flex justify-content-center">
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          className="btn btn-danger"
        >
          Azalt
        </button>
        <span className="lead mx-4 fs-1">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-success"
        >
          Arttır
        </button>
      </div>
    </>
  );
};

export default Counter;
