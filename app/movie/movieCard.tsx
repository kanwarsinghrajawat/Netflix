"use client";
import Image from "next/image";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailCard from "../home/detailCard";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 10,
};

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  //   videoUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster_path,
  //   videoUrl,
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {" "}
      <div>
        {/* {isHovered ? (
          <iframe
            width="560"
            height="315"
            // src={
            //   "https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1"
            // }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : ( */}
        {/* <Slider {...settings}> */}
        <div className="w-60  h-40">
          <img
            src={poster_path}
            alt={title}
            className="movie-poster h-full w-full object-fill rounded-sm"
          />
        </div>
        {/* </Slider> */}
      </div>
      {/* <p className="movie-title">{title}</p> */}
    </div>
  );
};

export default MovieCard;
