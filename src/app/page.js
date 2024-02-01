"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import "./Home.css";
import Nav from "@/components/nav/Nav";
import pexelsm from "public/pixelsm.png";
import pexels1m from "public/pixels1m.jpg";
import pexels2m from "public/pexels2m.jpg";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import star from "public/star.svg";
import head from "public/head.svg";
import texts from "public/text4.png";
import textre from "public/textre.png";

const words = ["DESIGN", "IDEATE", "INNOVATE", "DESIGN", "IDEATE"];

export default function Home() {
  return (
    <div>
      <main className="hidden md:block snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth ">
        <div>
          <Nav />
        </div>

        <section
          id="bg"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: "url(/pexel1.svg)" }}
        >
          <div className="z-[5]  absolute  md:top-[80%] right-5 md:right-10 text-white  h-72">
            <FaArrowUp className="opacity-60" />
            <span className="pl-[6px]  opacity-60">|</span>

            <FaArrowDown className="animate-pulse" />
          </div>
          <h1 className="font-[times-new-roman] font-medium text-[30px] text-white absolute top-[20%]">
            Hi 👋🏽, I’m Tega
          </h1>

          <div
            id=""
            className="   flex absolute top-[20%]  z-[30]  h-[50%] w-[300%]"
          >

            <Image src={texts} alt="text" id="left" className=""/>
            <Image src={texts} alt="text"  id="left"/>
          </div>

          <div  className=" top-[40%] absolute flex  h-[50%] w-[300%] z-[30]">
            <Image src={texts} alt="text" id="right" />
            <Image src={texts} alt="text" id="right" />
            
          </div>

          <div className="absolute inset-0 bg-black opacity-40"></div>
        </section>

        <section
          id="bg1"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(/pexels.png)" }}
        >
          <div className="z-[5]  absolute  md:top-[50%] right-5 md:right-10 text-white  h-72">
            <FaArrowUp className="opacity-60" />
            <span className="pl-[6px]  opacity-60">|</span>

            <FaArrowDown className="animate-pulse" />
          </div>

          <Image src={head} alt="head" className="absolute top-[23%] z-20" />
          <h1 className="text-white absolute w-[80%] font-[times-new-roman] text-center font-medium text-[26px]">
            I’m a Product Designer with over 6 years of professional design
            experience. I’ve worked on a variety of products ranging from
            Financial Technology, E-Commerce, EduTech, Luxury Retail etc 🤩.
          </h1>
          <div
           
            className="absolute bottom-[-10%]  h-[50%] w-[400%] flex z-[30]"
          >
            {" "}
            <Image src={textre} alt="textre" id="left" />
            <Image src={textre} alt="textre"  id="left"/>
          </div>
          {/* <h2 id="right" className="text-[200px] font-[700] font-[times-new-roman] text-white opacity-[94%] absolute top-[65%] overflow-hidden">IDEATE.CREATE.INNOVATE</h2> */}
          <div className="absolute inset-0 bg-black opacity-90"></div>
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
          className="snap-center min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center w-screen overflow-hidden"
          // style={{ backgroundImage: "url(/pixelsm.png)" }}
        >
          <Image
            src={pexelsm}
            alt="pexels1m"
            className="h-screen md:hidden md:h-screen  fixed"
          />
          <h1 className="font-[times-new-roman] font-medium text-[26px] text-white absolute top-[20%]">
            Hi 👋🏽, I’m Tega
          </h1>

          <div  className="flex absolute top-[20%] h-[43%] w-[600%] z-[30]">
            <Image src={texts} alt="text" id="left"/>
            <Image src={texts} alt="text" id="left"/>
          </div>

          <div
           
            className="  flex absolute top-[40%] h-[43%] w-[600%] z-[30]"
          >
            <Image src={texts} alt="text"  id="right"/>
            <Image src={texts} alt="text"  id="right"/>
          </div>
          

          <div className="absolute inset-0 bg-black opacity-60"></div>
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
          <Image src={head} alt="head" className="absolute top-[24%] z-[8]" />
          <h1 className="text-white w-[80%] font-[times-new-roman] absolute font-[700] text-[15px] text-center">
            I’m a Product Designer with over 5 years of professional design
            experience. I’ve worked on a variety of products ranging from
            Financial Technology, E-Commerce, EduTech, Luxury Retail etc 🤩.
          </h1>
          <div
            
            className="absolute bottom-[-5%]  h-[30%] w-[650%] flex  z-[30]"
          >
            {" "}
            <Image src={textre} alt="textre" id="left"/>
            <Image src={textre} alt="textre" id="left"/>
          </div>
          <div className="absolute inset-0 bg-black opacity-90"></div>
        </section>
      </main>
    </div>
  );
}
