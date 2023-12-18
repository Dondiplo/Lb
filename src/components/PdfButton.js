"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pdf = () => {
  return (
    <div className="h-screen md:h-[100vh]">
      <iframe
        src="/Tegaresume.pdf"
        width="100%"
        height="100%"
        className="w-[100%] h-[100%]"
      />

      <div className="hidden bg-[#434343]  h-full pt-12 text-white text-sm">
        <div className="flex justify-between w-11/12 mx-auto">
          <div className="space-y-2">
            <h1>Tega Odiavbara</h1>
            <p>SENIOR PRODUCT DESIGNER</p>

            <h1 className="pt-8 text-orange-500 font-bold">PORTFOLIO</h1>
            <p>Tega Odiavbara's Portfolio</p>

            <h1 className="pt-8 text-orange-500  font-bold">
              LINKEDIN PROFILE
            </h1>
            <Link href="https://www.linkedin.com/in/tega-odiavbara-aa90b014a">
              TEGA ODIABRAVA
            </Link>

            <h1 className="pt-8 text-orange-500  font-bold">WORK EXPERIENCE</h1>

            <h1 className="pt-8 ">
              {" "}
              ITEX Integrated Services <br /> -
              <span className="text-xs"> Product Design Lead</span>
            </h1>
            <p>August 2021 - Present</p>
            <div className=" space-y-3">
              <p>
                -Managing the team, <br /> ensuring up to date <br /> and
                standard <br /> designs from every team member
              </p>

              <p>
                -Meetings with major, <br /> stakeholders on upcoming <br />
                projects and maintaining
                <br /> quarterly timelines
              </p>

              <p>
                -Design projections and <br /> expectations based off of
                <br />
                data gotten from
                <br /> previously created designs
              </p>

              <p>
                -Designing and working <br /> with the team to
                <br />
                maintain design coordination.
              </p>
            </div>

            <h1 className="pt-8 ">
              {" "}
              Edukoya <br /> -
              <span className="text-xs">  Senior Product Designer [Contractor]</span>
            </h1>
          </div>

          <div className="text-end">
            <h1>(234) 9020081291</h1>
            <h1>Gmail</h1>

            <h1 className="pt-16 text-orange-500  font-bold">
              TECHNICAL SKILLS
            </h1>

            <p>
              - Excellent use of Figma, <br /> Adobe XD, Protopie, <br />{" "}
              Zeplin, Sketch and <br />
              several other <br /> design tools <br /> - User Research <br />-
              Road Maps <br /> - User Flows <br /> - Creating user personas{" "}
              <br /> - Creating user stories <br /> - User research <br /> -
              Wireframing <br /> - High fidelity designs <br /> - Prototyping{" "}
              <br /> - User testing <br />- Style guides <br /> - Design Sytems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
