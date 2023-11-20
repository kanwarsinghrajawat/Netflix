import { movieNavbarLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <div>
          <Image
            src="/Netflix_Logo_PMS.png"
            alt="Netflix-logo"
            width={180}
            height={37}
          />
          <div>
            {movieNavbarLinks.map((item: any, index: any) => (
              <Link href={item.link}>{item.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <Link href="/signout">Sign Out</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
