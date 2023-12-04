// pages/page.js
"use client";
import Loading from "@/components/loading/Loading";
import React, { useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "public/eyes.json";
import words from "public/words.svg";
import Nav from "@/components/nav/Nav";
import { FaArrowRightLong } from "react-icons/fa6";
import pace from "public/pace.svg";
import payvice from "public/payvice.svg";

const Page = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <Loading setLoading={setLoading} />}
      <Nav />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth bg-[#1E1E1E]">
        <div className="hidden lg:block fixed top-[40%] left-[5%] z-10">
          <div className="relative w-[95%] ">
            <Image src={words} alt="words" />
            <Lottie
              className="w-12 absolute top-9 left-9"
              animationData={animationData}
            />
          </div>
        </div>
        <section className="snap-start h-full  relative">
          <div className="pt-32 lg:pt-64 lg:flex justify-end relative ">
            <div className="w-[95%] mx-auto lg:mx-0 lg:w-[780px] lg:h-[505px]">
              <Image src={pace} alt="pace" className="" />
            </div>

            <div className="lg:absolute pt-20 left-[27%]">
              <div className="font-[700] opacity-60 text-white space-y-8 text-left w-[95%] mx-auto lg:w-full   z-10">
                <h1 className="md:text-[32px] lg:text-right">
                  PACE RECRUITING
                </h1>
                <p className="lg:text-left">Job recruitment platform</p>
                <div className="hidden  md:flex text-[#08A65B]">
                  <p>View Project -- </p>
                  <FaArrowRightLong className="mt-[5px] ml-3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start h-full  relative">
          <div className="pt-32 lg:pt-64 lg:flex justify-end relative ">
            <div className="w-[95%] mx-auto lg:mx-0 lg:w-[780px] lg:h-[505px]">
              <Image src={payvice} alt="payvice" className="" />
            </div>

            <div className="lg:absolute pt-20 left-[27%]">
              <div className="font-[700] opacity-60 text-white space-y-8 text-left w-[95%] mx-auto lg:w-full   z-10">
                <h1 className="md:text-[32px] lg:text-right">
                  PAYVICE AGENT APP
                </h1>
                <p className="lg:text-left">Financial mobile app</p>
                <div className="hidden  md:flex text-[#BA8433]">
                  <p>View Project -- </p>
                  <FaArrowRightLong className="mt-[5px] ml-3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start h-full  relative">
          <div className="pt-32 lg:pt-64 lg:flex justify-end relative ">
            <div className="w-[95%] mx-auto lg:mx-0 lg:w-[780px] lg:h-[505px]">
              <Image src={payvice} alt="payvice" className="" />
            </div>

            <div className="lg:absolute pt-20 left-[27%]">
              <div className="font-[700] opacity-60 text-white space-y-8 text-left w-[95%] mx-auto lg:w-full   z-10">
                <h1 className="md:text-[32px] lg:text-right">
                  PAYVICE AGENT APP
                </h1>
                <p className="lg:text-left">Financial mobile app</p>
                <div className="hidden  md:flex text-[#BA8433]">
                  <p>View Project -- </p>
                  <FaArrowRightLong className="mt-[5px] ml-3" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="snap-start h-screen justify-center relative bg-orange-400"></section>
        <section className="snap-start h-screen justify-center relative bg-purple-400"></section>
      </div>
    </div>
  );
};

export default Page;
