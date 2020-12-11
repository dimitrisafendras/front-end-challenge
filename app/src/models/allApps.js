import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allAppsUrl, client } from '../api';

const initialState = {
  allApps: [],
  status: 'idle',
  error: null,
};

export const fetchAllApps = createAsyncThunk('allApps/fetchAllApps',
  async () => await client.get(allAppsUrl));

const { reducer } = createSlice({
  name: 'allApps',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchAllApps.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAllApps.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.allApps = state.allApps.concat(action.payload);
    },
    [fetchAllApps.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export { reducer as allAppsReducer };

export const selectAllApps = (state) => state.apps;
