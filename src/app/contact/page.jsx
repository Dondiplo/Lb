"use client";
import React from "react";

import Lottie from "lottie-react";
import animation from "public/mail.json";

import Nav from "@/components/nav/Nav";
import { Form } from "@/components/Form";


const Page = () => {
  return (
    <div id="body" className="h-full  md:h-[100vh] mx-auto pt-10 bg-[#1E1E1E] text-white ">
      <Nav />

      <section className="mx-auto  pt-20">
        <h1 className="font-bold text-4xl  text-center md:text-[40px] lg:text-[60px] opacity-60">
          Get In Touch
        </h1>

        <div className="w-[10rem] hidden md:block relative">
          <div className="absolute top ">
            {" "}
            <a href="mailto:oladipupo.eke@gmail.com">
              <Lottie animationData={animation} />
            </a>
          </div>
        </div>
      </section>

      <div className="pt-6 px-10 grid grid-cols-1 lg:grid-cols-1  lg:gap-0">
        <div className="text-center">
          <p className="text-center  text-[14px] lg:text-xl pt-2 md:pt-6">
            Got a question, proposal or something you want to work on together ?
            Feel free to reach out .
          </p>
        </div>
      </div>
<Form/>
    </div>
  );
};

export default Page;
