import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/search/searchSlice";
import { favoritesSlice } from "../features/favorites/favoritesSlice";



export const store = configureStore({

    reducer: {
        "searchPics": searchSlice.reducer,
        "favoritePics": favoritesSlice.reducer
    }
})