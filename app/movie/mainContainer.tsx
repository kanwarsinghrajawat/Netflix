"use client";
import React from "react";
import TrailerBackground from "./trailerBackground";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies);
  const filteredData = useSelector(
    (store: any) => store?.movies?.searchResultsCrad
  );
  if (!movies || !movies.nowPLayingMovies) return;
  // console.log("mainContainer movies");
  // console.log(movies);

  const mainMovies = movies?.nowPLayingMovies?.[2];

  const { overview, id, title } = mainMovies;

  return (
    <>
      {filteredData === null && (
        <div className="relative overflow-x-hidden">
          <TrailerBackground movieId={id} />
          <div className="absolute top-1/3 px-8 w-2/4 flex flex-col gap-6 max-lg:w-3/4 max-lg:px-6 max-md:px-4 max-md:top-1/2 max-sm:w-full">
            <p className="text-white font-semibold text-6xl max-lg:text-4xl">
              {title}
            </p>

            <p className="text-white text-lg font-semibold max-md:hidden">
              {overview}
            </p>
            <div className="flex gap-10 max-lg:h-12 max-sm:h-10">
              <Link
                href="/vedio"
                className="bg-white px-9 py-4 text-xs flex items-center justify-center gap-4 rounded-lg max-lg:py-2 max-sm:px-7 "
              >
                <Image src="/play.png" alt="" width={20} height={20} />
                <p className="text-base">Play</p>
              </Link>
              <Link
                href="/"
                className="text-white px-8 py-4 gap-4 bg-gray-700 bg-opacity-70 rounded-lg text-xs flex items-center justify-center max-sm:px-7 "
              >
                <button className="text-base">More Info</button>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};
export default MainContainer;
