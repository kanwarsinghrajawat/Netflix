"use client";
import Image from "next/image";
import React, { useState } from "react";

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
      <div>
        {/* {isHovered ?
         (
          <iframe
            key={id}
            src={poster_path}
            //   controls
            //   autoPlay
            //   muted
            //   loop
            className="movie-video"
          />
        ) :
         ( */}
        <img
          height={150}
          width={200}
          src={poster_path}
          alt={title}
          className="movie-poster"
        />
        {/* )} */}
      </div>

      <p className="movie-title">{title}</p>
    </div>
  );
};

export default MovieCard;
