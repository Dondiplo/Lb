"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./Home.css";
import Nav from "@/components/nav/Nav";
import arrow from "public/arrow.svg";
import pexelsm from "public/pixelsm.png";
import pexels1m from "public/pixels1m.jpg";
import pexels2 from "public/pexels2.png";
import pexels2m from "public/pexels2m.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollAnimation from "react-scroll-animation";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <main className="hidden md:block snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
        <div>
          <Nav />
        </div>
        <div className="z-[5] opacity-[60%] fixed top-[50%] right-5 md:right-10">
          <Image src={arrow} alt="arrow" />
        </div>
        <section
          id="bg"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(/pexel1.png)" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className=" text-white overflow-hidden text-[14px] absolute  text-xl font-light z-10 "
          >
            Hi 👋🏽, I’m Tega
          </h1>

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
          <h1 className="text-white absolute  w-[80%] md:w-[40%] text-center font-light text-[14px] md:text-xl">
            I’m a designer from Lagos, Nigeria. When I’m not designing I’m
            either sleeping, reading or trying out a meal. I enjoy exploring,
            could be with colors, places, fonts, skincare or restaurants.
            Welcome to my portfolio 🤩.
          </h1>

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
          <h1 className="text-white absolute  w-[80%] md:w-[40%] font-light text-[14px] md:text-xl text-center">
            You get to see a few of my favourite projects, some from a few years
            back and others more recently designed. Once again welcome to my
            portfolio, happy touring! ✌🏽
          </h1>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>
      </main>

      {/* mobile */}

      <main className="md:hidden  snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
        <div>
          <Nav />
        </div>
        <div className="z-[5] opacity-[60%] fixed top-[50%] right-5 md:right-10">
          <Image src={arrow} alt="arrow" />
        </div>
        <section
          id="bg"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
        >
          <Image
            src={pexelsm}
            alt="pexels1m"
            className="h-screen md:hidden md:h-screen "
          />
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className=" text-white overflow-hidden text-[14px] absolute  text-xl font-light z-10 "
          >
            Hi 👋🏽, I’m Tega
          </h1>

          <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>

        <section
          id="bg1"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
        >
          <Image
            src={pexels1m}
            alt="pexels1m"
            className="h-screen md:hidden md:h-screen "
          />
          <h1 className="text-white absolute  w-[80%] md:w-[40%] text-center font-light text-[14px] md:text-xl">
            I’m a designer from Lagos, Nigeria. When I’m not designing I’m
            either sleeping, reading or trying out a meal. I enjoy exploring,
            could be with colors, places, fonts, skincare or restaurants.
            Welcome to my portfolio 🤩.
          </h1>

          <div className="absolute inset-0 bg-black opacity-90"></div>
        </section>

        <section
          id="bg3"
          className="snap-start min-h-screen flex justify-center relative items-center bg-fixed bg-no-repeat bg-cover bg-center"
        >
          <Image
            src={pexels2m}
            alt="pexels2m"
            className="h-screen md:hidden md:h-screen"
          />
          <h1 className="text-white absolute  w-[80%] md:w-[40%] font-light text-[14px] md:text-xl text-center">
            You get to see a few of my favourite projects, some from a few years
            back and others more recently designed. Once again welcome to my
            portfolio, happy touring! ✌🏽
          </h1>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>
      </main>
    </div>
  );
}
