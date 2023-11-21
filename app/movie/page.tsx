import React from "react";
import Navbar from "./navbar";
import MovieContainer from "./movieContainer";
import MainContainer from "./mainContainer";

const page = () => {
  return (
    <>
      <Navbar />
      <MainContainer />
      <MovieContainer />
    </>
  );
};

export default page;
