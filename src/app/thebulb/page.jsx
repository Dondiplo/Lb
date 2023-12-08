import React from "react";
import Image from "next/image";
import bulb1 from "public/bulb1.svg";
import bulb2 from "public/bulb2.svg";
import bulb3 from "public/bulb3.png";
import bulb4 from "public/bulb4.svg";
import bulb5 from "public/bulb5.svg";

const page = () => {
  return (
    <div className="bg-neutral-950 w-full ">
      <div className="w-[95%] mx-auto  text-white pt-8 space-y-8  pb-10">
        <h1 className="font-[400] text-xl md:text-[40px]">
          The Bulb Africa Website (redesign)
        </h1>

        <p>
          A redesign of selected screens and introduction of new screens of a
          digital agency’s website. Redesigned with the aim of updating users
          and clients on new goals and aspirations as restrategized by the
          company.
        </p>
        <Image src={bulb1} alt="bulb1" className="mx-auto"/>
      </div>
    </div>
  );
};

export default page;
