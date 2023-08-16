import Counter from './components/Counter';
import Form from './components/Form';
import { useState } from 'react';
import Accordion from './components/Accordion';

function App() {
  //* uygulama koyu modda mı ? durumunu tutma
  const [isDarkTheme, setisDarkTheme] = useState(true);

  return (
    <div className={isDarkTheme ? 'dark' : 'light'}>
      <div className="container d-flex justify-content-between py-5">
        <h2>Temayı Belirle</h2>
        {/* her tıklandığında temayı tersine çevirir */}
        <button
          // butonun rengini beilrleme
          className={`btn ${isDarkTheme ? 'btn-light' : 'btn-dark'}`}
          onClick={() => setisDarkTheme(!isDarkTheme)}
        >
          {/* butonun içindeki yazıyı belirle */}
          {isDarkTheme ? 'Açık Mod' : 'Koyu Mod'}
        </button>
      </div>
      <Accordion
        title="Birinci başlık"
        content="ilk alanın içeriği"
      />
      <Accordion
        title="İkinci başlık"
        content="İkinci alanın içeriği"
      />
      <Counter />
      <Form />
    </div>
  );
}

export default App;

//* Uygulama koyu modda mı? true | false
//* Sayaç uygulamasında ekrana basılacak olan sayı
//* Form alanındaki inputlar'a yazılanlar
//* uyfulamadaki kullanıcılar
//* Bildirim kutucuğu ekran basılacak mı?
//* Haberin devamını gösericek misin?
