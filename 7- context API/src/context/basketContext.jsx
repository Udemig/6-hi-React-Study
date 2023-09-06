import { createContext, useState } from 'react';

/*
 * Context API:
 * Uygulamda birden çok bilşenin ihtayıcı olan verilerli
 * Tek bir merkezde yönetmeye yarar
 * Verileri ve bunları değiştrimeye yarayan fonksiyonları tutar
 * Ve bu değişkenleri uygulamdaki herhangi bir bileşene doğrudan aktarabilir
 * merkezi state yönetim aracı
 */

//! Context yapısnın temelini oluşturma
export const BasketContext = createContext();

//! sdağlayıcı ve onun tuttuğu verileri tanımlama
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // sepete yen, ürün ekler
  const addToBasket = (product) => {
    // sepete bu üründen daha önce eklenmiş mi kontrol
    const found = basket.find((i) => i.id === product.id);

    if (found) {
      //  elemanın miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      // state'i güncelle
      setBasket(newBasket);
    } else {
      // miktarı 1 olarak ayarlayıp
      // ürünü sepete ekler
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  // tuttuğumuz verileri uygulamay aktarmaya yarar
  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

<BasketContext.Provider value={{ basket, addToBasket }}>
  {children}
</BasketContext.Provider>;
