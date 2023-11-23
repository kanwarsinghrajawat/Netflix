"use client";

import { API_KEY } from "@/app/constants";
import { addPlayingMovies, setIsLoader } from "@/app/reduxStore/moviesStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useNowHook = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
      );
      const data = await response.json();
      dispatch(addPlayingMovies(data.results));
      // dispatch(setIsLoader(false));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};
