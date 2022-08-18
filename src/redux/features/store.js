import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import userReducer from './user'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)
// const store = configureStore({
//     reducer: {
//       user: userReducer,
//     },
    
//     devTools: true,
//     // preloadedState:preloadedState
//   });
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})
export default store
export const persistor = persistStore(store)