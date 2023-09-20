// senkron aksiyon fonksiyonu
export function sayiArti() {
  return {
    type: 'addCount',
    payload: 1,
  };
}

// asenkron thunk aksiyonu
function getData() {
  return function (dispatch) {
    // asenkron işlmler
    const data = [];
    // reducer'a aktarma
    dispatch({});
  };
}

// kısa yol
const getData2 = () => (dispatch) => {
  // asenkron işlemler
};

/*
 ! Redux Thunk
 * Redux'ın middleware(arayazılım) kütüphanesidir.
 * Redux ile birlikte kullanıldığında asenkron işlemlerin daha
 * iyi yönetilmesine olanak sağlar
 * gerçek dünya uygulamalarında sunucu isteklerinde
 * veritabını sorgularında kullanılır
 * Özet:
 * dispatch işleminde reducer'a verileri aktarmadan önce
 * api istekleri yapmamamıza olanak sağlıyacak
*/
