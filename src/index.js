import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import {store} from './redux/app/store'
//redux
import store from "./redux/features/store";
import { Provider } from "react-redux";
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import userReducer from "./redux/features/user";

const persistor= persistStore(store)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      
      
    </Provider>
  </React.StrictMode>
);
