"use client";

import { API_KEY } from "@/app/constants";
import {
  addPlayingMovies,
  addTopRatedMovies,
} from "@/app/reduxStore/moviesStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useTopRated = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
      // console.log(data.results, "ghjkl");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};