"use client";
import Image from "next/image";
import "./Home.css";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth ">
      <div className="sticky top-8 z-10">
        <Nav />
      </div>

      <section
        id="bg1"
        class="snap-start min-h-screen flex justify-center relative items-center  bg-fixed bg-no-repeat bg-cover bg-center "
      >
        <h1 className="text-white z-10">Hi 👋🏽 , I’m Tega</h1>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </section>

      <section
        id="bg2"
        className="snap-start min-h-screen flex justify-center relative items-center  bg-fixed bg-no-repeat bg-cover bg-center"
      >
        <h1 className="text-white z-10 w-[80%] md:w-[40%] text-center">
          I’m a designer from Lagos, Nigeria. When I’m not designing I’m either
          sleeping, reading or trying out a meal. I enjoy exploring, could be
          with colors, places, fonts, skincare or restaurants. Welcome to my
          portfolio 🤩.{" "}
        </h1>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </section>
      <section
        id="bg3"
        class="snap-start min-h-screen flex justify-center relative items-center  bg-fixed bg-no-repeat bg-cover bg-center"
      ><h1 className="text-white z-10 w-[80%] md:w-[40%] text-center">You get to see a few of my favourite projects, some from a few years back 
        and others more recently designed.  Once again welcome to my portfolio, happy touring! ✌🏽</h1>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </section>
    </main>
  );
}
