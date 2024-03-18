import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { GlobalStyle } from 'GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render( <
    React.StrictMode >
    <
    BrowserRouter basename = "/homework-toolkit" / >
    <
    PersistGate loading = { null }
    persistor = { persistor } >
    <
    Provider store = { store } >

    <
    RouterProvider router = { router } >
    <
    GlobalStyle >


    <
    App / >
    <
    /GlobalStyle> < /
    RouterProvider > < /
    Provider >
    <
    /PersistGate>  < /
    BrowserRouter > <
    /
    React.StrictMode >
);