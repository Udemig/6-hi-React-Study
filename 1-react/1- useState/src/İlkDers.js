import Header from './components/Header';
import Card from './components/Card';
import { users } from './contants';

// props (properties) > özellikler

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Kullanıcılarımız</h1>

      {/*
       * çoklu renderlama
       * kullanıcılar dizisindeki herbir
       * kullanıcı için ekrana kart basma
       */}
      {users.map((user) => (
        <Card
          name={user.first_name}
          surname={user.last_name}
          img={user.image}
        />
      ))}

      <Card name={'Ahmet'} surname={'Yıldırım'} height={190} />
      <Card name={'Mehmet'} surname={'Kaya'} height={150} />
      <Card name={'Burak'} surname={'Deneme'} height={164} />
    </div>
  );
}

export default App;
