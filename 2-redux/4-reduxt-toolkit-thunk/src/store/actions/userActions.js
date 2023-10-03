/*
! createAsyncThunk
* asenkron aksiyonlar oluşturmak için kullanılır
* api istekleri atıp devamında süreç boyunca
* store'u bilgilendir.(pending,fullfilled,rejected)
? bizden iki parametre ister
> > aksiyon'un type değer
> > çalışacak fonksiyon
> > genelde async işlemler yapar (veritabanı sorguları)
*/

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('getUser', async () => {
  // asenkron işlemler
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  //! store'a aktarlmasını istedğimiz veriyi return ederiz
  return res.data;
});
