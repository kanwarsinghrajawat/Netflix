import Image from "next/image";
import React, { useState } from "react";
import FooterIndex from "../components/footerIndex";
import Link from "next/link";
import Modal from "../utils/modal";

const SignOut = () => {
  return (
    <div className="">
      <div className="absolute flex justify-between">
        <Image
          src="/Netflix_Logo_PMS.png"
          alt="Netflix-logo"
          width={180}
          height={37}
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

      <FooterIndex />
    </div>
  );
};

export default SignOut;
