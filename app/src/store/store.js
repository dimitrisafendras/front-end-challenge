import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../models';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
