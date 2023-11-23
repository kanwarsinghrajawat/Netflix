import { footerLinks } from "@/app/constants";
import Link from "next/link";

const FooterIndex = () => {
  return (
    <>
      <div className=" text-white px-80 py-16 bg-black max-2xl:px-36 max-xl:px-10  max-sm:px-6 ">
        <div className="w-full grid gap-4 grid-cols-4 ">
          {footerLinks.map((item, index) => (
            <Link href={item.link} key={index}>
              <p className="underline text-white-opacity-70 text-xs">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-12">Netflix India</p>
      </div>
    </>
  );
};

export default FooterIndex;
