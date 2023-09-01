import { useLocation } from 'react-router-dom';

const UndefinedPage = () => {
  // başka bir sayfadan gönderilen veriye erişme
  const { state } = useLocation();

  return (
    <div style={{ height: '80vh' }} className="container my-5">
      <img
        className="rounded img-fluid"
        src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"
      />
      <p className="text-center fs-3 my-5">
        Üzgünüz, arağınız sayfa bulunamadı
      </p>

      {state && (
        <p className="fs-3 text-center">
          Hata Kodunuz{' '}
          <span className="badge bg-warning">{state}</span>
        </p>
      )}
    </div>
  );
};

export default UndefinedPage;
