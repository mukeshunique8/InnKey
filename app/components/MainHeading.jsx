import React from 'react'
import Btn from '../ui/Btn'

export default function MainHeading() {
  return (
    <div className='w-[90%] md:w-[80%] flex  px-3 md:px-[80px] py-[15px] text-white flex-col gap-3 text-center justify-center items-center'>
        <h1 className='w-full glass p-2 md:text-[24px]'>InnKey PMS For Resorts - Hospitality Management Made Easy</h1>
        <h3 className='flex md:text-[16px] text-[12px] w-full md:w-[90%] justify-center items-center text-center'>A comprehensive suite of hospitality software products that help you manage your hotel operations so that you can focus on your customers.</h3>
       <div className='w-full flex justify-center items-center'>
       <Btn value="Request a Demo" style="bg-[#1492e6] rounded-2xl p-2" />
       </div>
    </div>
  )
}
