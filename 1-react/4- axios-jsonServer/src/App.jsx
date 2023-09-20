import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './components/ListItem';
import { v4 } from 'uuid';

// axios'Un yapıcağı isteklerin baseUrl'ini tanımlama
axios.defaults.baseURL = 'http://localhost:3060';

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();
  const [maxPage, setMaxPage] = useState();
  // api'a göndericeğimiz bilgiler
  const options = {
    _limit: 5,
    _page: page,
  };

  // bileşnin ekrana gelme anında ve sayfa değiştiğinde verileri çek
  useEffect(() => {
    axios
      .get('/todos', { params: options, timeout: 5000 }) // 5 saniyleik bir zaman aşını uygular
      .then((res) => {
        const itemCount = Number(res.headers['x-total-count']);

        // max sayfa sayısını hesaplama
        const max = Math.ceil(itemCount / options._limit);

        setMaxPage(max);

        setTotalCount(itemCount);

        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  // yeni todo ekleme
  const handleSubmit = (e) => {
    e.preventDefault();

    // yazı bpş mu kontrol etme
    if (e.target[0].value === '') {
      alert('Lütfen formu doldurun');
      return;
    }

    // gönderilcek todoyu hazırlama
    const newTodo = {
      id: v4(),
      title: e.target[0].value,
      date: new Date(),
      isDone: false,
    };

    // todo'yu api'a ekleme
    axios
      .post('/todos', newTodo)
      // todo'yu state'e ekleme
      .then(() => {
        // eğerki erkana max sayıda eleman bulunuyorsa
        // kullanıcıyı son sayfa yönlendir
        if (todos.length === options._limit) {
          // eğerki son sayfa doluysa  son asyfanın bir fazlasına
          // son sayfa dolu değilse o zaman son son sayfaya yönlendir
          setPage(
            totalCount % options._limit === 0 ? maxPage + 1 : maxPage
          );
          return;
        }
        setTodos([...todos, newTodo]);
      });

    // inputu temizle
    e.target[0].value = '';
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Yapılacaklar</h2>

      <form onSubmit={handleSubmit} className="d-flex gap-3 my-4">
        <input className="form-control" type="text" />
        <button className="btn btn-primary">Gönder</button>
      </form>

      {/* api'dan gelen cevabı beklerken beklerken: */}
      {!todos && <h3>Yükleniyor...</h3>}

      {/* api'dan cevap gelikten sonra: */}
      <ul className="list-group my-5">
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>

      <div className="d-flex justify-content-between">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
          className="btn btn-sm btn-primary"
        >
          geri
        </button>

        <p className="fs-4 fw-bold">{page}</p>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === maxPage}
          className="btn btn-sm btn-primary"
        >
          ileri
        </button>
      </div>
    </div>
  );
}

export default App;
