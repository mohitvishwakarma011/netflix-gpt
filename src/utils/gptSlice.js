import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    showShimmer:false
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.showShimmer = !state.showShimmer
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setShowShimmer:(state)=>{
      state.showShimmer = !state.showShimmer
    }
  },
});

export const { toggleGptSearchView,addGptMovieResult,setShowShimmer } = gptSlice.actions;

export default gptSlice.reducer;
