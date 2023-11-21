"use client";
import SignInPopUp from "@/app/utils/signInPopUp";
import Image from "next/image";
import React from "react";
import FooterIndex from "../components/footerIndex";

const SignIn = () => {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="absolute z-5">
          <Image
            src="/Netflix_Logo_PMS.png"
            alt="Netflix-logo"
            width={180}
            height={0}
          />
        </div>

        <div className="bg-contain  image-parent h-[100vh] relative items-center justify-center">
          <SignInPopUp />
          <FooterIndex />
        </div>
      </div>
    </>
  );
};

export default SignIn;
