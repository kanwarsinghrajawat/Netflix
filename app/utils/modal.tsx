"use client";
import Link from "next/link";
import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <div className="bg-white absolute p-9 mt-28 w-96 flex flex-col gap-5 max-sm:p-4">
          <p className="text-2xl font-medium">Leaving So soon ?</p>
          <p className="text-black">
            Just so you know, you don't always need to sign out of Netflix. It's
            only necessary if you're on a shared or public computer.
          </p>
          <p className="text-black">
            You'll be redirected to Netflix.com in 30 seconds.
          </p>
          <Link
            href="/"
            onClick={() => setShowModal(false)}
            className="text-white transform scale-95 transition-transform duration-150 ease-in-out"
          >
            <div className="text-center px-4 py-2 bg-blue-600 transform scale-95 transition-transform duration-150 ease-in-out">
              Go Now
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Modal;
