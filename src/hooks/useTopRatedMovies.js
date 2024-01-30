import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopratedMovie } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

    const getApiData = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const jsonData = await data.json();
        dispatch(addTopratedMovie(jsonData));
    }

    useEffect(()=>{
       !topRatedMovies && getApiData();
    },[])
}

export default useTopRatedMovies;