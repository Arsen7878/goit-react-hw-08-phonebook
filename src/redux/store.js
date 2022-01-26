import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth-reducer';
import { contactsReducer } from './contatcs/contacts-reducer';

import logger from 'redux-logger';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
});

// прослойки, которые проходит action перед тем как попасть в reducer
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
