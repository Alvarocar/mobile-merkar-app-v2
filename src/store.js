import {combineReducers, configureStore} from '@reduxjs/toolkit';
import exampleReducer from './slice/example.reducer';
import productReducer from './slice/product.reducer';
import {persistReducer, PersistConfig} from 'redux-persist';
import historyReducer from './slice/history.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';

/**
 * @type {PersistConfig}
 */
const rootPersistConfig = {
  key: 'merkar_persistent_root',
  storage: AsyncStorage,
  whitelist: ['history'],
};

/**
 * @type {PersistConfig}
 */
const historyPersistConfig = {
  key: 'merkar_persistent_root__history',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  counter: exampleReducer,
  product: productReducer,
  history: persistReducer(historyPersistConfig, historyReducer),
});

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, reducers),
  middleware: getDefaultMiddle => getDefaultMiddle({serializableCheck: false}),
});

export const persistor = persistStore(store);
