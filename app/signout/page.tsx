"use client";
import Image from "next/image";
import React, { useState } from "react";
import FooterIndex from "../components/footerIndex";
import Link from "next/link";
import Modal from "../utils/modal";
import ReactPlayer from "react-player";

const SignOut = () => {
  return (
    <div className="w-full">
      <div className="absolute flex justify-between w-full px-8 py-2 items-center">
        <Image
          src="/Netflix_Logo_PMS.png"
          alt="Netflix-logo"
          width={160}
          height={27}
        />
        <div>
          <Link
            href="/signIn"
            className="bg-red-600 px-3 py-2 rounded-md text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
      <div className="flex items-start justify-center">
        <Modal />

        <Image
          src="/sigOut.jpg"
          alt="crown-girlSignOut-image"
          height={100}
          width={1920}
        />
      </div>
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        playing={true}
        width={100}
      /> */}

      <FooterIndex />
    </div>
  );
};

export default SignOut;
