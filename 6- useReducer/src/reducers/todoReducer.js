export const initialState = {
  isDarkMode: true,
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    // state'te tutlan todos dizisnde yeni eleman ekler
    // eklenicek elemanı action'ın payload değerinden alırız
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };

    // todos dizisinden bir eleman kadlırır
    // kaldırılcak elemanın id 'si payload olartak gelir
    case 'DELETE_TODO':
      const filtred = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return { todos: filtred };

    case 'CLEAR_TODOS':
      return initialState;

    default:
      return state;
  }
};
