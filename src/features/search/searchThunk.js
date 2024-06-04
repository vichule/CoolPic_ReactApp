import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPics = createAsyncThunk('search/fetchPics', async (queryPicParams) => {
  let url;
  const key = import.meta.env.VITE_ACCESS_KEY;
  const picsPage = 12;

  // Inicio una cadena de consulta
  let queryParams = '';

  // Si queryPicParams existe y no está vacío, se convierte en una cadena de consulta y asi evitar el problema al recibir la y mandar la query
  if (queryPicParams) {
    const queryString = Object.keys(queryPicParams)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(queryPicParams[key]))
      .join('&');
    queryParams = '?' + queryString;
  }

  if (queryPicParams) {
    console.log(queryPicParams);
    url = `https://api.unsplash.com/search/photos?client_id=${key}&query=${queryParams}`;
    console.log('con busqueda');
  } else {
    url = `https://api.unsplash.com/photos/random?client_id=${key}&count=${picsPage}`;
    console.log('sin busqueda');
  }

  try {
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (error) {
    throw new Error('Error, there was something wrong. Please try again.');
  }
});


