import React from "react";
import Image from 'next/image';

export default function Testimonal() {
  return (
    <div className="w-full bg-[#F2F2F2] gap-4 p-4 md:px-[80px] md:py-[40px]  text-[14px]  flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start">


      <div className="rounded-full relative w-[80px] h-[80px] md:w-[110px] md:h-[110px] flex-shrink-0">
        <Image className="object-cover rounded-full cursor-pointer hover:scale-105 transition-all duration-700"  alt="Profile" src="/profile.png" layout="fill" />
      </div>

      <div className="w-full font-light">
        <h3 className="text-[#3d3d3d] text-center md:text-start">"We have been live on InnkeyPMS since January 1, 2013 and very much like the system. It is very user-friendly and has enough depth and variables to allow you to facilitate the tracking of a variety of activities. This enables us to base decisions on data rather than just feeling."</h3>

        <div className="flex font-normal text-center md:text-start md:pt-[30px] pt-[15px] flex-col w-full">
            <p>Dickson Kesenge</p>
            <p className=" font-light">01 / Avenue Hotel</p>
        </div>
      </div>
    </div>
  );
}
