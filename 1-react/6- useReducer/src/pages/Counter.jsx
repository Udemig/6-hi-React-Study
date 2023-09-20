import { useReducer } from 'react';

// Bşlangıç State'i
const initialState = {
  users: [{ name: 'Ahmet' }],
  count: 0,
};

// Reducer Fonksiyonu : State'in nasıl değişiceğine karar verir
// Aldığı paramtreler
// >> state'in değişmeden önceki son hali
// >> state'İn nasıl değişiceğini tanımlayan bir action objesi
// ! reducer fonksiyonundan return edilen veri state'e aktarılır
const reducer = (state, action) => {
  if (action.type === 'ARTTIR') {
    return { count: state.count + 1 };
  }

  if (action.type === 'AZALT') {
    return { count: state.count - 1 };
  }

  if (action.type === 'SIFIRLA') {
    return { count: 0 };
  }
};

const Counter = () => {
  /*
    !useReducer: state yönetiminin useState ile ile birlikte
    * yönetmesi zor olduğu durumlarda  kullanılan hook
    ? bizden iki param ister:
    > > reducer : state'in nasıl değişceğine karar veren fonkiyon
    > > initialState: başlangıç değeri
    ? bize döndürdüğü değerler
    > > state'in en güncel hali
    > > state'değiştirmek için reducer'a action gönderen fonksiyon
    */
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'AZALT',
          })
        }
      >
        Azalt
      </button>
      <span className="count">{state.count}</span>
      <button
        onClick={() =>
          dispatch({
            type: 'ARTTIR',
          })
        }
      >
        Arttır
      </button>
      <button onClick={() => dispatch({ type: 'SIFIRLA' })}>
        Sıfırla
      </button>
    </div>
  );
};

export default Counter;
