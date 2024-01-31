import { useDispatch, useSelector } from "react-redux"
import langs from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai"
import { options } from "../utils/constants";
import { addGptMovieResult, setShowShimmer } from "../utils/gptSlice";


const GptSearchBar = () => {
  const language = useSelector((store)=>store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  let errorGptResult = false;

  const searchMovieTMDB = async (movie)=>{

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );

    const jsonData = await data.json();

    return jsonData.results;
  }


  const handleGptSearchClick= async ()=>{
    dispatch(setShowShimmer());

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :"+searchText.current.value + " only give name of 10 movies. comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmal, Hera Pheri ";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });

    
    if (!gptResult.choices) {
      // TODO: Write Error Handling
      errorGptResult=true;
    }

    const gptresultMovies = gptResult.choices?.[0].message?.content.split(",");

    const promiseArray = gptresultMovies.map((movie)=>searchMovieTMDB(movie));

    const TMDBResult = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptresultMovies, movieResults: TMDBResult}))

  }
  return (
    <div className="pt-[10%] flex justify-center flex-col ">
      <div className="w-screen text-center">

      <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-1/2 bg-black grid grid-cols-12 m-auto">
        <input ref={searchText} className="p-2 md:p-4 m-4 col-span-9" type="text" placeholder={langs[language].gptSearchPlaceholder}></input>
        <button onClick={handleGptSearchClick} className="col-span-3 my-4 me-2 md:m-4 py-0 md:py-2 px-0 bg-red-700 text-white rounded-lg">{langs[language].search}</button>
      </form>
      </div>
      {errorGptResult && <p className="text-xl font-bold text-red-700 z-50 text-center bg-slate-800 rounded-md mx-auto my-2 p-2">Error while fetching Data!</p>}
    </div>
  )
}

export default GptSearchBar
