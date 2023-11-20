import Image from "next/image";
import React from "react";
import FooterIndex from "../components/footerIndex";
import Link from "next/link";

const SignOut = () => {
  return (
    <div>
      <div>
        <p className="text-white">
          Just so you know, you don't always need to sign out of Netflix. It's
          only necessary if you're on a shared or public computer.
        </p>
        <p className="text-white">
          You'll be redirected to Netflix.com in 30 seconds.
        </p>
        <div className="bg-black opacity-70">
          <Link href="/">Go Now</Link>
        </div>
      </div>

      <Image
        src="/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
        width={180}
        height={37}
      />
      <Image
        src="/sigOut.jpg"
        alt="crown-girlSignOut-image"
        width={600}
        height={400}
      />
      <FooterIndex />
    </div>
  );
};

export default SignOut;
