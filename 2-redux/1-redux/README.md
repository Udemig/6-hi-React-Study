# State Yönetimi

- State: Uygulama bileşenlerin sahip anlık bilgi ve özellliklerdir
- Prop Drilling: Bileşenlerden yukardan aşağıya veri taşınması
- Context API: Uygulamadaki statelerin yönetildiği merkezi state yönetim aracı
- Redux: Uygulamadaski bileşenlerin sahib olduğu gerekli statlerin merkezi bir storada tutlmasını sağlar

# Neden Redux

- Kod tekrarını önler
- Performansı Arttırır
- Bileşen içerisindeki karışıklığı azaltır
- State yönetimi daha kolay ve anlaşılır hale gelir
- Hata ayıklama daha kolaydır
- Büyük ölçekli uygulamalarda state yönetimi kolaylaşır

# Reduxla ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bilşenleri tarafından erişilebilen ve değiştirilibilen merkezi state deposu

2. Reducer: Actiondan aldığı talimat ve state ile storu içeriğinde barındırdğı fonksiyon yarıdmıyla güncelleyecek yapı

3. Action: Storu güncellemek için reducera gönderdiğimiz haber

- - İki değere sahip bir objedir
 - -  type: Eylemin görevi neyse nu tanımladığımız string ifade ('addTodo (Todo Ekle)')
 - - payload: Reducera gönderilen eylemin statesi ('newTodo')

4. Dispatch: Eylerim gerçekleştiğini reducara haber vermemisi sağlayan metod

5. Subscribe: Bileşenlerin store ye erişmek istediğinde kullandığı metod

6. Provider: Oluştruan store erişim en kök compnenti sarmalayan yapı

# Redux Kullanmak İçin Aşamalar (Kurulum)

1. Redux Kütüphanesini projemize dahil ediyoruz. redux react-redux
2. 



# 6-sezon-hafta-ici-all
