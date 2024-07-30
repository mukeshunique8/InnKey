import React from "react";
import Btn from "../ui/Btn";
import Image from 'next/image';

export default function Tour() {
  return (
    <div className="w-full bg-gray-400 gap-3 md:gap-8 p-4 md:px-[80px] md:py-[40px] flex flex-col">
      <div className="flex flex-col border-b-[1px] md:pb-[40px] w-full">
        <div className="flex w-full justify-center items-center mb-4">
          <Btn
            value="Product Tour"
            style="bg-sky-900 text-[18px] p-2 md:h-[40px] w-[200px] rounded-2xl"
          />
        </div>

        <div className="relative py-[60px] gap-5 flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-[170px] h-[170px] md:w-[350px] md:h-[200px] flex-shrink-0">
            <Image
              className="object-cover rounded-2xl cursor-pointer hover:scale-110 transition-all duration-500 delay-75"
              src="/dash.png"
              alt="dash"
              layout="fill"
              sizes='100%'
            />
          </div>
          <div className="relative w-[170px] h-[170px] md:w-[350px] md:h-[200px] flex-shrink-0">
            <Image
              className="object-cover rounded-2xl cursor-pointer hover:scale-110 transition-all duration-500 delay-75"
              src="/dash.png"
              alt="dash"
              layout="fill"
              sizes='100%'
            />
          </div>
          <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] hidden md:block w-[350px] h-[250px] md:w-[400px] md:h-[300px] flex-shrink-0 z-20">
            <Image
              className="object-cover rounded-2xl cursor-pointer hover:scale-110 transition-all duration-500 delay-75"
              src="/dash.png"
              alt="dash"
              layout="fill"
              sizes='100%'
            />
          </div>
          <div className="relative block md:hidden w-[170px] h-[170px] md:w-[250px] md:h-[250px] flex-shrink-0">
            <Image
              className="object-cover rounded-2xl cursor-pointer hover:scale-110 transition-all duration-500 delay-75"
              src="/dash.png"
              alt="dash"
              layout="fill"
              sizes='100%'
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:pt-[40px] w-full">
        <div className="flex w-full justify-center items-center mb-4">
          <Btn
            value="Video Tour"
            style="bg-sky-900 text-[18px] p-2 md:h-[40px] w-[200px] rounded-2xl"
          />
        </div>
        
        <div className="hidden md:flex py-[60px] w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4 mr-4">
            <iframe
              width="300"
              height="200"
              className="rounded-2xl"
              src="https://www.youtube.com/embed/m9coOXt5nuw?si=2aJe-siYOQ-pc9DX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              width="300"
              height="200"
              className="rounded-2xl"
              src="https://www.youtube.com/embed/QC8iQqtG0hg?si=2Xnfk5c1iQcvqeHM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex w-full justify-center items-center rounded-2xl">
            <iframe
              className="rounded-2xl"
              width="560"
              height="450"
              src="https://www.youtube.com/embed/QC8iQqtG0hg?si=2Xnfk5c1iQcvqeHM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex md:hidden w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4 mr-4">
            <iframe
              width="170"
              height="100"
              className="rounded-2xl"
              src="https://www.youtube.com/embed/m9coOXt5nuw?si=2aJe-siYOQ-pc9DX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              width="170"
              height="100"
              className="rounded-2xl"
              src="https://www.youtube.com/embed/QC8iQqtG0hg?si=2Xnfk5c1iQcvqeHM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              className="rounded-2xl"
              width="170"
              height="100"
              src="https://www.youtube.com/embed/QC8iQqtG0hg?si=2Xnfk5c1iQcvqeHM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
