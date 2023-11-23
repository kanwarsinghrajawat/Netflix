"use client";

import { API_KEY } from "@/app/constants";
import { addPopularMovies, setIsLoader } from "@/app/reduxStore/moviesStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const usePopular = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
      // dispatch(setIsLoader(false));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};
