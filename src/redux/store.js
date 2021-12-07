

import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import contactsReducer from './items/items-reducer'
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';


const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter']
}


const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), logger];

const store = configureStore({
    reducer: {contacts: persistReducer(persistConfig, contactsReducer)},
    middleware,
    devTools: process.env.NODE_ENV==='development',
})

const persistor = persistStore(store)

export default {store, persistor};