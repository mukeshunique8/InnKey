import React from 'react';
import Image from 'next/image';

export default function Partners() {
  const imgUrls = [1, 2, 3, 4, 5, 6, 7, 8].map(num => `/${num}.svg`);

  return (
    <div className="w-full p-4 md:px-[80px] md:py-[40px] overflow-x-scroll scrollbar-hide">
      <div className="flex gap-5 justify-start sm:justify-center w-full">
        {imgUrls.map((url, idx) => (
          <div key={idx} className="relative  w-10 h-10 md:w-[90px] md:h-[90px] flex-shrink-0">
            <Image
              className="object-cover cursor-pointer hover:scale-110 transition-all duration-500 delay-75"
              src={url}
              alt={`Partner ${idx + 1}`}
              layout="fill"
             sizes='100%'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
