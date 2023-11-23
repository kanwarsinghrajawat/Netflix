import SignInPopUp from "@/app/utils/signInPopUp";
import Image from "next/image";
import React from "react";
import FooterIndex from "../components/footerIndex";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <div className="relative overflow-x-hidden h-full">
        <div className="absolute z-50">
          <Link href="/signIn">
            {" "}
            <Image
              src="/Netflix_Logo_PMS.png"
              alt="Netflix-logo"
              width={180}
              height={0}
            />
          </Link>
        </div>

        <div className="  signInImage h-screen relative items-center justify-center">
          <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
          <div className="flex items-center w-full justify-center h-full">
            <SignInPopUp />
          </div>
        </div>
        <FooterIndex />
      </div>
    </>
  );
};

export default SignIn;
