"use client";
import { accordion } from "@/app/constants";
import Form from "@/app/utils/form";
import Image from "next/image";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="px-80 py-16 flex flex-col gap-3 bg-black items-center justify-center max-2xl:px-36 max-xl:px-10  max-sm:px-6">
        <p className="text-4xl font-black text-white py-4 text-center">
          Frequently Asked Questions
        </p>
        {accordion.map((item: any, index: number) => (
          <div key={index} className="w-full  ">
            <div
              className="flex justify-between bg-custom  p-6 cursor-pointer"
              onClick={() => handleAccordion(index)}
            >
              <p className="text-white text-xlw-full text-left">{item.ques}</p>
              {openIndex === index ? (
                <Image src="/minus.png" alt="" width={20} height={8} />
              ) : (
                <Image src="/plus.png" alt="" width={20} height={8} />
              )}
            </div>

            {openIndex === index && (
              <div className="bg-custom text-xl p-6 mt-1">
                <p className="text-white">{item.ans}</p>
              </div>
            )}
          </div>
        ))}
        <div className="my-4 w-full text-center">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Accordion;
