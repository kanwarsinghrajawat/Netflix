import React from "react";
import Navbar from "./navbar";
import MovieContainer from "./movieContainer";
import MainContainer from "./mainContainer";
import { useSelector } from "react-redux";
import Spinner from "../utils/loader";

const page = () => {
  // const loading = useSelector((store: any) => store?.movies?.isLoader);
  return (
    <>
      {/* {loading ? ( */}
      <>
        <Navbar />
        <MainContainer />
        <MovieContainer />
      </>
      {/* ) : (
        <Spinner />
      )} */}
    </>
  );
};

export default page;
