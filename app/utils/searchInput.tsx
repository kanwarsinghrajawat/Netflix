"use client";

import Image from "next/image";
import React, { useState } from "react";
import { addSearchData } from "../reduxStore/moviesStore";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const setDataInSearch = (event: any) => {
    setSearch(event?.target.value);
  };

  const setDataInRedux = (event: any) => {
    dispatch(addSearchData(search));
  };

  return (
    <>
      <div className="rounded border py-[2px] px-2 flex gap-2 items-center">
        <Image src="/search.png" alt="search-icon" width={15} height={15} />
        <input
          type="text"
          placeholder="search"
          value={search}
          className="  bg-black"
          onChange={setDataInSearch}
          onKeyPress={setDataInRedux}
        />
      </div>
    </>
  );
};

export default SearchInput;
