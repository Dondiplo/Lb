"use client";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

import Nav from "@/components/nav/Nav";

import animationData from "public/eyes.json";
import words from "public/words.svg";
import pace from "public/pace.svg";
import payvice from "public/payvice.svg";
import thebulb from "public/thebulb.svg";
import startup from "public/startupa.svg";
import uba from "public/ubamoney.svg";
import arrow from "public/arrow.svg";

const projects = [
  {
    title: "PACE RECRUITING",
    image: pace,
    description: "Job recruitment platform",
    color: "#08A65B",
    link: "/pace",
    hoverColor: "#11C2B7",
  },
  {
    title: "PAYVICE AGENT APP",
    image: payvice,
    description: "Financial mobile app",
    color: "#BA8433",
    link: "/payvice",
    hoverColor: "#BA8433",
  },
  {
    title: "THE BULB AFRICA",
    image: thebulb,
    description: "Company website",
    color: "#11C2B7",
    link: "https://www.figma.com/proto/qSpevcz8tXXdP71eLLZ68S/Tega's-portfolio?page-id=0%3A1&type=design&node-id=181-6477&viewport=1845%2C949%2C0.22&t=joxRQvkDvrpuJB8I-1&scaling=min-zoom&mode=design",
    hoverColor: "#11C2B7",
  },
  {
    title: "STARTUP ACADEMY",
    image: startup,
    description: "School for startup founders",
    color: "#BA8433",
    link: "/startupAcademy",
    hoverColor: "#F37D0F",
  },
  {
    title: "UBA MONI AGENT APP",
    image: uba,
    description: "Financial mobile app",
    comingSoon: true,
    hoverColor: "#9985B9",
  },
];

const Page = () => {
  const getHoverColorStyle = (project) => {
    if (project.hoverColor) {
      return {
        color: project.hoverColor,
        borderColor: project.hoverColor,
      };
    }
    return {};
  };

  return (
    <div>
      <Nav />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth bg-[#1E1E1E]">
        {/* Words and Lottie Animation */}
        <div className="lg:block fixed bottom-5 md:top-[40%] left-[5%] z-0">
          <div className="relative w-[50%] md:w-[95%] ">
            <Image src={words} alt="words" />
            <Lottie
              className="w-6 md:w-12 absolute top-5 left-5 md:top-9 md:left-9"
              animationData={animationData}
            />
          </div>
        </div>

        {/* Right Arrow */}
        <div className="z-[5] opacity-[60%] fixed bottom-[5%] right-5 md:right-10">
          <Image src={arrow} alt="arrow" />
        </div>

        {/* Project Sections */}
        {projects.map((project, index) => (
          <section
            key={index}
            className="snap-start h-full  relative pt-40 lg:pt-40 lg:flex justify-end"
          >
            <div className="w-[90%] mx-auto lg:mx-0 lg:w-[780px] lg:h-[505px]">
              {/* Project Image */}
              {project.link && (
                <Link href={project.link}>
                  <div
                    className={`flex justify-end mr-4 mb-6 text-white md:hidden`}
                    style={getHoverColorStyle(project)}
                  >
                    <p>
                      {project.comingSoon
                        ? "Coming Soon --"
                        : "View Project --"}
                    </p>
                    <FaArrowRightLong className="mt-[5px] ml-3" />
                  </div>
                </Link>
              )}
              <Image src={project.image} alt={project.title} className="z-0" />
            </div>

            {/* Project Details */}
            <div className="lg:absolute pt-12 md:pt-40 left-[27%]">
              <div
                className="font-[700] opacity-60 text-white space-y-4 md:space-y-8 text-left w-[95%] mx-auto lg:w-full z-10"
                
              >
                <h1 className="md:text-[32px] lg:text-right">
                  {project.title}
                </h1>
                <p className="lg:text-left font-light md:font-medium">
                  {project.description}
                </p>
                {/* View Project Link */}
                {project.link && (
                  <Link href={project.link}>
                    <div
                      className={`hidden md:flex`}
                      style={getHoverColorStyle(project)}
                    >
                      <p>View Project -- </p>
                      <FaArrowRightLong className="mt-[5px] ml-3" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Page;
