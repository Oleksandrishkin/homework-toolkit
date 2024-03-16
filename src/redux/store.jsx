import { configureStore, createStore } from "@reduxjs/toolkit";
import { tasksReducer, filtersReducer, contactsReducer, changeFilterReducer } from './slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { AuthReducer } from "./auth/slice";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'] 
};

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter:changeFilterReducer,
    auth: persistedAuthReducer, 
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);