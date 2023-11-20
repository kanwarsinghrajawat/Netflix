"use client";

import Link from "next/link";
import FooterIndex from "../components/footerIndex";
import Accordion from "./accordion";
import Body from "./body";
import Navbar from "./navbar";

const HomeIndex = () => {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar />
      <Body />
      <Accordion />
      <FooterIndex />
    </div>
  );
};

export default HomeIndex;
