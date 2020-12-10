import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, allAppsReducer } from '../models';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    apps: allAppsReducer,
  },
});
