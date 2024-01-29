import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopratedMovie } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const getApiData = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const jsonData = await data.json();
        dispatch(addTopratedMovie(jsonData));
    }

    useEffect(()=>{
        getApiData();
    },[])
}

export default useTopRatedMovies;