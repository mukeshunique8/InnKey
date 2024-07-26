import React from "react";

export default function Footer() {
  const links = ["Home", "About Us", "Blog", " Contact Us"];
  const renderLinks = links.map((link, idx) => (
    <div className="w-full ">
      <p className="text-[12px] text-center md:text-start font-light  hover:text-blue-500 cursor-pointer hover:scale-105 transition-all duration-700  w-full">
        {link}
      </p>
    </div>
  ));
  return (
    <div className="w-full  bg-gray-800 gap-3 text-white p-2 md:px-[80px] py-[30px] flex flex-col md:flex-row  justify-between">
      <div className=" w-full md:w-1/3  gap-3  flex flex-col justify-center items-center md:justify-start md:items-start ">
        <h2 className="w-full text-[14px] justify-center items-center md:justify-start md:items-start  flex text-blue-500">Innkey INFOSYSTEM PVT LTD.</h2>
        <p className="flex text-[12px] w-full md:w-[80%] text-center md:text-start font-light  justify-start items-start ">
          Innkey Infosystem Pvt. Ltd. is a rapidly emerging company in the
          hospitality industry. It provides comprehensive software solutions
          that address the needs of various aspects of the hospitality and
          service industry.
        </p>
      </div>

      <div className=" w-full md:w-1/3   gap-3 flex flex-col md:pl-[30px] items-center ">
        <h2 className=" text-[14px] w-full flex justify-center items-center md:justify-start md:items-start">Quick Menu</h2>

        <div className="w-full flex  flex-col gap-3 justify-center items-center md:justify-start md:items-start">
          {renderLinks}
        </div>
      </div>

      <div className=" w-full md:w-1/3   gap-3 text-[12px] flex flex-col md:justify-end md:items-center ">
      <h2 className=" text-[14px] w-full flex justify-center items-center md:justify-start md:items-start">Contact Us</h2>

      <div className="flex flex-col  font-light   w-full justify-center items-center md:justify-start md:items-start">
      <p>Innkey PMS, </p>
      <p>306/307, 3rd floor,      </p>
      <p>Trinity Business Park,</p>
      <p>Surat, Gujarat 395010,</p>
      <p>India.</p>
      </div>
      <div className="flex flex-col pt-5   font-light  w-full  justify-center items-center md:justify-start md:items-start">
      <p>Sales and General Enquiries:      </p>
      <p className="text-blue-500">+91-2652234090</p>
      <p className=" pt-3">Email: <span className="text-blue-500"> sales@innkeypms.net</span></p>
      
      </div>

      </div>
    </div>
  );
}
