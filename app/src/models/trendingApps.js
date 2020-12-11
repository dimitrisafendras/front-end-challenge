import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { trendingAppsUrl, client } from '../api';

const initialState = {
  trendingApps: [],
  status: 'idle',
  error: null,
};

export const fetchTrendingApps = createAsyncThunk('trendingApps/fetchTrendingApps',
  async () => await client.get(trendingAppsUrl));

const { reducer } = createSlice({
  name: 'trendingApps',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchTrendingApps.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTrendingApps.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.trendingApps = state.trendingApps.concat(action.payload);
    },
    [fetchTrendingApps.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export { reducer as trendingAppsReducer };

export const selectTrendingApps = (state) => state.apps;
