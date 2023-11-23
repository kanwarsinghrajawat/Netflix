import { movieNavbarLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "../utils/searchInput";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-50  w-full flex justify-between px-8 py-2 items-center bg-gradient-to-b from-black to-gray-600 h-16 max-lg:py-4 max-sm:px-3">
        <div className="flex items-center gap-12 max-sm:gap-0">
          <Link href="/movie">
            <Image
              src="/netflix.png"
              alt="Netflix-logo"
              width={40}
              height={40}
              className="hidden max-sm:block"
            />
          </Link>
          <Link href="/movie">
            <Image
              src="/Netflix_Logo_PMS.png"
              alt="Netflix-logo"
              width={160}
              height={37}
              className="max-sm:hidden"
            />
          </Link>

          <div className="text-white text-sm flex gap-4 max-lg:hidden">
            {movieNavbarLinks.map((item: any, index: any) => (
              <Link href={item.link}>{item.name}</Link>
            ))}
          </div>
          {/* <div className="text-white text-xs  gap-4 hidden max-lg:block">
            <Image
              src="/downward-arrow.png"
              alt="Downward-Arrow"
              width={10}
              height={10}
            ></Image>
            <div className="flex flex-col gap-2">
              {movieNavbarLinks.map((item: any, index: any) => (
                <option key={index} value={item.link} className="text-green">
                  {item.name}
                </option>
              ))}
            </div>
          </div> */}
        </div>
        <div>
          <div className="flex gap-3 items-center ">
            <SearchInput />

            <Image
              src="/kanwar.png"
              className=" rounded-sm"
              alt=""
              height={35}
              width={35}
            ></Image>
            <Link href="/signout">
              <Image
                src="/shutdown.png"
                className=" rounded-sm"
                alt="shiutdownImage"
                height={35}
                width={35}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
