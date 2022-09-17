import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { productreducer } from './redux/reducers/productreducers'
import {cartreducer} from "./redux/reducers/cartreducer"
import { Removereducer } from './redux/reducers/removereducer'
import { Searchreducer } from './redux/reducers/searchreducer'
import { userReducer } from './redux/reducers/userDetailsreducer'
import { logoutReducer } from './redux/reducers/logoutreducer'
import {paymentReducer} from './redux/reducers/paymentReducer'
const reducers = combineReducers({
    // here we will be adding reducers
    productreducer,cartreducer,Removereducer,Searchreducer,userReducer,logoutReducer,paymentReducer
  })
 export const store= configureStore({ reducer: reducers, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false
        }
    ),
})
 