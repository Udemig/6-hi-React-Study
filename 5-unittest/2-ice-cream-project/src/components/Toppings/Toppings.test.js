import Toppings from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('soslaarı ekleme çıkarma toplam fiyatı etkiler', async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  // toplam başlığını çağırma
  const total = screen.getByRole('heading', {
    name: /Soslar Ücreti: 0/i,
  });

  //   bir sosou çağırma
  const mochiCheck = await screen.findByRole('checkbox', {
    name: /mochi/i,
  });

  // sosu sepete ekleme
  await user.click(mochiCheck);

  // toplamı kontrol etme
  expect(total).toHaveTextContent('3');

  //   bir sosou çağırma
  const cherryCheck = await screen.findByRole('checkbox', {
    name: /Cherries/i,
  });

  // sosu sepete ekleme
  await user.click(cherryCheck);

  // toplamı kontrol etme
  expect(total).toHaveTextContent('6');

  // sosları kaldırma
  await user.click(mochiCheck);
  expect(total).toHaveTextContent('3');

  await user.click(cherryCheck);
  expect(total).toHaveTextContent('0');
});
