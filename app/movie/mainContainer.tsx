"use client";
import React from "react";
import TrailerTitle from "./trailerTitle";
import TrailerBackground from "./trailerBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies);

  if (!movies || !movies.nowPLayingMovies) return;
  console.log("mainContainer movies");
  console.log(movies);

  const mainMovies = movies?.nowPLayingMovies?.[0];

  const { original_title, id, title } = mainMovies;

  return (
    <>
      <TrailerTitle />
      <TrailerBackground movieId={id} />
    </>
  );
};
export default MainContainer;
