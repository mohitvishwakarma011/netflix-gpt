import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from "./GptMovieSuggestion";
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';


const GptSearch = () => {

  const showShimmer = useSelector((store)=>store.gpt.showShimmer)
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      {showShimmer? <Shimmer/>:<GptMovieSuggestion />}
      
      
    </div>

  )
}

export default GptSearch
