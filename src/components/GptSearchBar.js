import { useSelector } from "react-redux"
import langs from "../utils/languageConstants";

const GptSearchBar = () => {
  const language = useSelector((store)=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input className="p-4 m-4 col-span-9" type="text" placeholder={langs[language].gptSearchPlaceholder}></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{langs[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
