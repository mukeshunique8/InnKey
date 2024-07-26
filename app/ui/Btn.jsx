import React from 'react'

export default function Btn({value,style}) {
  return (
    <div className={`'w-full  hover:scale-105 transition-all duration-300 max-w-[150px] cursor-pointer flex justify-center  items-center text-center py-1 px-2' ${style}`}>
        <h2 className='cursor-pointer text-white font-light text-[14px]'>{value}</h2>
    </div>
  )
}
