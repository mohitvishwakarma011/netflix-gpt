import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constants";
import Header from "./Header";

const MovieInfo = () => {
  const { mId } = useParams();

  const [movieVideo, setMovieVideo] = useState(null);

  const fetchMovieInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + mId + "/videos?language=en-US",
      options
    );
    const jsonData = await data.json();
    const filterTrailer = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : jsonData.results[0];

    setMovieVideo(trailer);
  };

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <>
      <Header />
      {movieVideo && (
        <div>
          <iframe
            className=""
            src={`https://www.youtube.com/embed/${movieVideo.key}?si=frsSKvrXPYhcB2eb&autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default MovieInfo;
