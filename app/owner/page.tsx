import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black flex flex-col items-center justify-center h-screen w-full gap-12">
        <p className="font-bold text-4xl text-white">Who's Watching ?</p>
        <div className="flex gap-12 max-sm:flex-col">
          <div className="flex flex-col gap-4 items-center">
            <Link href="/movie">
              <Image src="/kanwar.png" alt="" height={150} width={150}></Image>{" "}
            </Link>
            <p className="text-white">Kanwar Singh</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Link href="/movie">
              <Image src="/ksr.png" alt="" height={150} width={150}></Image>{" "}
            </Link>
            <p className="text-white">Children</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
