const initialState = {
  category: [],
  sayi: 0,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      console.log("Category Reducer Çalıştı");

  
    default:
      return state;
  }
};

export default categoryReducer
