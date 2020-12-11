import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client, selectedAppUrl } from '../api';

const initialState = {
  selectedApp: [],
  status: 'idle',
  error: null,
};

export const fetchSelectedApp = (id) => createAsyncThunk('selectedApp', async () => {
  const response = await client.get(selectedAppUrl(id));
  console.log('selectedApp', response);
  return response;
});

const { reducer } = createSlice({
  name: 'selectedApp',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchSelectedApp.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSelectedApp.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.selectedApp = action.payload;
    },
    [fetchSelectedApp.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});
console.log('reducer', reducer);

export { reducer as selectedAppReducer };

export const selectSelectedApp = (state) => state.selectedApp;
