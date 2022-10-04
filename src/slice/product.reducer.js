const {createSlice} = require('@reduxjs/toolkit');

const initialState = () => {
  return {
    products: [],
  };
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState(),
});
