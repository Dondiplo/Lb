import React from "react";
import start1 from "public/start1.svg";

import start2 from "public/start2.svg";
import start3 from "public/start3.png";
import start4 from "public/start4.svg";
import start5 from "public/start5.png";
import start6 from "public/start6.svg";
import start7 from "public/start7.svg";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
const page = () => {
  return (
    <div className="bg-neutral-950 w-full">
      <Navbar fixed={false} />
      <div className="w-[95%] mx-auto  text-white pt-28  space-y-6">
        <h1 className="text-[20px] md:text-[40px] font-bold  ">
          Startup Academy{" "}
        </h1>
        <p className="opacity-60">
          According to statistics (cannot confirm this data) there are about 305
          million startups created yearly. Most of them are by founders who have
          amazing ideas but creating a business and ensuring it stays relevant
          over time are two different and difficult things to make happen. The
          idea behind Startup Academy was how to help startup founders scale and
          accelerate their startups with the help of industry giants and well
          known founders of successful startups.
        </p>
        <Image src={start4} alt="start4" className="mx-auto md:pt-8" />

        <Image src={start1} alt="start1" className="mx-auto md:pt-8" />

        <h1 className="opacity-60 text-[20px] font-bold md:pt-8">
          RESEARCH PROCESS
        </h1>
        <p className="opacity-60">
          User research - A lot of people hope to start their own companies or
          businesses at the least. Getting founders to interview was pretty easy
          as almost everyone had a small or mid-scale business that began with a
          great idea that could make a great startup Others believed there was
          one niche or the other in the current market e.g financial technology,
          recruitment, the food business etc. I spoke to 6 people who fell into
          the target market audience stated above
        </p>
        <div className="md:grid  md:grid-cols-2 mx-auto md:space-x-16 md:w-10/12  space-y-4 md:space-y-0 pt-8">
          <button className="px-6 py-20 bg-[#1C1C1C] space-y-4 rounded-2xl">
            <h1 className="text-[20px] opacity-60 pt-2">
              New Startup Founders
            </h1>
            <p className=" opacity-60">
              {" "}
              Issues with this category of people revolved around connection and
              networking to reach the right people. Scaling up, idea
              progression, funding etc were main reasons for their decisions to
              be a part of this academy. Understanding what expectations were
              during the interview ensured that their needs were catered to as a
              major UX solution. Key point noted from this category of users was
              one word “Networking”
            </p>
          </button>
          <button className="px-8 py-4  font-bold bg-[#1C1C1C] space-y-4 rounded-2xl">
            <h1 className="text-[20px] font-bold opacity-60 pt-4">
              Established Startup Founders
            </h1>
            <p className=" opacity-60 text-[15px] ">
              {" "}
              Some scripted questions from this interview session were: <br />
              1. What refreshing solutions can we bring to your company’s
              existing problems? <br />{" "}
            </p>
            <p className=" opacity-60 text-[15px] ">
              2. What has your experience been like with other similar academies
              looking to improve networking in the African tech ecosystem?{" "}
            </p>
            <p className=" opacity-60 text-[15px] ">
              3.How can Startup Academy help you push for continuity and create
              growth in the existing community?
            </p>
          </button>
        </div>
        <Image src={start5} alt="start5" className="pt-12 mx-auto" />
        <h1 className="opacity-60 font-bold pt-12">HIGH FIDELITY DESIGNS</h1>

        <p className="opacity-60 ">
          Working on the high fidelity designs for this product was very
          interesting as the use of colors, font type, stock photos, icons etc
          had to be properly thought out in order to represent the idea and give
          in-depth solutions to the problems being faced. Feasibility testing
          was carried out multiple times after designs before development in
          order to make corrections and implement feedback before final handover
        </p>
        <div className="md:grid grid-cols-2 bg-[#2B3273] p-4 md:p-8 rounded-2xl ">
          <Image src={start6} alt="start6" />
          <Image src={start7} alt="start7" />
          <Image src={start3} alt="start3" />
          <Image src={start2} alt="start2" />
        </div>
        <h1 className="text-[20px] font-bold opacity-60">CONCLUSION</h1>
        <p className="pb-10 opacity-60">
          This is one of the fastest projects I’ve ever worked on. Working on
          this project as a lone designer meant most design decisions were made
          by me but I ensured I got stakeholders’ input and thoughts on through
          each phase. Not all stages involved in this design process were
          documented in this case study but the result came out just as expected
          considering how fast paced this project was. It definitely was an
          interesting one.
        </p>

        <div className=" flex text-[#5D17CE] pt-12 pb-12">
          <FaArrowLeft className="mt-1 mr-2" />
          <Link href="/pace">PACE RECRUITMENT WEBSITE </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
