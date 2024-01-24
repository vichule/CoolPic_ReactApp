import { createSlice } from "@reduxjs/toolkit";



export const favoritesSlice = createSlice({
    name: "favoritePics",
    initialState: {
        status: 'idle',
        data: JSON.parse(localStorage.getItem("favPics")) || [],
        error: null
    },
    reducers: {
        addFavoritePic(state,action){
            const isFav = state.data.some((pic) => pic.id === action.payload.id)
            if(!isFav){
                state.data.push(action.payload)
                localStorage.setItem("favPics", JSON.stringify(state.data))
            }
            
        },
        removeFavorite(state,action){
            state.data = state.data.filter((picture) => picture.id !== action.payload.id)
            localStorage.setItem("favPics", JSON.stringify(state.data))
        },
        editDescription(state,action){

        }
    }
})

export const getFavoriteStatus = (state) => state.favoritePics.status
export const getFavorite = (state) => state.favoritePics.data
export const { addFavoritePic, removeFavorite, editDescription } = favoritesSlice.actions