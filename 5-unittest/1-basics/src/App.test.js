import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Button from './components/Button';

//! test methodu iki parametre alır
// 1. testing string açıklaması
// 2.gerekli kontrolleri yapan fonk.
test('Unit Test Başlığı ekrana  basılır', () => {
  // testi yapıcağımız bileşeni "Sanal Ortamda" ekrana basarız
  render(<App />);

  // sanal ortamdan istediğimiz elemanı seçme
  const headingEle = screen.getByText('Unit Test');

  // çağrılan elemanları test etme
  expect(headingEle).toBeInTheDocument();
});

//* buton ilk başta:
//* kırmızı olucak ve içerisnde "Maviye Cevir" yazıcak.
//* üzerine tıklandıktan sonra:
//* buton aqua renginde olucak ve içersinde "Kirmiziya Cevir" yazıcak.

test('buton doğru renge ve içeriğe sahiptir', () => {
  // test ediceğimiz bileşeni sanalda ekrana basma
  render(<Button />);

  // test ediceğimiz elementi seçme
  const colorBtn = screen.getByRole('button', {
    name: 'Maviye Cevir',
  });

  // butonun rengi kırmızı mı?
  expect(colorBtn).toHaveStyle({ background: 'red' });

  // buton üzerinde tıklanma olayı tetikle
  fireEvent.click(colorBtn);

  // yeni rengi kontrol etme (aqua)
  expect(colorBtn).toHaveStyle({ background: 'aqua' });

  // içindeki yazı doğru mu?
  expect(colorBtn).toHaveTextContent('Kirmiziya Cevir');
});
