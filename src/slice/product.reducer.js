import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ProductRepository} from '@src/repository/product.repository';
import {isEmpty} from 'lodash';

const productRepo = new ProductRepository();

const initialState = () => {
  return {
    products: [],
    productDetail: null,
    total: 0,
  };
};

export const GET_PRODUCT_BY_ID = createAsyncThunk(
  'product/GET_PRODUCT_BY_ID',
  async id => {
    try {
      return await productRepo.getById(id);
    } catch (error) {
      return null;
    }
  },
);

const updateTotal = callback => (state, action) => {
  callback(state, action);
  const p = state.products;
  if (isEmpty(p)) {
    state.total = 0;
    return;
  }
  state.total = p.reduce((a, b) => a.price + b.price);
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState(),
  reducers: {
    CLEAN_DETAIL: state => {
      state.productDetail = null;
    },
    SAVE_IN_PRODUCT_LIST: updateTotal((state, action) => {
      const {product, quantity} = action.payload;
      state.products = [...state.products, action.payload];
      state.total = state.products.reduce((a, b) => a.price + b.price);
      console.info(state.products);
    }),
    DELETE_PRODUCT_IN_LIST: updateTotal((state, action) => {
      const id = action.payload;
      state.products = state.products.filter(p => p.id !== id);
    }),
    DELETE_GROUP_OF_PRODUCTS_IN_LIST: updateTotal((state, action) => {
      /**
       * @type {number[]}
       */
      const groupId = action.payload;
      state.products = state.products.filter(p => groupId.includes(p.id));
    }),
    DROP_PRODUCT_LIST: updateTotal(state => {
      state.products = [];
    }),
  },
  extraReducers: builder => {
    builder.addCase(GET_PRODUCT_BY_ID.fulfilled, (state, action) => {
      console.info(action.payload);
      state.productDetail = action.payload;
    });
    builder.addCase(GET_PRODUCT_BY_ID.rejected, state => {
      state.productDetail = null;
    });
  },
});

export default productSlice.reducer;

export const {
  CLEAN_DETAIL,
  DELETE_GROUP_OF_PRODUCTS_IN_LIST,
  DELETE_PRODUCT_IN_LIST,
  DROP_PRODUCT_LIST,
  SAVE_IN_PRODUCT_LIST,
} = productSlice.actions;

export const selectProducts = state => state.product.products;

export const selectProductDetail = state => state.product.productDetail;
