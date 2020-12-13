import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { topSellerAppsUrl, client } from '../api';

const initialState = {
  topSellerApps: [],
  status: 'idle',
  error: null,
};

export const fetchTopSellerApps = createAsyncThunk('topSellerApps/fetchTopSellerApps',
  async () => await client.get(topSellerAppsUrl));

const { reducer } = createSlice({
  name: 'topSellerApps',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchTopSellerApps.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTopSellerApps.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.topSellerApps = state.topSellerApps.concat(action.payload);
    },
    [fetchTopSellerApps.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export { reducer as topSellerAppsReducer };

export const selectTopSellerApps = (state) => state.topSellerApps;
