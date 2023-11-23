"use client";
import Image from "next/image";
import React, { useState } from "react";
import FooterIndex from "../components/footerIndex";
import Link from "next/link";
import Modal from "../utils/modal";

const SignOut = () => {
  return (
    <div className="w-full h-screen">
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

        <img
          src="/sigOut.jpg"
          alt="crown-girlSignOut-image"
          className="w-full h-full md-sm:h-96 "
        />
      </div>

      <FooterIndex />
    </div>
  );
};

export default SignOut;
