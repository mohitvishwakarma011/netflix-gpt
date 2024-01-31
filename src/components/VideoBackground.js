import useFetchTrailer from "../hooks/useFetchTrailer";
import {useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);
    
    useFetchTrailer(movieId);
  
  return (
    <div className="pt-[25%] md:pt-0 w-screen">
      <iframe
        className=" aspect-video w-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=0&mute=1&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
