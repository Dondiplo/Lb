import React from "react";
import start1 from "public/start1.svg";

import start2 from "public/start2.svg";
import start3 from "public/start3.png";
import start4 from "public/start4.svg";
import Image from "next/image";
import Nav from "@/components/nav/Nav";
const page = () => {
  return (
    <div className="bg-neutral-950 w-full">
      <Nav/>
      <div className="w-[95%] mx-auto  text-white pt-28  space-y-6">
        <h1 className="text-xl font-bold opacity-60">Startup Academy </h1>
        <p className="opacity-60">
          According to statistics (cannot confirm this data) there are about 305
          million startups created yearly. Most of them are by founders who have
          amazing ideas but creating a business and ensuring it stays relevant
          over time are two different and difficult things to make happen. The
          idea behind Startup Academy was how to help startup founders scale and
          accelerate their startups with the help of industry giants and well
          known founders of successful startups.
        </p>
<Image src={start4} alt="start4" className="mx-auto"/>
        <p className="opacity-60">
          Pace already existed before but I worked on a version update with
          multiple changes. Pace previously catered to just people in the tech
          space but a market was seen within the rising number of unemployed
          people outside the tech space and how to bridge the gap between
          employers and applicants, it splits in two (the jobseeker’s side and
          the employer’s side) and while I designed for both set of people at
          seperate times, it was very important to not lose focus of who I was
          designing for at each point. This case study focuses on the
          jobseeker’s problems, the design process, the solution that was
          introduced and how these solutions would solve problems we believe our
          competitors aren’t solving.
        </p>

        <Image src={start1} alt="start1" className="mx-auto"/>

        <h1 className="opacity-60">RESEARCH PROCESS</h1>
        <p className="opacity-60">
          User research - A lot of people hope to start their own companies or
          businesses at the least. Getting founders to interview was pretty easy
          as almost everyone had a small or mid-scale business that began with a
          great idea that could make a great startup Others believed there was
          one niche or the other in the current market e.g financial technology,
          recruitment, the food business etc. I spoke to 6 people who fell into
          the target market audience stated above
        </p>
<div className="md:flex mx-auto md:space-x-16 md:w-10/12  space-y-4">
        <button className="px-6 py-14 bg-[#1C1C1C] space-y-4 rounded-2xl">
          <h1 className="text-[25px] opacity-60">New Startup Founders</h1>
          <p className="text-[15px] opacity-60">
            {" "}
            Issues with this category of people revolved around connection and
            networking to reach the right people. Scaling up, idea progression,
            funding etc were main reasons for their decisions to be a part of
            this academy. Understanding what expectations were during the
            interview ensured that their needs were catered to as a major UX
            solution. Key point noted from this category of users was one word
            “Networking”
          </p>
        </button>
        <button className="p-6 bg-[#1C1C1C] space-y-4 rounded-2xl">
          <h1 className="text-[25px] opacity-60">Established Startup Founders</h1>
          <p className="text-[15px] opacity-60">
            {" "}
            Some scripted questions from this interview session were : What
            refreshing solutions can we bring to your company’s existing
            problems? What has your experience been like with other similar
            academies looking to improve networking in the African tech
            ecosystem? How can Startup Academy help you push for continuity and
            create growth in the existing community?
          </p>
        </button>
        </div>

        <h1 className="opacity-60">USER PERSONAS</h1>
        <div className="md:flex ">
        <Image src={start2} alt="start2" />
        <Image src={start3} alt="start3" />
        </div>
        <h1 className="text-xl opacity-60">CONCLUSION</h1>
        <p className="pb-10 opacity-60">
          This is one of the fastest projects I’ve ever worked on. Working on
          this project as a lone designer meant most design decisions were made
          by me but I ensured I got stakeholders’ input and thoughts on through
          each phase. Not all stages involved in this design process were
          documented in this case study but the result came out just as expected
          considering how fast paced this project was. It definitely was an
          interesting one.
        </p>
      </div>
    </div>
  );
};

export default page;
