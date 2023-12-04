// components/Loading.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "public/eyes.json";
import words from "public/words.svg";

const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loading overlay after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [setLoading]);

  return (
    <section>
      <div className="fixed top-[40%] left-[45%]">
        <div className="relative w-[95%]">
          <Image src={words} alt="words" />
          <Lottie
            className="w-12 absolute top-9 left-9"
            animationData={animationData}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
};

export default Loading;
