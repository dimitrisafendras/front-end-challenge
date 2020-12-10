import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client, allAppsUrl } from '../api';

const initialState = {
  allApps: [],
  status: 'idle',
  error: null,
};

export const fetchAllAPps = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts');
  console.log('allApps', response);
  return response;
});
