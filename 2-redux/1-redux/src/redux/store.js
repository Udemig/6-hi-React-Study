/*

*Store Oluşturma Aşamaları

1.Redux kütüphanesinden createStore ve combineReducer import edilir

2.Store içerisinde tutulacak verileri kategorize edilir ve herbiri için reducer oluşturulur

3.Oluşturaln reducerlar önce import edilir
4.oluşturan bu reducerler combineReducer yardımıyla birleştilir
5.createStore methodu ile store oluşturlur.store oluştur cretaeStore argüman olarak rootReducer verilir
6.oluşturaln store export edilir
*/

import {createStore,combineReducers} from 'redux'
import todoReducer from './todoReducer'
import categoryReducer from './categoryReducer'

//reducerler bir bütün haline geitirlir
const rootReducer=combineReducers({
    todoReducer,
    categoryReducer
})

//Store oluşturlur

const store=createStore(rootReducer)

export default store