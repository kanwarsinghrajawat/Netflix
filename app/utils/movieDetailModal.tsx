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
  return (
    <>
      <div className="w-1/4 h-3/4 bg-gray-950  mix-blend-lighten absolute flex flex-col box-border z-100 overflow-y-auto boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)">
        <div className="">
          <div className="  absolute right-3 top-3 cursor-pointer">
            <Image
              src="/cancel.png"
              alt="cancel"
              className=" "
              width={30}
              height={30}
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
        <div className=" p-4 flex flex-col gap-3">
          <p className="text-3xl font-bold text-white">{title}</p>
          <p className="text-white text-sm ">{overview}</p>

          <div className="flex justify-between">
            <p className="text-white text-sm">{`Release Date : ${releaseDate}`}</p>
            <p className="text-white text-sm">{`Vote Average Date : ${voteAverage}`}</p>
          </div>
        </div>
        <div className="px-4 pb-4 float-right">
          <button
            className="text-white px-7 py-2 bg-gray-700 bg-opacity-70 rounded-sm text-xs flex items-center justify-center"
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
