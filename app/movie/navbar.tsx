import { movieNavbarLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-50 bg-black w-full flex justify-between px-8 py-2 items-center">
        <div className="flex items-center gap-12">
          <Image
            src="/Netflix_Logo_PMS.png"
            alt="Netflix-logo"
            width={140}
            height={27}
          />
          <div className="text-white text-xs flex gap-4">
            {movieNavbarLinks.map((item: any, index: any) => (
              <Link href={item.link}>{item.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <Image
              src="/kanwar.png"
              className=" rounded-sm"
              alt=""
              height={25}
              width={25}
            ></Image>{" "}
            <Link href="/signout">
              <Image
                src="/kanwar.png"
                className=" rounded-sm"
                alt=""
                height={25}
                width={25}
              ></Image>{" "}
            </Link>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Navbar;
