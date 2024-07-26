import React from "react";
import { PiTagSimpleFill } from "react-icons/pi";
import { CiSquareCheck } from "react-icons/ci";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaDesktop } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaHardHat } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { LuGift } from "react-icons/lu";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";
import { FaWineGlass } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: CiSquareCheck,
      category: "RESERVATION",
      points:
        "Optimize room inventory and pricing. Seamless integration with online travel agencies.",
    },
    {
      icon: FaDesktop,
      category: "FRONT DESK",
      points:
        "Streamline check-in and check-out processes. Real-time updates of room status.",
    },
    {
      icon: PiTagSimpleFill,
      category: "POINT OF SALE",
      points: "Manage multiple outlets. Process transactions with ease.",
    },
    {
      icon: FaGears,
      category: "MATERIAL MANAGEMENT",
      points: "Manage stock and purchase orders. Real-time inventory tracking.",
    },
    {
      icon: FaHardHat,
      category: "BANQUET & CONFERENCING",
      points: "Manage all types of events. Simplify booking and billing.",
    },
    {
      icon: GiVacuumCleaner,
      category: "HOUSEKEEPING",
      points:
        "Real-time updates and task assignments. Ensure room cleanliness and readiness.",
    },
    {
      icon: MdOutlineAccountBalance,
      category: "FINANCIAL ACCOUNTING",
      points:
        "Comprehensive financial management. Automate billing and payments.",
    },
    {
      icon: LuGift,
      category: "GIFT SHOP",
      points:
        "Manage inventory and sales. Enhance guest experience with retail options.",
    },
    {
      icon: MdAccountBalanceWallet,
      category: "FOOD COSTING",
      points: "Track food costs. Optimize kitchen efficiency.",
    },

    {
      icon: MdLocalLaundryService,
      category: "LAUNDRY MANAGEMENT",
      points:
        "Track laundry items and services. Improve operational efficiency.",
    },
    {
      icon: FaWineGlass,
      category: "HR & PAYROLL",
      points:
        "Manage staff records and payroll. Ensure compliance with labor laws.",
    },
    {
      icon: RiPagesLine,
      category: "MINIBAR",
      points: "Manage minibar inventory. Automate guest billing.",
    },
  ];

  const renderFeatures = features.map((feat, idx) => {
    const isCentered = (idx + 1) % 3 === 0;

    return (
      <div
        key={idx}
        className={`w-full flex flex-col gap-5 ${
          isCentered ? "md:items-center" : "items-start"
        }`}
      >
        <div
          className={`w-full flex  items-center ${
            isCentered ? "md:justify-center" : "justify-start"
          }`}
        >
          <feat.icon size={38} color="orange" />
        </div>
        <div
          className={`flex w-full overflow-hidden flex-col gap-2 ${
            isCentered ? "md:items-center" : "items-start"
          } ${isCentered ? "border-none" : "md:border-white md:border-r-[1px]"}`}
        >
          <div
            className={`w-full truncate text-[14px]  md:text-[16px] md:font-bold flex ${
              isCentered ? "md:justify-center" : "justify-start"
            }`}
          >
            <h3 className={`text-center ${isCentered ? "" : ""}`}>
              {feat.category}
            </h3>
          </div>
          <div
            className={`w-full flex ${
              isCentered ? "justify-start" : "justify-start w-[80%]"
            } items-center`}
          >
            <p className="text-[12px]  md:text-[14px]  font-light line-clamp-2">{feat.points}</p>
          </div>
          <div
            className={`flex hover:scale-105 transition-all duration-700 cursor-pointer justify-end items-center text-[8px] w-full md:w-[80%]`}
          >
            <p className="cursor-pointer">Read more</p>
            <BiRightArrowAlt size={15} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="relative flex flex-col p-4 md:px-[80px] md:pt-[100px] justify-center items-center md:justify-center md:items-start w-full gap-4 text-white">
  {/* Background Image */}
  <div className="md:absolute md:inset-0 md:-z-30 hidden md:block">
  <Image
      className="object-cover w-full h-full"
      src="/hr.jpg"
      alt="hr"
      fill
      sizes="100%"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-600 to-sky-800 md:opacity-50 -z-20"></div>

  {/* FEATURES */}
  <div className="relative z-10 w-full">
    <div className="pb-3">
      <h2 className="text-[24px]">INNKEY FEATURES</h2>
    </div>

    <div className="md:grid w-full gap-[30px] flex flex-col md:grid-cols-3">
      {renderFeatures}
    </div>
  </div>
</div>

  );
}
