"use client";

import { API_KEY } from "@/app/constants";
import { setIsLoader, trailerVedio } from "@/app/reduxStore/moviesStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const UseTrailer = (movieId: any) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const apiUrl =
        "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?api_key=" +
        API_KEY;

      const response = await fetch(apiUrl);

      const data = await response.json();
      console.log(data);

      const trailer = data?.results.filter(
        (item: any) => item.type === "Trailer"
      );
      const filteredTrailer = trailer.length ? trailer[0] : data?.results[0];
      dispatch(trailerVedio(filteredTrailer?.key));
      dispatch(setIsLoader(false));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};
export default UseTrailer;
