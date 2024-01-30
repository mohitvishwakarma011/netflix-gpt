import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store) => store.movie.upComingMovies);

    const getApiData = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const jsonData = await data.json();
        dispatch(addUpcomingMovie(jsonData));
    }

    useEffect(()=>{
        !upComingMovies && getApiData();
    },[])
}

export default useUpcomingMovies;