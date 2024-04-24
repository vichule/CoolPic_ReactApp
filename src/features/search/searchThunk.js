import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPics = createAsyncThunk('search/fetchPics', async (queryPicParams) => {
    let url
    const key = 'tOnZdyE_aVrNGdAMpy-wrX6KVSGzGgpKI8jO3s2Pv2Q';
    const randomPage = Math.floor(Math.random() * 100)
    const picsPage = 12
    if (queryPicParams) {
        console.log(queryPicParams)
        url = `https://api.unsplash.com/search/photos?query=${queryPicParams}&page=${randomPage}&per_page=${picsPage}&client_id=${key}`;
        console.log('con busqueda')
        
      } else {
        url = `https://api.unsplash.com/photos/random?client_id=${key}&count=${picsPage}`;
        console.log('sin busqueda')
      }
      const request = await fetch(url)
      const json = await request.json()
      return json
})