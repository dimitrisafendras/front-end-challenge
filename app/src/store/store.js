import { configureStore } from '@reduxjs/toolkit';
import { allAppsReducer, selectedAppReducer } from '../models';

export const store = configureStore({
  reducer: {
    apps: allAppsReducer,
    selectedApp: selectedAppReducer,
  },
});
