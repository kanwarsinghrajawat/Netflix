import React, { useState } from "react";
import MovieDetailModal from "../utils/movieDetailModal";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  movieType: string;
  overview: string;
  releaseDate: string;
  voteAverage: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster_path,
  movieType,
  overview,
  releaseDate,
  voteAverage,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleFilterModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="h-full">
      <div
        className="w-[150px] h-auto cursor-pointer"
        onClick={handleFilterModal}
      >
        <img
          src={poster_path}
          alt={title}
          className="movie-poster h-full w-[150px] rounded-sm"
        />
      </div>
      {openModal && (
        <div className="h-screen bg-black bg-opacity-80 fixed inset-0 w-screen z-50 flex items-center justify-center rounded-lg ">
          <MovieDetailModal
            id={id}
            title={title}
            overview={overview}
            poster_path={poster_path}
            releaseDate={releaseDate}
            closeModal={() => setOpenModal(false)}
            voteAverage={voteAverage}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
