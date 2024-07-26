import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Btn from "../ui/Btn";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-4 md:px-[20px] md:py-[20px] ">
      <div className="w-1/2 flex md:pl-[25px]  justify-start items-center">
        <div className="relative flex justify-center items-center  overflow-hidden w-[80px] h-[50px] md:w-[150px] md:h-[100px] ">
          <Image
            className="object-cover cursor-pointer hover:scale-105 transition-all duration-700"
            src="/innkey.svg"
            alt="star"
            rating
            layout="fill"
            sizes="100%"
          />
        </div>
      </div>
      <div className="w-1/2 gap-3 flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="hidden  md:flex justify-between bg-white p-2 items-center rounded-2xl ">
            <input className="pl-2 focus:outline-none" type="text" placeholder="Search" />
            <IoIosSearch className="cursor-pointer" size={24} color="gray" />
          </div>

          <div className="w-[200px] hidden md:flex justify-center items-center">
            <Btn value="Customer Login" style="bg-red-800 p-2  rounded-2xl " />
          </div>
          <div className=" hidden justify-end items-center md:flex ">
          <RxHamburgerMenu size={40} color="white" />
          </div>
          <div className="w-full md:hidden flex justify-end items-center">
          <RxHamburgerMenu size={30} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
