import { createSlice } from "@reduxjs/toolkit";
import { fetchPics } from "./searchThunk";

const initialState = {
    status: "idle",
    data: [],
    error: null,
  };

export const searchSlice = createSlice({
    name: "searchPics",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchPics.pending, (state) => {
          state.status = "pending"
        })
        .addCase(fetchPics.fulfilled, (state, action) => {
          state.status = "fulfilled"
          state.data = action.payload
        })
        .addCase(fetchPics.rejected, (state, action) => {
          state.status = 'rejected'
          state.error = action.error.message
        })
    }
})

export const getPicsData = (state) => state.searchPics.data
export const getPicsStatus = (state) => state.searchPics.status
export const getPicsError = (state) => state.searchPics.error