import { useState } from 'react';

const Button = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <h2>Buton Testi</h2>
      <button
        style={{ background: isRed ? 'red' : 'aqua' }}
        onClick={() => setIsRed(!isRed)}
      >
        {isRed ? 'Maviye Cevir' : 'Kirmiziya Cevir'}
      </button>
    </div>
  );
};

export default Button;
