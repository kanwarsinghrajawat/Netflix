import Image from "next/image";
import React from "react";

const MovieDetailModal = ({
  closeModal,
  title,
  overview,
  poster_path,
  releaseDate,
  voteAverage,
  id,
}: any) => {
  return (
    <>
      <div className=" h-screen bg-black opacity-60 relative flex items-center justify-center rounded-lg">
        <div className="w-2/4 h-3/4 bg-black  flex flex-col box-border z-50">
          <div className="z-50">
            <img
              //   src={poster_path}
              //   alt={title}

              src="https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRYr38JMDHASt9OQkdZvd-bn1tttjfGa8c5V4Hh2NbOwf3EpAxavdbq7gdpXUqZ48QTyWF4zQBUgGLETUE0KmdPoJe-Mr2wFAkKc.webp?r=920"
              alt="kanwar"
              className="movie-poster h-full w-full object-fill rounded-sm "
            />
          </div>
          <div className="opacity-30 p-4 flex flex-col gap-3">
            {/* <p className="">{title}</p>
            <p className="text-white text-3xl">{overview}</p>
            <p className="text-white">{releaseDate}</p>
            <p>{voteAverage}</p>
            <div className="flex justify-evenly">
              <p className="text-white">{`Release Date : ${overview}`}</p>
            <p className="text-white">{`Vote Average Date : ${overview}`}</p>
            </div> */}

            <p className="text-white text-3xl">The Nun II</p>
            <p className="text-white">
              In 1956 France, a priest is violently murdered, and Sister Irene
              begins to investigate. She once again comes face-to-face with a
              powerful evil.
            </p>
            <div className="flex justify-evenly">
              <p className="text-white">"2023-09-06"</p>
              <p className="text-white">6.914</p>
            </div>
          </div>
          <div className="p-4 float-right">
            <button
              className="text-white px-7 py-2 bg-gray-700 bg-opacity-70 rounded-sm text-xs flex items-center justify-center"
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailModal;
