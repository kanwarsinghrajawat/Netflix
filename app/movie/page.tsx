import React from "react";
import Navbar from "./navbar";
import MovieContainer from "./movieContainer";
import MainContainer from "./mainContainer";

import FooterIndex from "../components/footerIndex";

const page = () => {
  return (
    <>
      <>
        <Navbar />
        <MainContainer />
        <MovieContainer />
        <FooterIndex />
      </>
    </>
  );
};

export default page;
