import React from "react";
import employ from "public/employ.svg";
import flow1 from "public/flow1.svg";
import pace1 from "public/pace1.png";
import pace2 from "public/pace2.svg";
import pace4 from "public/pace4.svg";
import Image from "next/image";
const page = () => {
  return (
    <div className="bg-neutral-950 w-full">
      <div className="w-[95%] mx-auto  text-white pt-8 space-y-6">
        <h1 className="text-xl font-bold">Pace Recruitments </h1>
        <p>
          Pace is a recruitment app created to help people get jobs within their
          community. It also helps employers simplify the recruitment process.
          This case study is focused on the jobseeker’s side of things and
          understanding what the process of putting together a usable product
          for a jobseeker was like.{" "}
        </p>

        <p>
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

        <Image src={employ} alt="employ" />
        <Image src={flow1} alt="flow1" />

        <h1>RESEARCH PROCESS</h1>
        <p>
          User research - I took a week to speak to about 8 people that fit
          within the target market category (3 people looking to get hired, 3
          people who already had jobs but were hoping for something better, 2 HR
          executives looking to hire).{" "}
        </p>

        <button className="p-6 bg-[#1C1C1C] space-y-4 rounded-2xl">
          <h1 className="text-[25px]">Job / Career Progression</h1>
          <p className="text-[15px]">
            {" "}
            The one question here was “how do employers see more of me?” . This
            category of people fit in the bucket of the typical employee in
            today’s world looking tp move up the corporate ladder. A key feature
            for these people was to ensure their employers couldn’t see what
            they were up to so a private profile for them away from their
            employers. Still able to use all available features on the app
            without the bother of “can my employer see how active I am on this
            recruitment platform?”
          </p>
        </button>
        <button className="p-6 bg-[#1C1C1C] space-y-4 rounded-2xl">
          <h1 className="text-[25px]">Unemployed</h1>
          <p className="text-[15px]">
            {" "}
            2 key features for a solution-oriented recruitment platform to serve
            the unemployed was to note that what’s most important to this
            category of people was “get me a job” and “what’s the pay like?”.
            Secondary problems focused on “what kind of job I would get?” and
            “how easily can I get a job using this platform?”.
          </p>
        </button>
        <button className="p-6 bg-[#1C1C1C] space-y-4 rounded-2xl">
          <h1 className="text-[25px]">HR Executives</h1>
          <p className="text-[15px]">
            {" "}
            These people had the least number of problems which meant a not so
            large solution. They just wanted to be able to access the best set
            of people to fill open positions without the hassle of sorting
            through thousands of prospects. Even with keyword search options,
            the pool of people to sort through is always still massive so a more
            streamlined search process was requested by the HR Executives
            interviewed during this research process.
          </p>
        </button>
        <h1>USER PERSONAS</h1>
        <Image src={pace1} alt="pace1" />
        <Image src={pace2} alt="pace2" />
        <Image src={pace4} alt="pace4" />

        <h1 className="text-xl">THE END</h1>
        <p className="pb-10">
          This project spans to both the web and mobile version, you can access
          the live version of this work at pace.africa. See ya at the next case
          study, thanks for reading 👋🏾
        </p>
      </div>
    </div>
  );
};

export default page;
