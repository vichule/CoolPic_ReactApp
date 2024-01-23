import { createSlice } from "@reduxjs/toolkit";



export const favoritesSlice = createSlice({
    name: "favoritePics",
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addFavoritePic(state,action){
            const isFav = state.data.some((pic) => pic.id === action.payload.id)
            if(!isFav){
                state.data.push(action.payload)
            }
            
        }

    }
})