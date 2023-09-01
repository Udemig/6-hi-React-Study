import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1 className="text-center">Hoşgeldiniz!</h1>
      <img
        className="h-50 rounded shadow"
        src="https://media.tenor.com/ImgsCndimaUAAAAC/welcome.gif"
      />
      <p className="lead">
        <Link to="/ürünler">Ürünler Sayfasında</Link> Yeni çıkan bütün
        kitaplara ulaşabilirsiniz
      </p>
    </div>
  );
};

export default MainPage;
