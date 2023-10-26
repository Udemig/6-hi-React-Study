import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CustomFilter from './../components/CustomFilter/index';
import { fetchCars } from '../utils';
import { CarType } from '../types';
import Card from '../components/Card';

const MainPage = () => {
  // state'i ve state'te tutucağımız verinin tipini tanımlama
  const [cars, setCars] = useState<CarType[]>([]);

  useEffect(() => {
    // araba veirlerini al
    fetchCars().then((res: CarType[]) => setCars(res));
  }, []);

  return (
    <div>
      <Hero />

      <div
        id="catalogue"
        className="mt-12 padding-x padding-y max-width"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katoloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        {/* Filtreleme Alanı */}
        <div className="home__filter">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!cars || cars.length < 1 ? (
          // arabalar gelmediyse ekrana uyarı basılır
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <button>Daha Fazla</button>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
