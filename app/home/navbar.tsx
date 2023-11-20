import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between items-center absolute w-full  py-2 bg-gradient-to-b from-black z-10  px-80 max-2xl:px-36  max-xl:px-10 max-sm:px-4">
        <Image
          src="/Netflix_Logo_PMS.png"
          alt="Netflix-logo"
          width={180}
          height={37}
        />
        <div>
          <Link href="" className="bg-red-600 px-3 py-2 rounded-md text-white">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
