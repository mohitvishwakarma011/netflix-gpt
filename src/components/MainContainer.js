import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movie?.moviesList);

    if(!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);

  return (
    <div className=''>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview}/>
      <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer;
