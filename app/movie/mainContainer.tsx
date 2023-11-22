"use client";
import React from "react";
import TrailerBackground from "./trailerBackground";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies);

  if (!movies || !movies.nowPLayingMovies) return;
  console.log("mainContainer movies");
  console.log(movies);

  const mainMovies = movies?.nowPLayingMovies?.[0];

  const { overview, id, title } = mainMovies;

  return (
    <>
      <div className="relative overflow-x-hidden">
        <TrailerBackground movieId={id} />
        <div className="absolute top-1/3 px-8 w-2/4 flex flex-col gap-6">
          <p className="text-white font-semibold text-6xl">{title}</p>

          <p className="text-white">{overview}</p>
          <div className="flex gap-10">
            <Link
              href="/"
              className="bg-white px-9 rounded-sm py-2 text-xs flex items-center justify-center"
            >
              <Image src="" alt="" width={10} height={10} />

              <button>Play</button>
            </Link>
            <Link
              href="/"
              className="text-white px-7 py-2 bg-gray-700 bg-opacity-70 rounded-sm text-xs flex items-center justify-center"
            >
              <Image src="" alt="" width={10} height={10} />
              <button>More Info</button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
