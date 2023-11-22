"use client";

import React from "react";
import Navbar from "./navbar";
import MovieContainer from "./movieContainer";
import MainContainer from "./mainContainer";
import { useSelector } from "react-redux";
import Spinner from "../utils/loader";

const page = () => {
  return (
    <>
      {/* {loading ? ( */}
      <>
        <Navbar />
        {<MainContainer />}
        <MovieContainer />
      </>
      {/* ) : (
        <Spinner />
      )} */}
    </>
  );
};

export default page;
