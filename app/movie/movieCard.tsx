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
  return (
    <div>
      <img
        src={poster_path}
        alt={title}
        className="movie-poster h-full w-full object-fill rounded-smzz"
      />
    </div>
  );
};

export default MovieCard;
