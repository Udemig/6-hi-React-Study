/*


*Reducer Oluştruma Aşamaları
 == Reducer storeun nasıl etkileneceğine karar verir

*Reducer bir fonksiyondur ve iki parametre alır
 --state: reducerde tutulan verilerin son durumu
 --action: storun nasıl etk,lenmesi gerektiğini söyleyen type ve payload değerlerine
 sahip pşan obje

 1.initialState başlangıçta sahib olması gereken state
 2.reducer fonkisiyonu oluştrurlur ve paramter olarak stet ve action u alır
   -fonksiyon için aciton type değeri analiz edilir
   -bu type göre storun nasıl etk,ileneği tanımların
   3.Oluştruan her reducer store ve farklı bileşenlerden erişim için export edilir



*/

const initialState = {
  todos: [],
  sayi: 0,
};

const todoReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        sayi: state.sayi + 1,
      };

    //Silme işlemi için
    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
        sayi: state.sayi - 1,
      };

      case 'UPDATE_TODO':

      const cloneTodos=state.todos
      const willUpdateTodoIndex=cloneTodos.findIndex((item)=>item.id ===action.payload.id)
      cloneTodos[willUpdateTodoIndex]=action.payload
      return{
        ...state,
        todos:cloneTodos

      }

    default:
      return state;
  }
};

export default todoReducer;
