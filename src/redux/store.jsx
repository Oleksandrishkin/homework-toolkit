

import {changeFilter, changeFilterReducer, contactsReducer } from "./slice"
import { configureStore, legacy_createStore as createStore} from "@reduxjs/toolkit"
import {tasksReducer, filtersReducer} from './slice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter:changeFilterReducer
 })
const persistedPhoneBookReducer = persistReducer(persistConfig, rootReducer)
 
export const store = createStore(persistedPhoneBookReducer);

export const persistor = persistStore(store)