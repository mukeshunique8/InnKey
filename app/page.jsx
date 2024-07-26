"use client";
import React from "react";
import Header from "./components/Header";
import Sub from "./components/Sub";
import Features from "./components/Features";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";
import Partners from "./components/Partners";
import Testimonal from "./components/Testimonal";
import HotelList from "./components/HotelList";
import Review from "./components/Review";

export default function Page() {
  return (
    <div className="max-w-screen-lg flex justify-center items-center flex-col mx-auto p-4 ">
      <Header />
      <Sub/>
      <Features/>
      <Review/>
      <HotelList/>
      <Testimonal/>
      <Partners/>
      <Footer/>
      <SocialIcons/>
    </div>
  );
}
