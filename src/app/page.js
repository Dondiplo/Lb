"use client";
import Image from "next/image";
import "./Home.css";
import Nav from "@/components/nav/Nav";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import arrow from "public/arrow.svg"
import pexel from "public/pexel1.png"
import pexels from "public/pexels.png"
import pexelsm from "public/pixelsm.png"
import  pexels1m from "public/pixels1m.jpg"

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth  ">
      <div className="">
        <Nav />
      </div>
<div className="z-10  opacity-[60%] fixed top-[50%] right-10 ">
  <Image src={arrow} alt="arrow"/>
</div>
      <section
        id="bg"
        class="snap-start min-h-screen flex justify-center relative items-center  bg-fixed bg-no-repeat bg-cover bg-center "
        // style={{ backgroundImage: "url(/pexel1.png)" }}
      >
        <Image src={pexel} alt="pexel" className="hidden md:block md:h-screen"/>
        <Image src={pexelsm} alt="pexel" className="h-screen md:hidden md:h-screen"/>
        <h1 className="absolute  text-white z-10 text-xl font-light">Hi 👋🏽 , I’m Tega</h1>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </section>

      <section
        id="bg"
        className="snap-start min-h-screen flex justify-center relative items-center  bg-fixed bg-no-repeat bg-cover bg-center"
        // style={{ backgroundImage: "url(/pexels.jpg)" }}
      >
          <Image src={pexels} alt="pexels" className="hidden md:block md:h-screen"/>
        <Image src={pexels1m} alt="pexels1m" className="h-screen md:hidden md:h-screen"/>
        <h1 className="text-white absolute z-10 w-[80%] md:w-[40%] text-center font-light text-xl">
          I’m a designer from Lagos, Nigeria. When I’m not designing I’m either
          sleeping, reading or trying out a meal. I enjoy exploring, could be
          with colors, places, fonts, skincare or restaurants. Welcome to my
          portfolio 🤩.
        </h1>
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </section>
      <section
        id="bg3"
        class="snap-start min-h-screen flex justify-center relative items-center  bg-fixed bg-no-repeat bg-cover bg-center"
      ><h1 className="text-white z-10 w-[80%] md:w-[40%] font-light text-xl text-center">You get to see a few of my favourite projects, some from a few years back 
        and others more recently designed.  Once again welcome to my portfolio, happy touring! ✌🏽</h1>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </section>
    </main>
  );
}
