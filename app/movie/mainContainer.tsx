"use client";
import React from "react";
import TrailerBackground from "./trailerBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies);

  if (!movies || !movies.nowPLayingMovies) return;
  console.log("mainContainer movies");
  console.log(movies);

  const mainMovies = movies?.nowPLayingMovies?.[0];

  const { overview, id, title } = mainMovies;

  return (
    <>
      <div className="relative">
        <TrailerBackground movieId={id} />
        <div className="absolute top-2/4 px-8 w-2/4 flex flex-col gap-6">
          <p className="text-white font-semibold text-6xl">{title}</p>

          <p className="text-white">{overview}</p>
          <div className="flex gap-10">
            <div className="bg-white px-8 rounded-sm py-1">
              <button>Play</button>
            </div>
            <div className="text-white px-4 py-1 bg-gray opacity-70 rounded-sm">
              <button>More Info</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
