import { createStore, combineReducers, applyMiddleware } from 'redux';
import { basketReducer } from './reducers/basketReducer';
import { productReducer } from './reducers/productReducer';
import thunk from 'redux-thunk';

// reducer'ları birleştirme
const rootReducer = combineReducers({
  basketReducer,
  productReducer,
});

// store'u oluşturma ve export etme
export default createStore(rootReducer, applyMiddleware(thunk));
