import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './slice/example.reducer';
import productReducer from './slice/product.reducer';

export const store = configureStore({
  reducer: {
    counter: exampleReducer,
    product: productReducer,
  },
});
