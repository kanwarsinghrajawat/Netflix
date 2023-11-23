import React from "react";
import Form from "@/app/utils/form";
import Image from "next/image";
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
        <div className=" bg-black flex items-center justify-between  px-80 py-14 max-2xl:px-36  max-xl:px-10 max-lg:flex-col max-sm:px-4 ">
          <div className="flex flex-col gap-5">
            <p className="text-white text-4xl font-black"> Enjoy on your TV</p>
            <p className="text-white text-xl font-normal">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more
            </p>
          </div>

          <div className="relative">
            <img
              alt="tv-screen"
              src="/tv.png"
              className="w-full max-sm:h-96 "
            ></img>
            <div className="absolute  left-24 w-2/3 flex items-center justify-center h-[15rem] top-20 max-sm:h-40 max-sm:w-[53%] movie-home">
              <iframe
                src="https://www.youtube.com/embed/T2qiimgcPCg?autoplay=1&mute=1&loop=1"
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="h-2 bg-black bg-opacity-60 w-full"></hr>
        <div className=" bg-black flex items-center justify-between px-80  py-14 flex-row-reverse max-2xl:px-36  max-xl:px-10 max-lg:flex-col max-sm:px-4 ">
          <div className="flex flex-col gap-5">
            <p className="text-white text-4xl font-black">
              Download your shows to watch offline
            </p>
            <p className="text-white text-xl font-normal">
              Save your favourites easily and always have something to watch
            </p>
          </div>
          <div className="relative">
            <Image
              alt="/mobile-0819.jpg"
              src="/mobile-0819.jpg"
              className="w-full"
              width={350}
              height={350}
            ></Image>
            {/* <div className="w-96  h-20 flex overflow-hidden  border border-gray-300 items-center justify-center rounded-md absolute top-96 bottom-0  bg-black right-32 gap-4  z-10">
              <div>
                <Image
                  alt="boxShot"
                  src="/boxshot.png"
                  width={50}
                  height={20}
                />
              </div>
              <div>
                <p className="text-white ">Stranger Things</p>
                <p className="text-blue-600 ">Downloading...</p>
              </div>
              <Image
                src="/download-icon.gif"
                alt="gif"
                width={50}
                height={50}
              />
            </div> */}
          </div>
        </div>
        <hr className="h-2 bg-black bg-opacity-60 w-full"></hr>
        <div className=" bg-black flex items-center justify-between px-80 py-14 max-2xl:px-36  max-xl:px-10 max-lg:flex-col max-sm:px-4 ">
          <div className="flex flex-col gap-5">
            <p className="text-white text-4xl font-black"> Watch everywhere</p>
            <p className="text-white text-xl font-normal">
              Stream unlimited movies and TV shows on your phone, tablet
            </p>
          </div>
          <div className="relative">
            <img
              alt="tv-screen"
              src="/device-pile-in.png"
              className="w-full z-50  max-sm:h-96 relative"
            ></img>
            <div className="absolute  left-24 w-2/3 flex items-center justify-center h-[15rem] top-20 max-sm:h-40 max-sm:w-[53%] ">
              <iframe
                src="https://www.youtube.com/embed/T2qiimgcPCg?autoplay=1&mute=1&loop=1"
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="h-2 bg-black bg-opacity-60 w-full"></hr>
        <div className=" bg-black flex items-center flex-row-reverse px-80 py-14 justify-between  max-2xl:px-36  max-xl:px-10 max-lg:flex-col max-sm:px-4 ">
          <div className="flex flex-col gap-5">
            <p className="text-white text-4xl font-black">
              {" "}
              Create profiles for kidsEnjoy on your TV
            </p>
            <p className="text-white text-xl font-normal">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
          <div className=" top-32 left-24 w-2/3">
            <Image alt="" height={450} width={450} src="/child.png" />
          </div>
        </div>
        <hr className="h-2 bg-black bg-opacity-60 w-full"></hr>
      </div>
    </>
  );
};

export default Body;
