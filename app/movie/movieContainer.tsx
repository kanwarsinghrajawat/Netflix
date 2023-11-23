"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNowHook } from "../components/hooks/useNowPlaying";
import MovieCard from "./movieCard";
import { usePopular } from "../components/hooks/usePopular";
import { useTopRated } from "../components/hooks/useTopRated";

import NoResultFound from "./noResultFound";
const MovieContainer = () => {
  useNowHook();
  usePopular();
  useTopRated();
  const movies = useSelector((store: any) => store.movies);
  const filteredData = movies?.searchResultsCrad;
  const [data, setData] = useState(movies);
  useEffect(() => {
    setData(movies || []);
  }, [movies]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-black px-14 py-4">
        {filteredData == null ? (
          <>
            {" "}
            <div className="flex flex-col gap-7 ">
              <p className="text-white text-xl font-bold">Now Playing</p>
              <div className="flex gap-2 h-full overflow-x-auto">
                {/* <Slider {...settings}> */}
                {data?.nowPLayingMovies?.map((movie: any, key: number) => (
                  <React.Fragment key={key}>
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      overview={movie.overview}
                      releaseDate={movie.release_date}
                      voteAverage={movie.vote_average}
                    />
                  </React.Fragment>
                ))}
                {/* </Slider> */}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-xl font-bold">Popular Movies</p>
              <div className="flex gap-2  overflow-x-auto  scrollbar-none ">
                {/* <Slider {...settings}> */}
                {
                  data?.popularMovies?.length &&
                    data.popularMovies.map((movie: any, key: number) => (
                      <React.Fragment key={key}>
                        <MovieCard
                          key={movie.id}
                          id={movie.id}
                          title={movie.title}
                          poster_path={movie.poster_path}
                          overview={movie.overview}
                          releaseDate={movie.release_date}
                          voteAverage={movie.vote_average}
                        />
                      </React.Fragment>
                    ))

                  // <Shimmer/>
                }

                {/* </Slider> */}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-xl font-bold">TopRated Movies</p>
              <div className="flex gap-2 relative overflow-x-auto">
                {/* <Slider {...settings}> */}
                {data?.topRatedMovies?.map((movie: any, key: number) => (
                  <React.Fragment key={key}>
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      overview={movie.overview}
                      releaseDate={movie.release_date}
                      voteAverage={movie.vote_average}
                    />
                  </React.Fragment>
                ))}
                {/* </Slider> */}
              </div>
            </div>
          </>
        ) : (
          <div>
            {filteredData.length === 0 ? (
              <NoResultFound />
            ) : (
              <div className="py-20 flex items-center flex-col gap-8">
                <p className="text-white text-3xl font-bold">Search Results</p>
                {filteredData.map((movie: any, index: any) => (
                  <React.Fragment key={index}>
                    <div className="flex items-center justify-center h-[70vh]">
                      <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        overview={movie.overview}
                        releaseDate={movie.release_date}
                        voteAverage={movie.vote_average}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieContainer;
