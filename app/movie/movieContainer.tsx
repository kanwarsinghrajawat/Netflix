"use client";
// import { moviesList } from "@/constants";
import React from "react";
import { useSelector } from "react-redux";
import { useNowHook } from "../components/hooks/useNowPlaying";
import MovieCard from "./movieCard";

const MovieContainer = () => {
  useNowHook();
  const movies = useSelector((store: any) => store.movies);
  console.log(movies);
  return (
    <>
      <div className="flex gap-1 overflow-x-auto">
        {movies?.nowPLayingMovies?.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </>
  );
};

export default MovieContainer;
