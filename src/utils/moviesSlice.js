import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movie',
    initialState:{
        moviesList:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.moviesList=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})

export const{addNowPlayingMovie,addTrailerVideo} = moviesSlice.actions; 

export default moviesSlice.reducer;