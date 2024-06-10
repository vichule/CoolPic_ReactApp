import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPics = createAsyncThunk('search/fetchPics', async (queryPicParams) => {
  let url;
  const key = import.meta.env.VITE_ACCESS_KEY;
  const picsPage = 100;

  if (queryPicParams && queryPicParams.query && queryPicParams.query.trim() !== '') {
    const queryString = `query=${encodeURIComponent(queryPicParams.query)}`;
    url = `https://api.unsplash.com/search/photos?client_id=${key}&${queryString}`;
  } else {
    url = `https://api.unsplash.com/photos/random?client_id=${key}&count=${picsPage}`;
  }

  try {
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (error) {
    throw new Error('Error, there was something wrong. Please try again.');
  }
});