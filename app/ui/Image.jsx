import React from 'react'
import Image from "next/image";


export default function Image() {
  return (
    <div className='relative '>
         <Image
                className=""
                src="/hotel1.jpg"
                alt="bookSearch"
                width={28}
                height={28}
              />
        
    </div>
  )
}
