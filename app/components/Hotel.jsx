import React from 'react';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

export default function Hotel({ src, name = "Valley Vibes", location = "Chennai", style }) {
  return (
    <div className="relative w-full flex-shrink-0">
      <div className="relative overflow-hidden w-full h-[150px] md:h-[300px] flex-shrink-0">
        <Image
          className="object-cover cursor-pointer hover:scale-105 transition-all duration-700"
          src={src}
          alt={name}
          layout="fill"
          sizes="100%"
        />
      </div>
      <div className={`absolute text-white w-fit gap-4 bottom-0 ${style} glass2 p-[15px] md:p-[30px]`}>
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <h3 className="font-light">{location}</h3>
        </div>
        <div className="w-fit md:pt-4 pt-1 flex justify-start">
          <p className="bg-orange-400 md:p-2 p-1 text-start">Case Study</p>
          <div className="bg-white flex justify-center items-center p-1">
            <FaAngleRight color="black" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
