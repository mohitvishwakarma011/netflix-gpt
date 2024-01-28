import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movie',
    initialState:{},
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.moviesList=action.payload
        }
    }
})

export const{addNowPlayingMovie} = moviesSlice.actions; 

export default moviesSlice.reducer;