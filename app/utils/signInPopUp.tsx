import Link from "next/link";
import React from "react";

const SignInPopUp = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-full">
        <div className="flex flex-col  gap-20 z-50 mix-blend-lighten w-80  bg-black-400 rounded-md box-border">
          <div className="flex flex-col gap-6 ">
            <p className="text-white mix-blend-lighten text-3xl font-medium">
              Sign In
            </p>
            <div className="mix-blend-lighten flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email or phone Number"
                className="bg-gray-700 text-white px-4 py-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-700 text-white px-4 py-3"
              />
            </div>

            <div></div>
            <Link
              href="/movie"
              className="text-white mix-blend-lighten bg-red-600 text-center px-4 py-3 w-full z-50"
            >
              Sign In
            </Link>
          </div>
          <div>
            <p className="text-white">New To Netflix ? </p>
            <p className="text-white">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPopUp;
