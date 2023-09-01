import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';
import UndefinedPage from './pages/UndefinedPage';
import Layout from './nestedRoutes/Layout';
import Roman from './nestedRoutes/Roman';
import Hikaye from './nestedRoutes/Hikaye';

function App() {
  return (
    // Tarayıcı tabanlı gezinme için kullanılır
    <BrowserRouter>
      {/* Bütün sayfalar arasında ortak olarak kullanılır */}
      <Header />
      {/* Bileşenler arasında eşleşen ilk Route'u ekran basar */}
      <Routes>
        {/* Belirli URL yoluyla ilişkilendirilmiş bileşenleri render etmek için kullanılır */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        {/* dinamik route */}
        <Route path="/ürün/:book_id" element={<DetailPage />} />

        {/* nested routes > iç içe yollar */}
        <Route path="/kategoriler" element={<Layout />}>
          <Route index element={<Hikaye />} />
          <Route path="roman" element={<Roman />} />
        </Route>

        {/* tanımsız bir path değerine yönlenirse */}
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
      {/* Bütün sayflar arasında ortak olarak kullanılır */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
