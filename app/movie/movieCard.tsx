"use client";
import React, { useState } from "react";
import MovieDetailModal from "../utils/movieDetailModal";

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
  // const [openModal, setOpenModal] = useState(true);
  return (
    <div>
      <div
        className=" w-52 h-32 object-fill cursor-pointer"
        // onClick={() => setOpenModal(true)}
      >
        <img
          src={poster_path}
          alt={title}
          className="movie-poster h-full w-full object-fill rounded-sm "
        />
      </div>
      {/* {openModal && <MovieDetailModal closeModal={() => setOpenModal(false)} />} */}
    </div>
  );
};

export default MovieCard;
