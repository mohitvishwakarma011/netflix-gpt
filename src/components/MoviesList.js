import { Link } from "react-router-dom";
import MoviesCard from "./MoviesCard";
const MoviesList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="p-3 ">
      <h1 className="font-bold text-md md:text-2xl text-white pt-2">{title}</h1>
      <div className="flex overflow-x-scroll text-white">
        <div className="flex">
          {movies?.map((movie) => (
           <Link key={movie.id} className="cursor-pointer" to={`/movieinfo/${movie.id}`}> <MoviesCard  poster_path={movie.poster_path} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
