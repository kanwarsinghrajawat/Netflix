"use client";
import SignInPopUp from "@/app/utils/signInPopUp";
import Image from "next/image";
import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-50">
          <Image
            src="/Netflix_Logo_PMS.png"
            alt="Netflix-logo"
            width={180}
            height={37}
          />
        </div>

        <div className="bg-contain  image-parent h-[80vh] relative items-center justify-center">
          <SignInPopUp />
        </div>
      </div>
    </>
  );
};

export default SignIn;
