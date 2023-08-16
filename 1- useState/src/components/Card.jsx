//* props > bileşene gönderilen özelliklere erişme
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} />
      <h1>Kullanıcı Adı: {props.name}</h1>
      <h1>Kullanıcı Soyadı: {props.surname}</h1>

      {/*
       * koşullu renderlama
       * boy değeri varsa onu ekran yaz
       * yoksa hiçbirşey yazma
       * Yöntem 1 > Terneray Operator
       * else durumundada ekrana bir şey basmak istediğimizde kullanıyoruz
       *  Yöntem 2 > &&  Ve
       * else durumunda ekrana hiçbirşey basılmaz
       */}

      {/* Ve */}
      {props.height && (
        <h1>
          Kullanıcı Boyu:
          {props.height}
        </h1>
      )}

      {/* Ternary */}
      {/* {props.height ? (
        <h1>
          Kullanıcı Boyu:
          {props.height}
        </h1>
      ) : (
        'Boy bulunamadı'
      )} */}
    </div>
  );
};

export default Card;

/*
1- Terneray:
      {props.height ? (
        <h1>
          Kullanıcı Boyu:
          {props.height}
        </h1>
      ) : (
        'Boy bulunamadı'
      )}

*/
