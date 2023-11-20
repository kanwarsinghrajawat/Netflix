"use client";
// import { moviesList } from "@/constants";
import React, { useEffect } from "react";
import MovieCard from "./movieCard";
import { useDispatch, useSelector } from "react-redux";
import { useNowHook } from "../components/hooks/useNowPlaying";
import { addPlayingMovies } from "@/app/store/moviesStore";
import { API_KEY } from "@/app/constants";

const MovieContainer = () => {
  const dispatch = useDispatch();
  useNowHook();
  const movies = useSelector((store: any) => store.movies);
  console.log(movies);
  return (
    <>
      <div className="flex gap-1 overflow-x-auto">
        {/* {moviesList.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            //   videoUrl={`URL_TO_YOUR_VIDEO_API/${movie.id}`} // Replace with your actual video URL or API
          />
        ))} */}
      </div>
    </>
  );
};

export default MovieContainer;
