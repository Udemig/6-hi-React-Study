import {
  getAllByRole,
  render,
  screen,
  within,
} from '@testing-library/react';
import { expect } from 'vitest';
import UserList from './UserList';
import { users } from './../constants';

it('gönderilen her kullanıcı için ekrana tablo satırı basılır', () => {
  //  prop olarak bir değer alan bileşeni test etme
  render(<UserList users={users} />);

  // users tablosu içersindeki bütün satırları al
  const body = screen.getByTestId('table-body');

  // belirli bir kapsayıcı içerisindek elemanları seçme
  const rows = within(body).getAllByRole('row');

  // kullanıcı sayısı kadar satır var mı
  expect(rows).toHaveLength(users.length);
});

it('her bir kullanıcı için email isim ve yaş değerleri tablo hücrsi olarak ekrana basılır', () => {
  render(<UserList users={users} />);

  // her bir kullanıcı için ekrandaki
  // tablo hücrelerinde isim,mail,yaş değerleri yazıyor mu
  for (const user of users) {
    // kullanın adını içeren tablo hücresini al
    const name = screen.getByRole('cell', { name: user.name });
    // kullanıcn mailini içeren tablo hücreisni al
    const mail = screen.getByRole('cell', { name: user.email });
    // kulalnın yaşını içeren tablo hücreis al
    const age = screen.getByRole('cell', { name: user.age });

    // hücrelerde ekranda mı kontrol ?
    expect(name).toBeVisible();
    expect(mail).toBeVisible();
    expect(age).toBeVisible();
  }
});
