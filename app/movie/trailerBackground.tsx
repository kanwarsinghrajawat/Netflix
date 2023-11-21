"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import UseTrailer from "../components/hooks/useTrailer";

const TrailerBackground = ({ movieId }: any) => {
  UseTrailer(movieId);
  const trailerKey = useSelector(
    (store: any) => store?.movies?.trailerVedioKey
  );

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};
export default TrailerBackground;

{
}
