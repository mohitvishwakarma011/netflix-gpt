import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addNowPlayingMovie} from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = async ()=>{
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movie.moviesList
  );

  const getMoviesData = async () => {
    const data = await fetch(
       "https://api.themoviedb.org/3/movie/now_playing?page=1",
       options
     );
 
     const jsonData = await data.json();
     
     dispatch(addNowPlayingMovie(jsonData.results));
   };
 
   useEffect(()=>{
    !nowPlayingMovies && getMoviesData();
   },[])
}

export default useNowPlayingMovies;