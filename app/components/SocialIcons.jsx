import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoSkype } from 'react-icons/io5';
import { FiInstagram } from "react-icons/fi";


export default function SocialIcons() {
  const icons = [
    { component: FaLinkedin, color: '#0077B5' },
    { component: FaFacebook, color: '#1877F2' },
    { component: FiInstagram, color: '#E4405F' },
    { component: FaTwitter, color: '#1DA1F2' },
    { component: FaYoutube, color: '#FF0000' },
    { component: IoLogoSkype, color: '#00AFF0' },
  ];

  const renderIcons = icons.map((icon, idx) => {
    const IconComponent = icon.component;
    return <IconComponent className='cursor-pointer hover:scale-110 transition-all duration-700 ' key={idx} size={24} color={icon.color} />;
  });

  return (
    <div className="w-full text-gray-800 gap-3 text-[14px] font-light bg-white p-2 md:px-[80px] py-[30px] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <p className="w-full flex text-center md:text-start justify-center md:justify-start items-center">
          INNKEYPMS © 2011- 2016. ALL RIGHTS RESERVED
        </p>
      </div>
      <div className="w-full  gap-3 md:w-1/2 flex flex-col md:flex-row  md:justify-between items-center justify-start">
        <p className="w-full flex justify-center md:justify-start items-center">
          Follow us
        </p>
        <div className="flex justify-evenly md:justify-between md:gap-2 w-[80%]  md:w-full">{renderIcons}</div>
      </div>
    </div>
  );
}
