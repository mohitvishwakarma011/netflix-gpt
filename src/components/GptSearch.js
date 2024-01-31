import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const showShimmer = useSelector((store) => store.gpt.showShimmer);
  return (
    <>
      <div className="fixed -z-10 w-[100%]">
        <img className="h-screen object-cover w-screen " src={BG_URL} alt="logo" />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        {showShimmer ? <Shimmer /> : <GptMovieSuggestion />}
      </div>
    </>
  );
};

export default GptSearch;
