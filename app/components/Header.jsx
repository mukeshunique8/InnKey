import React from "react";
import Image from "next/image";
import MainHeading from "./MainHeading";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="w-full relative">
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          className="object-cover md:object-fill"
          src="/hotel3.png"
          alt="hotel1"
          fill
          sizes="100%"
        />
        {/* <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-zinc-100 to-blue-300 md:opacity-50 z-20"></div> */}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90 z-10"></div>

      <div className="absolute flex justify-center items-center bottom-[20px] z-30">
        <MainHeading />
      </div>
      <div className="absolute flex justify-center items-center w-full top-0 z-30">
        <Navbar />
      </div>
    </div>
  );
}
