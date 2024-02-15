

import { changeFilterReducer, contactsReducer } from "./slice"
import { configureStore, legacy_createStore as createStore} from "@reduxjs/toolkit"
import {tasksReducer, filtersReducer} from './slice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { contactsApi } from "./APIslice";


export const store = configureStore({


  reducer:{
    contacts: contactsReducer,
    filter:changeFilterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
}, 
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  }
   
 )
