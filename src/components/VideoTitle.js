import React from "react";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video mt-[25%] md:mt-0 pt-[40%] md:pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="px-2 md:text-5xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block py-6 px-2 text-sm md:text-lg w-full md:w-1/4">{overview}</p>
      <div className="mx-2 md:mx-0 ">
        <button className=" bg-white text-black mt-1 md:mt-0 p-1 md:p-4 md:px-12 text-sm md:text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-1 md:p-4 md:px-12 text-sm md:text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
