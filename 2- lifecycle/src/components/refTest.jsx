import { useRef, useState } from 'react';

const RefTest = () => {
  const [query, setQuery] = useState('');

  const inputRef = useRef();
  const labelRef = useRef();

  // butona tıklanma
  const handleClick = () => {
    if (inputRef.current.value === '') {
      // kullanıcıyı inputa odaklama
      inputRef.current.focus();

      return;
    }

    // aratlan içerği state'a aktarma
    setQuery(inputRef.current.value);

    // label renk değiştirme
    labelRef.current.style.color = 'red';
  };

  return (
    <>
      <div className="container d-flex gap-3 mt-5">
        <input
          ref={inputRef}
          placeholder="Aratmak istediğiniz kelimeyi geriniz"
          className="form-control shadow"
          type="text"
        />
        <button
          onClick={handleClick}
          className="btn btn-primary shadow"
        >
          Ara
        </button>
      </div>
      <label className="mt-5" ref={labelRef}>
        Aratılan İçerik: {query}
      </label>
    </>
  );
};

export default RefTest;
