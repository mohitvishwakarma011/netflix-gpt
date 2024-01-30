import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../utils/moviesSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movie.popularMovies);

    const getApiData = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const jsonData = await data.json();
        dispatch(addPopularMovie(jsonData));
    }

    useEffect(()=>{
        !popularMovies && getApiData();
    },[])
}

export default usePopularMovies;