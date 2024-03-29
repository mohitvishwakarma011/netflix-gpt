import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useFetchTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movie.trailerVideo);

    const getTrailer = async () => {

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const jsonData = await data?.json();
    // console.log(jsonData);
    const filterTrailer = jsonData?.results?.filter(
      (c) => c.type === "Trailer"
    );
    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : jsonData.results[0];
    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getTrailer();
  }, []);

};

export default useFetchTrailer;
