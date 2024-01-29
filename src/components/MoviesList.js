import MoviesCard from "./MoviesCard";
const MoviesList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="p-3 ">
      <h1 className="font-bold text-2xl text-white p-2">{title}</h1>
      <div className="flex overflow-x-scroll text-white">
        <div className="flex">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
