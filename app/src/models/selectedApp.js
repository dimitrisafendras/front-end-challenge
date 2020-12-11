import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client, selectedAppUrl } from '../api';

const initialState = {
  selectedApp: [],
  status: 'idle',
  error: null,
};

export const fetchSelectedApp = createAsyncThunk('selectedApp/fetchSelectedApp',
  async (id) => await client.get(selectedAppUrl(id)));

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

export { reducer as selectedAppReducer };

export const selectSelectedApp = (state) => state.selectedApp;
