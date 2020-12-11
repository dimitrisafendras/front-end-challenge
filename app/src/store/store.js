import { configureStore } from '@reduxjs/toolkit';
import {
  allAppsReducer,
  selectedAppReducer,
  topSellerAppsReducer,
  trendingAppsReducer,
} from '../models';

export const store = configureStore({
  reducer: {
    apps: allAppsReducer,
    selectedApp: selectedAppReducer,
    topSellerApps: topSellerAppsReducer,
    trendingApps: trendingAppsReducer,
  },
});
