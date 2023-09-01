import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const [book, setBook] = useState(null);
  const { book_id } = useParams();
  //   yönlendirme işlemlerinde kullanılcak fonksiyon
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${book_id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        // bulunamadı sayfasına yönlendir ve hata kodunu gönder
        navigate('/undefined', { state: err.response.status });
      });
  }, []);

  return (
    <div>
      {!book ? (
        <div className="text-center my-5">Yükleniyor...</div>
      ) : (
        <div className="row" style={{ minHeight: '85vh' }}>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              style={{ maxHeight: '400px' }}
              className="rounded img-fluid shadow"
              src={book.image}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1>{book.title}</h1>
            <div className="my-4">
              <p className="fs-5">
                <span className="badge bg-danger me-3">Yazar:</span>
                <span>{book.author}</span>
              </p>
              <p className="fs-5">
                <span className="badge bg-danger me-3">
                  Açıklama:
                </span>
                <span>{book.description}</span>
              </p>
              <p className="fs-5">
                <span className="badge bg-danger me-3">Yıl:</span>
                <span>{book.year}</span>
              </p>
              <p className="fs-5">
                <span className="badge bg-danger me-3">
                  Sayfa Sayısı:
                </span>
                <span>{book.page}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
