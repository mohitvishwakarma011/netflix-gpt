import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingmovies = useSelector((store)=>store?.movie?.moviesList)
  const popularMovies = useSelector((store)=>store?.movie?.popularMovies?.results)
  const topRatedMovies = useSelector((store)=>store?.movie?.topRatedMovies?.results)
  const upComingMovies = useSelector((store)=>store?.movie?.upComingMovies?.results)
  // console.log(movies);
  return (
    nowPlayingmovies &&
    <div className='mt-[32%] md:mt-0 bg-black'>
      <div className='-mt-32 relative z-10  md:ps-10'>

      <MoviesList title={"Now Playing"} movies={nowPlayingmovies}/>
      <MoviesList title={"Popular"} movies={popularMovies}/>
      <MoviesList title={"Top Rated"} movies={topRatedMovies}/>
      <MoviesList title={"Up Coming"} movies={upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
