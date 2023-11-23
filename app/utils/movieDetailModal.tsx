"use client";
import Image from "next/image";
import React from "react";

const MovieDetailModal = ({
  closeModal,
  title,
  overview,
  poster_path,
  releaseDate,
  voteAverage,
  id,
}: any) => {
  {
    console.log("ghjk", poster_path);
  }

  return (
    <>
      <div className="w-1/3 h-4/5  bg-gray-950  box-shadow-md animate-fadeIn  mix-blend-lighten absolute flex flex-col box-border z-100 overflow-y-auto rounded-2xl boxShadow: '0 0 10px rgba(0, 0, 0, 0.5) max-lg:w-2/4 max-md:w-2/3  max-sm:w-3/4">
        <div className="">
          <div className="  absolute right-3 top-3 cursor-pointer">
            <Image
              src="/close-white.png"
              alt="cancel"
              className=" "
              width={20}
              height={20}
              onClick={closeModal}
            />
          </div>

          <div className="w-full">
            <img
              src={poster_path}
              alt={title}
              className="movie-poster  h-80  w-full object-inherit rounded-sm "
            />
          </div>
        </div>
        <div className=" p-4 flex pt-20 flex-col gap-3">
          <p className="text-3xl font-bold text-gray-200">{title}</p>
          <p className="text-white text-sm ">{overview}</p>

          <div className="flex justify-between">
            <p className="text-white text-sm">{`Release Date : ${releaseDate}`}</p>
            <p className="text-white text-sm">{`Vote Average Date : ${voteAverage}`}</p>
          </div>
        </div>
        <div className="px-4 pb-4 pt-6 float-right">
          <button
            className="text-white px-8 py-3 bg-gray-700 bg-opacity-70 rounded-sm text-sm flex items-center justify-center"
            onClick={closeModal}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieDetailModal;
