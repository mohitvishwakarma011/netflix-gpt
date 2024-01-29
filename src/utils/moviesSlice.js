import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movie',
    initialState:{
        moviesList:null,
        trailerVideo:null,
        popularMovies:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.moviesList=action.payload
        },
        addPopularMovie:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addTopratedMovie:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovie:(state,action)=>{
            state.upComingMovies=action.payload
        },
    }
})

export const{addNowPlayingMovie,addTrailerVideo,addPopularMovie,addTopratedMovie,addUpcomingMovie} = moviesSlice.actions; 

export default moviesSlice.reducer;