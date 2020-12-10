import { configureStore } from '@reduxjs/toolkit';
import { allAppsReducer } from '../models';

export const store = configureStore({
  reducer: {
    apps: allAppsReducer,
  },
});
