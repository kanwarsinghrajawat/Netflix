import Image from "next/image";
import React from "react";
import Form from "@/app/utils/form";
import DetailCard from "./detailCard";
import TrailerBackground from "../movie/trailerBackground";

const Body = () => {
  return (
    <>
      <div className="">
        <div className="bg-contain  image-parent h-[80vh] relative">
          <div className="flex flex-col h-full w-full justify-center items-center gap-4 pt-32 max-lg:px-14 max-sm:px-8">
            <p className="text-white z-90 text-4xl font-black mix-blend-lighten max-lg:text-3xl text-center">
              Enjoy big movies, hit series and more from ₹ 149.
            </p>
            <p className="text-white z-90 text-xl font-normal mix-blend-lighten">
              Join today. Cancel anytime.
            </p>

            <Form />
          </div>
        </div>
        <hr className="h-2 bg-black bg-opacity-60 w-full"></hr>
        <div className="relative">
          {" "}
          <DetailCard
            heading="Enjoy on your TV"
            title="   Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more"
            image="/tv.png"
            style="flex-row"
          />{" "}
          <div className="w-1/6 h-3/4 absolute top-0 left-2/4">
            <TrailerBackground movieId={"926393"} />
          </div>
        </div>

        <DetailCard
          heading="Download your shows to watch offline"
          title="Save your favourites easily and always have something to watch"
          image="/mobile-0819.jpg"
          style="flex-row-reverse"
          gifOnImage={true}
        />

        <DetailCard
          heading="Watch everywhere"
          title="   Stream unlimited movies and TV shows on your phone, tablet,
          laptop, and TV"
          image="/device-pile-in.png"
          style="flex-row"
        />
        <DetailCard
          heading="Create profiles for kids"
          title="Send children on adventures with their favourite characters in a
          space made just for them—free with your membership."
          image="/child.png"
          style="flex-row-reverse"
        />
      </div>
    </>
  );
};

export default Body;
