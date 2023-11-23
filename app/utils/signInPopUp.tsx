import Link from "next/link";
import React from "react";

const SignInPopUp = () => {
  return (
    <>
      <div className="flex flex-col  gap-12   bg-black-400 rounded-md box-border  w-1/4  bg-black opacity-80 px-16 py-28 max-2xl:w-2/5 max-md:w-3/5 max-sm:w-3/4 max-sm:px-8 max-sm:py-12">
        <div className="flex flex-col gap-6 ">
          <p className="text-white  text-3xl font-medium">Sign In</p>
          <div className=" flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email or phone Number"
              className="bg-gray-700 text-white px-4 py-2 rounded-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-700 text-white px-4 py-2 rounded-sm"
            />
          </div>

          <Link
            href="/owner"
            className="text-white  bg-red-600 text-center px-4 py-2 w-full z-50"
          >
            Sign In
          </Link>
        </div>
        <div>
          <p className=" text-zinc-500 text-xs">New To Netflix ? </p>
          <p className="text-zinc-500 text-xs pt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInPopUp;
