import React from "react";
import Image from "next/image";

export default function Review() {
  const categories = [
    "Ease of use",
    "Customer support",
    "Functionality",
    "Value for money",
  ];
  const renderCategories = categories.map((cat, idx) => (
    <div
      key={idx}
      className="w-full flex flex-col justify-center items-center md:justify-start md:items-start"
    >
      <p className="w-full text-[12px] md:text-base flex justify-center items-center md:justify-start md:items-start">
        {cat}
      </p>
      <div className="relative flex justify-center items-center  overflow-hidden w-[90px] h-[40px] ">
        <Image
          className="object-cover cursor-pointer hover:scale-105 transition-all duration-700"
          src="/rating3.svg"
          alt="star"
          rating
          layout="fill"
          sizes="100%"
        />
      </div>
    </div>
  ));
  return (
    <div className="w-full  gap-3 md:gap-8  p-4 md:px-[80px] md:py-[40px] flex flex-col md:flex-row">
      <div className="w-full md:w-1/3  border-r-[1px] border-gray-400 gap-5 flex flex-col justify-start items-start ">
        <div className="font-bold text-[20px] flex flex-col items-center md:items-start w-full">
          <h2>"Great Product,</h2>
          <h2>Excellent service"</h2>
        </div>
        <div className="flex flex-col font-semibold text-[16px] text-center md:text-start  w-full">
          <h2>Mr.George Mathew</h2>
          <h2 className="font-normal">GM / Komal Hotel</h2>
        </div>

        <div className="flex flex-col font-light text-[14px] text-center md:text-start   w-full">
          <h2>Hospitality, 200-500 Employees</h2>
          <h2>Used The software for: 2+ Years</h2>
          <h2>Reviewer Soure: Software advice</h2>
          <h2>Source: Software advice</h2>
        </div>
      </div>
      <div className="w-full md:w-2/3 md:gap-5 gap-2 flex flex-col  ">
        <div className="w-full  md:gap-20 flex flex-col md:flex-row justify-between  items-center">
          <div className="flex  flex-col  justify-center items-center">
            <p className="text-[25px] font-bold">5 / 5</p>
            <div className="relative flex justify-center items-center  overflow-hidden w-[90px] h-[40px] ">
              <Image
                className="object-cover cursor-pointer hover:scale-105 transition-all duration-700"
                src="/rating3.svg"
                alt="star"
                rating
                layout="fill"
                sizes="100%"
              />
            </div>
            <p>Overall</p>
          </div>

          <div className="w-full grid gap-2  pt-4 md:pt-0 grid-cols-2 ">
            {renderCategories}
          </div>
        </div>

        <div className="w-full  md:gap-20 flex flex-col md:flex-row justify-between  items-center">
        <div className="relative flex justify-center items-center  overflow-hidden w-[120px] h-[100px] ">
            <Image
              className=""
              src="/5.svg"
              alt="star"
              rating
              layout="fill"
              sizes="100%"
            />
          </div>
          <div className="flex  w-full flex-col  justify-center items-center md:items-start">
            <p className="w-full text-center md:text-start  text-[12px] md:text-base font-bold">Likelihood to recommend</p>
            <div className="relative  w-[190px] h-[100px] ">
              <Image
                className="object-cover cursor-pointer hover:scale-105 transition-all duration-700"
                src="/rating3.svg"
                alt="star"
                rating
                layout="fill"
                sizes="100%"
              />
            </div>
      
          </div>

       
        </div>
      </div>
    </div>
  );
}
