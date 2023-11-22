"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNowHook } from "../components/hooks/useNowPlaying";
import MovieCard from "./movieCard";
import { POSTER_URL } from "../constants";
import { usePopular } from "../components/hooks/usePopular";
import { useTopRated } from "../components/hooks/useTopRated";
import MovieDetailModal from "../utils/movieDetailModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieContainer = () => {
  useNowHook();
  usePopular();
  useTopRated();
  const movies = useSelector((store: any) => store.movies);
  console.log(movies);
  const [openModal, setOpenModal] = useState(true);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-black px-14 py-4">
        <div className="flex flex-col gap-4">
          <p className="text-white text-xl font-bold">Now Playing</p>
          <div className="flex gap-2 ">
            <Slider {...settings}>
              {movies?.nowPLayingMovies?.map((movie: any, key: number) => (
                <React.Fragment key={key}>
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    movieType={"nowPLayingMovies"}
                    poster_path={`${POSTER_URL}${movie.poster_path}`}
                    overview={movie.overview}
                    releaseDate={movie.release_date}
                    voteAverage={movie.vote_average}
                  />
                </React.Fragment>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-xl font-bold">Popular Movies</p>
          <div className="flex gap-2  ">
            <Slider {...settings}>
              {movies?.popularMovies?.map((movie: any, key: number) => (
                <React.Fragment key={key}>
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={`${POSTER_URL}${movie.poster_path}`}
                    movieType={"popularMovies"}
                    overview={movie.overview}
                    releaseDate={movie.release_date}
                    voteAverage={movie.vote_average}
                  />
                </React.Fragment>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-xl font-bold">TopRated Movies</p>
          <div className="flex gap-2 ">
            <Slider {...settings}>
              {movies?.topRatedMovies?.map((movie: any, key: number) => (
                <React.Fragment key={key}>
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={`${POSTER_URL}${movie.poster_path}`}
                    movieType={"topRatedMovies"}
                    overview={movie.overview}
                    releaseDate={movie.release_date}
                    voteAverage={movie.vote_average}
                  />
                </React.Fragment>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
