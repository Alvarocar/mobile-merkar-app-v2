import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ProductRepository} from '@src/repository/product.repository';

const productRepo = new ProductRepository();

const initialState = () => {
  return {
    products: [],
    productDetail: null,
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

const productSlice = createSlice({
  name: 'product',
  initialState: initialState(),
  reducers: {
    CLEAN_DETAIL: state => {
      state.productDetail = null;
    },
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

export const {CLEAN_DETAIL} = productSlice.actions;

export const selectProducts = state => state.product.products;

export const selectProductDetail = state => state.product.productDetail;
