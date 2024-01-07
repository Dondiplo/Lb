"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import "./Home.css";
import Nav from "@/components/nav/Nav";
import pexelsm from "public/pixelsm.png";
import pexels1m from "public/pixels1m.jpg";
import pexels2m from "public/pexels2m.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion"



export default function Home() {
  
  return (
    <div>
      <main className="hidden md:block snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
        <div>
          <Nav />
        </div>
        <div className="z-[5]  fixed  md:top-[50%] right-5 md:right-10 text-white  h-72">
          <FaArrowUp className="opacity-60" />
          <span className="pl-[6px]  opacity-60">|</span>

          <FaArrowDown className="animate-pulse" />
        </div>
        <section
          id="bg"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(/pexel1.png)" }}
        >
          <motion.h1
            initial={{opacity:0,y:150}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            className=" text-white overflow-hidden font-[times-new-roman] font-bold absolute  text-[45px]  z-10 "
          >
            Hi 👋🏽, I’m Tega
          </motion.h1>

          <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>

        <section
          id="bg1"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(/pexels.png)" }}
        >
          {/* <Image
          src={pexels1m}
          alt="pexels1m"
          className="h-screen md:hidden md:h-screen "
        /> */}
          <motion.h1
           initial={{opacity:0,y:250}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1}}
            className="text-white absolute  w-[80%] font-[times-new-roman] text-center font-medium text-[30px]  "
          >
            I’m a Product Designer with over 5 years of professional design
            experience. I’ve worked on a variety of products ranging from
            Financial Technology, E-Commerce, EduTech, Luxury Retail etc 🤩
          </motion.h1>

          <div className="absolute inset-0 bg-black opacity-90"></div>
        </section>

        <section
          id="bg3"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(/pexels2.png)" }}
        >
          {/* <Image
          src={pexels2m}
          alt="pexels2m"
          className="h-screen md:hidden md:h-screen"
        /> */}
          <motion.h1
           initial={{opacity:0,y:250}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1}}
            className="text-white absolute  w-[80%] font-[times-new-roman] font-medium text-[30px]  text-center"
          >
            You get to see a few of my favorite projects, some from a few years
            back, others more recently designs. Welcome to my portfolio and
            happy touring ✌🏼
          </motion.h1>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>
      </main>

      {/* mobile */}

      <main
        id="yourScrollContainer"
        className="md:hidden  snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth"
      >
        <div>
          <Nav />
        </div>
        <div className="z-[5]  fixed bottom-[10%] right-5  text-white ">
          <FaArrowUp className="opacity-[60%]" />
          <span className="pl-[6px]  opacity-[60%]">|</span>

          <FaArrowDown className="animate-pulse" />
        </div>
        <section
          id="bg"
          className="snap-center min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
          // style={{ backgroundImage: "url(/pixelsm.png)" }}
        >
          <Image
            src={pexelsm}
            alt="pexels1m"
            className="h-screen md:hidden md:h-screen  fixed"
          />
          <motion.h1
           initial={{opacity:0,y:150}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1}}
          className="text-[30px] text-white font-semibold font-[times-new-roman]">
            Hi 👋🏽, I’m Tega
          </motion.h1>

          <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>

        <section
          id="bg1"
          className="snap-center min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
          // style={{ backgroundImage: "url(/pexels.png)" }}
        >
          <Image
            src={pexels1m}
            alt="pexels1m"
            className="h-screen md:hidden md:h-screen "
          />
          <motion.h1
           initial={{opacity:0,y:250}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1}}
          className="text-white absolute  font-[times-new-roman] w-[80%] md:w-[40%] text-center font-medium text-[22px] md:text-xl">
            I’m a Product Designer with over 5 years of professional design
            experience. I’ve worked on a variety of products ranging from
            Financial Technology, E-Commerce, EduTech, Luxury Retail etc 🤩.
          </motion.h1>

          <div className="absolute inset-0 bg-black opacity-90"></div>
        </section>

        <section
          id="bg3"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
        >
          <Image src={pexels2m} alt="pexels2m" className="h-screen " />
          <motion.h1 
           initial={{opacity:0,y:250}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1}}
          className="text-white absolute  font-[times-new-roman] w-[80%] md:w-[40%] font-medium text-[22px] md:text-xl text-center">
            You get to see a few of my favorite projects, some from a few years
            back, others more recently designs. Welcome to my portfolio and
            happy touring ✌🏼
          </motion.h1>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>
      </main>
    </div>
  );
}
