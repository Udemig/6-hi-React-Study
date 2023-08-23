# useEffect

- Amacı: componentDidMount | componentDidUpdate |componentWillUnmount yerine kullanılır

- Fonk. bilşenlerde yaşam dögüsünü izlemeye yarar

# # Kullanımlar

- 1- componentDidMount: bileşnin ekrana gelme anını izler
- - a > Çalışıcak fonksiyon
- - b > boş bağımlılık dizisi
- - - `useEffect(()=>{},[])`

- 2- bileşen her render olduğunda çalışır (state veya prop değişimi)
- - a > çalışıcak fonksiyon
- - - `useEffect(()=>{})`

- 3- bileşendeki belirli state'lerin değişimini izler
- - a > çalışıcak fonksiyon
- - b > bağımlılık dizisinde izlemek istediğimiz state'ler
- - - `useEffect(()=>{},[page])`

- - 4 - bileşnin ekrandan gitme olayını izler
- - a > çalışıcak fonksiyon
- - b > boş bağımlılık dizisi
- - return satırına fonksiyon
- - - `useEffect(()=>{ return () => {}},[])`
