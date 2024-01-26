import { createSlice } from "@reduxjs/toolkit";



export const favoritesSlice = createSlice({
    name: "favoritePics",
    initialState: {
        status: 'idle',
        data: JSON.parse(localStorage.getItem("favPics")) || [],
        error: null,
        searchQuery: ''
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
            const newFavs = [...state.data]
            const favId = newFavs.findIndex((picture) => picture.id === action.payload.id)
            const newPic = {...newFavs[favId], alt_description: action.payload.newDescription}  
            newFavs[favId] = newPic
            state.data = newFavs
            localStorage.setItem("favPics", JSON.stringify(state.data))
            //<h3>{description.length === 0 ? 'No description' : description.slice(0,28)+'...'}</h3> para que no se me olvide cuando este solucionado ponerlo en cardItem
        },
        sortFavorite: (state, action) => {
            state.data = state.data.sort((a, b) => a[action.payload] < b[action.payload] ? 1 : -1)
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    }
})

export const getSearchQuery = (state) => state.favoritePics.searchQuery;
export const getFavoriteStatus = (state) => state.favoritePics.status
export const getFavorite = (state) => state.favoritePics.data
export const { addFavoritePic, removeFavorite, editDescription, sortFavorite, setSearchQuery } = favoritesSlice.actions