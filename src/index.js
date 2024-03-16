import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

ReactDOM.createRoot(document.getElementById('root')).render( <
    React.StrictMode >
    <
    PersistGate loading = { null }
    persistor = { persistor } >
    <
    Provider store = { store } >

    <
    RouterProvider router = { router } >
    <
    App / >
    <
    /RouterProvider> < /
    Provider >
    <
    /PersistGate> < /
    React.StrictMode >
);