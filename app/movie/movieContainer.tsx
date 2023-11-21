"use client";
// import { moviesList } from "@/constants";
import React from "react";
import { useSelector } from "react-redux";
import { useNowHook } from "../components/hooks/useNowPlaying";
import MovieCard from "./movieCard";
import { POSTER_URL } from "../constants";
import { usePopular } from "../components/hooks/usePopular";
import { useTopRated } from "../components/hooks/useTopRated";

const MovieContainer = () => {
  useNowHook();
  usePopular();
  useTopRated();
  const movies = useSelector((store: any) => store.movies);
  console.log(movies);
  return (
    <>
      <div className="flex flex-col gap-1 bg-black px-14 py-4">
        <div className="flex flex-col gap-4">
          <p className="text-white">Now Playing</p>
          <div className="flex gap-2 overflow-x-auto ">
            {movies?.nowPLayingMovies?.map((movie: any) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={`${POSTER_URL}${movie.poster_path}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white">Popular Movies</p>
          <div className="flex gap-2 overflow-x-auto">
            {movies?.popularMovies?.map((movie: any) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={`${POSTER_URL}${movie.poster_path}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white">TopRated Movies</p>
          <div className="flex gap-2 overflow-x-auto">
            {movies?.topRatedMovies?.map((movie: any) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={`${POSTER_URL}${movie.poster_path}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
