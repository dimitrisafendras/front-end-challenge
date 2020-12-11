import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client, allAppsUrl } from '../api';

const initialState = {
  allApps: [],
  status: 'idle',
  error: null,
};

export const fetchAllApps = createAsyncThunk('allApps', async () => {
  const response = await client.get(allAppsUrl);
  console.log('allApps', response);
  return response;
});

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
      console.log('action', action);

      state.status = 'succeeded';
      state.allApps = state.allApps.concat(action.payload);
    },
    [fetchAllApps.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});
console.log('reducer', reducer);

export { reducer as allAppsReducer };

export const selectAllApps = (state) => state.apps;
