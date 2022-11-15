import moment from 'moment/moment';

const {createSlice} = require('@reduxjs/toolkit');

const initialState = () => {
  return {
    history: [],
    currentOrder: 1,
  };
};

const historySlice = createSlice({
  name: 'history',
  initialState: initialState(),
  reducers: {
    SAVE_NEW_HISTORY: (state, action) => {
      const newRecord = {
        date: moment().format('DD/MM/YYYY hA'),
        products: action.payload.products,
        total: action.payload.total,
        order: state.currentOrder,
      };
      state.currentOrder = state.currentOrder + 1;
      state.history = [...state.history, newRecord];
    },
    CLEAN_HISTORY: state => {
      state.history = [];
    },
  },
});

export default historySlice.reducer;

export const {SAVE_NEW_HISTORY, CLEAN_HISTORY} = historySlice.actions;

export const selectHistory = state => state.history.history;
