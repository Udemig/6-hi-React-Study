# Json-Server

- sahte api oluşturmaya yarar
- Bu kütüphane lokal'de (kendi bilgisayrımzda ) çalışan bir api oluşturur.
- Oluşturduğu API'ın temeli bir json dosyasıdır
- Apı'ya yaptığımız istekleri işler ve db.json dosyasını günceller

# # FAYDALARI

- Prototip oluşturma: Gerçek api kulllanılmadığı zaman
  hızlıca basit bir versiyonu oluşturulabilir.
- Kendimizi geliştirebilceğimiz uygulamalar yapmaya olanak sağlar
- Kullanımı basits

# # Kullanım

- npm i json-server
- proje klasöründe bir `db.json` dosyasnı oluştur.
- `db.json` dosyası içerisine verii ekle
- `package.json` ' api'ı ayağa kaldırma komutunu ekle
- - `server: json-server --watch db.json --port 3030`
- npm run server
