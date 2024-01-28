import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovie} from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = async ()=>{
  const dispatch = useDispatch();

  const getMoviesData = async () => {
    const data = await fetch(
       "https://api.themoviedb.org/3/movie/now_playing?page=1",
       options
     );
 
     const jsonData = await data.json();
     
     dispatch(addNowPlayingMovie(jsonData.results));
   };
 
   useEffect(()=>{
     getMoviesData(); 
   },[])
}

export default useNowPlayingMovies;