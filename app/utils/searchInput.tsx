"use client";
import Image from "next/image";
import React, { useState } from "react";
import { addSearchData, searchedmovies } from "../reduxStore/moviesStore";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((store: any) => store.movies);
  const setDataInSearch = (event: any) => {
    setSearch(event?.target.value);
  };
  const setDataInRedux = (event: any) => {
    if (event.key == "Enter") {
      dispatch(addSearchData(search));
      filterMovies(search, movies);
    }
  };
  const handleSearchValue = () => {
    dispatch(addSearchData(null));
    dispatch(searchedmovies(null));
    setSearch("");
    closeSearchBox();
  };
  const openSearchBox = () => {
    setIsSearchOpen(true);
  };
  const closeSearchBox = () => {
    setIsSearchOpen(false);
  };
  function filterMovies(searchString: any, movies: any) {
    const filteredNowPlaying = filterUniqueMovies(
      movies?.nowPlayingMovies,
      searchString
    );
    const filteredPopular = filterUniqueMovies(
      movies?.popularMovies,
      searchString
    );
    const filteredTopRated = filterUniqueMovies(
      movies?.topRatedMovies,
      searchString
    );
    const filteredMoviesObject = [
      ...filteredNowPlaying,
      ...filteredPopular,
      ...filteredTopRated,
    ];
    dispatch(searchedmovies(filteredMoviesObject));

    return filteredMoviesObject;
  }
  function filterUniqueMovies(movies: any[] | undefined, searchString: string) {
    const uniqueMovies: { [key: string]: any } = {};
    return (
      movies?.filter((movie: any) => {
        if (!uniqueMovies[movie.id]) {
          uniqueMovies[movie.id] = true;
          return movie.title.toLowerCase().includes(searchString.toLowerCase());
        }
        return false;
      }) || []
    );
  }
  return (
    <>
      {!isSearchOpen ? (
        <Image
          src="/search.png"
          alt="search-icon"
          width={15}
          height={15}
          onClick={openSearchBox}
        />
      ) : (
        <div className="rounded border py-[2px] px-2 flex gap-2 items-center">
          <Image src="/search.png" alt="search-icon" width={15} height={15} />
          <input
            type="text"
            placeholder="search"
            value={search}
            className="bg-transparent focus:outline-none text-white"
            onChange={setDataInSearch}
            onKeyPress={setDataInRedux}
          />
          <div className=" text-white  cursor-pointer">
            <Image
              src="/close-white.png"
              alt="cancel"
              className=" "
              width={15}
              height={15}
              onClick={handleSearchValue}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchInput;
