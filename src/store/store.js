import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../app/cardReducer.js';

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;