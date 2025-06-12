import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '62616692817742b989951cf158596eb1'; // Replace with your actual API key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          country: 'us',
          apiKey: API_KEY,
        },
      });
      
      if (response.data.status === 'ok') {
        return response.data.articles;
      } else {
        throw new Error('Failed to fetch news');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch news');
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
    lastUpdated: null,
  },
  reducers: {
    clearNews: (state) => {
      state.articles = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        state.lastUpdated = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer; 