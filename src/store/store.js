import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import newsReducer from './newsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['news'] // only news will be persisted
};

const persistedReducer = persistReducer(persistConfig, newsReducer);

export const store = configureStore({
  reducer: {
    news: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store); 