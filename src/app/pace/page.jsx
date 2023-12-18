"use client";
import React from "react";
import pace1 from "public/pace1.svg";
import pace2 from "public/pace2.svg";
import pace3 from "public/pace3.svg";
import pace4 from "public/pace4.svg";
import pace5 from "public/pace5.svg";
import pace6 from "public/pace6.svg";
import pace7 from "public/pace7.svg";
import pace8 from "public/pace8.svg";
import pace9 from "public/pace9.svg";
import pace10 from "public/pace10.svg";
import pace11 from "public/pace11.svg";
import pace12 from "public/pace12.svg";
import pace14 from "public/pace14.svg";
import pace15 from "public/pace15.svg";
import pace13 from "public/pace13.svg";
import pace16 from "public/pace16.png";
import paceg from "public/paceg.png";
import Image from "next/image";
import Navbar from "@/components/nav/Navbar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="bg-neutral-950 w-full">
  <Navbar fixed={false} />
  <div className="w-[96%] md:w-[75%] lg:w-[75%] mx-auto text-white pt-28 space-y-6 pb-12">
    <div className="mx-auto space-y-8">
      <h1 className="text-[20px]  md:text-[40px] font-bold">
        Pace Recruitment
      </h1>

      <p className="opacity-60 text-[15px] md:text-[18px]">
        Pace is a recruitment app created to help people get jobs within
        their community. It also helps employers simplify the recruitment
        process. This case study is focused on the jobseeker’s side of
        things and understanding what the process of putting together a
        usable product for a jobseeker was like.
      </p>

      <p className="opacity-60 pt-8 text-[15px] md:text-[18px]">
        Pace already existed before but I worked on a version update with
        multiple changes. Pace previously catered to just people in the tech
        space but a market was seen within the rising number of unemployed
        people outside the tech space and how to bridge the gap between
        employers and applicants, it splits in two (the jobseeker’s side and
        the employer’s side) and while I designed for both set of people at
        separate times, it was very important to not lose focus of who I was
        designing for at each point. This case study focuses on the
        jobseeker’s problems, the design process, the solution that was
        introduced and how these solutions would solve problems we believe
        our competitors aren’t solving.
      </p>
    </div>

    <div className="flex justify-center">
      <Image src={pace1} alt="pace1" className="" />
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <Image src={pace2} alt="pace2" />
      <Image src={pace3} alt="pace3" />
    </div>

    <div className="mx-auto space-y-8">
      <h1 className="text-[20px] font-bold md:text-[20px] opacity-60 pt-8">
       RESEARCH PROCESS 
      </h1>
      <p className="opacity-60 text-[15px] md:text-[18px]">
        User research - I took a week to speak to about 8 people that fit
        within the target market category (3 people looking to get hired, 3
        people who already had jobs but were hoping for something better, 2
        HR executives looking to hire).
      </p>
    </div>

    <div className="grid grid-col-1 md:grid-cols-2 gap-4 mx-auto md:pt-8">
      <Image src={pace13} alt="pace13" className="mx-auto" />
      <Image src={pace14} alt="pace14" />
      <Image src={pace15} alt="pace15" className="mx-auto" />
    </div>

    <Image src={pace16} alt="pace16" className="mx-auto" />

    <div className="mx-auto space-y-8">
      <h1 className="text-[20px] font-bold md:text-[20px] opacity-60 pt-8">
        HIGH FIDELITY DESIGNS
      </h1>
      <p className="opacity-60 text-[15px] md:text-[18px]">
        Creating these designs came after I had sketched out flows on papers
        and then created wireframes, I used Balsamiq for the wireframes of
        this project. Creating wireframes made it much easier to create the
        high fidelity designs although with the time constraint the
        wireframes were a bit rushed but because I had the flow I wanted for
        this work in my head, converting to high fidelity designs were easy
      </p>
    </div>

    <Image src={paceg} alt="paceg" className="hidden md:flex " />
<div className="w-[95%] mx-auto">
    <div className="md:hidden space-y-4 p-2 rounded-xl bg-[#9E784099] ">
      <Image src={pace4} alt="pace4" className="mx-auto" />
      <Image src={pace5} alt="pace5" className="mx-auto" />
      <Image src={pace6} alt="pace6" className="mx-auto" />
      <Image src={pace7} alt="pace7" className="mx-auto" />
      <Image src={pace8} alt="pace8" className="mx-auto" />
      <Image src={pace9} alt="pace9" className="mx-auto" />
      <Image src={pace10} alt="pace10" className="mx-auto" />
      <Image src={pace11} alt="pace11" className="mx-auto w-[90%]" />
    </div>
    </div>
    <h1 className="text-[20px] font-bold md:text-[20px] opacity-60 pt-8">
      THE END
    </h1>
    <p className="pb-12 opacity-60">
      See ya at the next case study, thanks for reading 👋🏾
    </p>

    <div className="text-[#5D17CE] flex pt-6 justify-end">
      <Link href="/payvice">PAYVICE</Link>
      <FaArrowRight className="mt-1 ml-2" />
    </div>
  </div>
</div>

  );
};

export default page;
