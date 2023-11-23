import React, { useState } from "react";
import MovieDetailModal from "../utils/movieDetailModal";
import { POSTER_URL, POSTER_URL_MODAL } from "../constants";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  releaseDate: string;
  voteAverage: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster_path,
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
          src={`${POSTER_URL}${poster_path}`}
          alt={title}
          className="movie-poster h-full w-[150px] rounded-sm"
        />
      </div>
      {openModal && (
        <>
          {console.log("FGTYHGHIJHK", poster_path)}
          <div className="h-screen bg-black bg-opacity-80 fixed inset-0 w-screen z-50 flex items-center justify-center rounded-lg ">
            <MovieDetailModal
              id={id}
              title={title}
              overview={overview}
              poster_path={`${POSTER_URL_MODAL}${poster_path}`}
              releaseDate={releaseDate}
              closeModal={() => setOpenModal(false)}
              voteAverage={voteAverage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
