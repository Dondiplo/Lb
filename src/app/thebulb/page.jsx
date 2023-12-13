import React from "react";
import Image from "next/image";
import bulb1 from "public/bulb1.svg";
import bulb2 from "public/bulb2.svg";
import bulb3 from "public/bulb3.png";
import bulb4 from "public/bulb4.svg";
import bulb5 from "public/bulb5.svg";
import bulb6 from "public/bulb6.svg";
import bulb7 from "public/bulb7.svg";
import bulb8 from "public/bulb8.svg";
import bulb9 from "public/bulb9.svg";
import bulb10 from "public/bulb10.svg";
import bulb11 from "public/bulb11.svg";
import bulb12 from "public/bulb12.png";
import Link from "next/link";
import Nav from "@/components/nav/Nav";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-neutral-950 w-full ">
      <Nav fixedStyle={false} />
      <div className="w-[95%] mx-auto  text-white  space-y-8  pt-28 pb-10">
        <h1 className="font-bold text-[20px] md:text-[40px] ">
          The Bulb Africa Website (redesign)
        </h1>

        <p className="opacity-60">
          A redesign of selected screens and introduction of new screens of a
          digital agency’s website. Redesigned with the aim of updating users
          and clients on new goals and aspirations as restrategized by the
          company.
        </p>
        <Image src={bulb1} alt="bulb1" className="mx-auto" />
        <h1 className="text-[20px]  opacity-60 md:pt-8">WEBSITE OVERVIEW</h1>
        <p className="opacity-60 md:pt-8">
          Prior to this redesign, The Bulb Africa’s website stated their
          promises and what they had plans to do as the company was founded in
          2020 and had very little traction. There were no solutions or
          particular products the company had as at the time of establishment as
          it was a new entity with a lot of drive and passion to help businesses
          grow and attain full potential, also they wanted to help individuals
          get introduced to tech as that new interesting career path.
        </p>
        <p className="opacity-60 pt-8">
          I worked on the total redesign of this website, this involved user and
          market research to understand the message we were trying to pass, the
          businesses we were trying to bring onboard as The Bulb Africa offers
          Saas and B2B services. It was important to ensure our end users
          understand how available resources were to help them achieve whatever
          vision they had for their companies.{" "}
        </p>
        <p className="opacity-60">
          I couldn’t stray from what already existed since it wasn’t an end to
          end design, just transforming the most important screens as selected
          by the Product Manager for this project. The company reported a 35%
          increase in revenue since the changes were made as users felt more
          comfortable bringing in businesses and investments.
        </p>
        <h1 className="text-[20px] font-bold opacity-60 pt-8">TARGET MARKET</h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 justify-center p-12 bg-[#1C1C1C] rounded-2xl">
          <button className="bg-[#125A1E] rounded-2xl p-20">Businesses</button>
          <button className="bg-[#125A1E] rounded-2xl p-20 ">
            Tech Enthusiasts
          </button>
          <button className="bg-[#125A1E] rounded-2xl p-20 md:mt-20">
            Entrepreneurs
          </button>
        </div>
        <h1 className="text-[20px] font-bold opacity-60 pt-8 md:pt-16 ">CHALLENGES</h1>
        <p className="opacity-60">
          Feedback - In selecting the most important screens to redesign, we had
          to look for ways to actually find out from users what screens they
          visited the most. We couldn’t make the decisions on what to change as
          the solution we were building wasn’t for us. I and the team of
          engineers picked a day to have meetings with a few of the companies we
          serviced. Getting the representatives of each company to get their
          business analysts to fill out a quick survey to help us narrow down
          their most visited screens and get back to us took time as we had to
          continuously reach out to get their feedback before we could start on
          this project.
        </p>
        <p className="opacity-60">
          Time - Anyone who has worked with an agency understands the constant
          haste that comes with projects, working through each design process
          phase in order to get the best result required splitting the usual
          time in half as I was the lone designer on this project. It required
          multiple iterations to get the best way to pass across what The Bulb’s
          vision, mission and objectives were. The time constraints required
          faster processing time.
        </p>
        <p className="opacity-60">
          Creating Emotions - “How do you evoke emotions in shrewd business men
          and women?” It was important to ensure the business seemed as
          relatable as possible. I needed to ensure the content, structure,
          typography and use of colors conveyed that the company understands how
          difficult it is to operate a business and sympathizes with these
          companies. The content should show The Bulb’s availabity and promise
          to help the companies trusting us with their business to assist them
          in reaching their full potential.
        </p>

        <h1 className="text-[20px] font-bold opacity-60 pt-8 md:pt-16">USER'S EXPECTATIONS</h1>
        <Image src={bulb2} alt="bulb2" className="mx-auto" />

        <h1 className="text-[20px] font-bold opacity-60 pt-8">WIRE FRAMES</h1>
        <p className="opacity-60">
          During the iteration process, I created mutliple skeletal designs, I
          scrapped a lot of designs till I got the one that I felt would convey
          the message the company had in mind. Working in an agile environment
          meant focusing on MVPs in order to achieve the best outcome. The
          multiple designs I came up with were modified over and over with each
          feedback gotten. Here are 2 wrireframes out of the 30+ screens created
          for this redesign.
        </p>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 justify-center ">
          <Image src={bulb3} alt="bulb3" className="mx-auto" />
          <Image src={bulb4} alt="bulb4" className="mx-auto" />
        </div>

        <h1 className="text-[20px] font-bold opacity-60 pt-8 md:pt-12 ">HIGH FIDELITY DESIGNS</h1>
        <p className="opacity-60  ">
          Wireframes already existed, the idea was formed, colors picked out,
          since it was a redesign and integration of certain screens, fonts were
          already in place and there was no need for a total overhaul of the
          font already in use as it was easily readable and well-structured.
          Getting into the hi-fi designs was a breeze, I still made minor
          changes along the way but at this point, it was all smooth.
        </p>

        <Image src={bulb12} alt="bulb12" className="mx-auto hidden md:block pt-6" />

        <div className="md:hidden  md:space-y-6 p-4 bg-[#718D75] rounded-xl">
          <Image src={bulb6} alt="bulb6" className="mx-auto " />
          <Image src={bulb7} alt="bulb7" className="mx-auto " />
          <Image src={bulb8} alt="bulb8" className="mx-auto " />
          <Image src={bulb9} alt="bulb9" className="mx-auto " />
          <Image src={bulb10} alt="bulb10" className="mx-auto " />
          <Image src={bulb11} alt="bulb11" className="mx-auto " />
        </div>
        <h1 className="text-[20px] font-bold opacity-60 pt-8">
          COMPARING TO OTHER TECHNOLOGY AGENCIES
        </h1>
        <p className="opacity-60">
          We compared the solution we had built as at the end of the design
          phase to already existing solutions that were similar and it was easy
          to see that we had built an exciting product that was seamless, easy
          and usable.
        </p>
        <h1 className="text-[20px] font-bold opacity-60 pt-8">WHAT I LEARNT</h1>
        <p className="opacity-60">
          Prior to this, I had never designed an agency’s website and it further
          showed that all products are different. There are different final
          consumers and ultimately no two designs are the exact same no matter
          how similar. I’m proud of the designs and what it has been able to
          help the business achieve ultimately.
        </p>
        <h1 className="text-[20px] font-bold  opacity-60 pt-8">THE END</h1>
        <div className="opacity-60">
          <Link href="https://thebulb.africa/">
            Please check out the live version of this project at thebulb.africa
            See ya at the next case study, thanks for reading 👋🏾
          </Link>
        </div>

        <div className="md:flex justify-between pt-10 hidden">
          <div className="flex text-[#5D17CE]">
            <FaArrowLeft className="mt-1 mr-2" />
            <Link href="/pace">PACE RECRUITMENT WEBSITE </Link>
          </div>
          <div className="text-[#5D17CE] flex">
            <Link href="/startupAcademy">STARTUP ACADEMY</Link>
            <FaArrowRight className="mt-1 ml-2" />
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default page;
