import React from "react";
import pay1 from "public/pay1.svg";
import pay2 from "public/pay2.svg";
import pay3 from "public/pay3.svg";
import Image from "next/image";
import Nav from "@/components/nav/Nav";
const page = () => {
  return (
    <div className="bg-neutral-950 w-full ">
      <Nav />
      <div className="w-[95%] mx-auto  text-white  space-y-8  pt-28 pb-10">
        <h1 className="font-[400] text-xl md:text-[40px] opacity-60">
          Payvice Agents’ App
        </h1>
        <p>
          An extensive redesign of a Nigerian financial app used mostly by
          agency banking merchants aiding regular day-to-day people transfer
          funds, make withdrawals, carry out bill payments, enable account
          opening and creating financial ease quickly.
        </p>
        <Image src={pay1} alt="pay1" className="mx-auto" />

        <h1 className="font-[400] text-xl  md:text-[40px] opacity-60">
          APP OVERVIEW
        </h1>
        <p className="opacity-60">
          A quick and easy bill payment app used by a category of users called
          “agents”. These agents are available to assist the unbanked,
          day-to-day customers who need funds for emergencies etc. As this was
          already in existence, the goal for this redesign was to create ease,
          better UX, a cleaner UI and find solutions to all existing problems
          both big and small. 3 major features of this app are the VAS system,
          transfer of funds and withdrawal. According to the app users,
          simplicity is key in terms of feature upgrades for this app.
        </p>

        <h1 className="font-[400] text-xl  md:text-[40px]  pt-4 opacity-60">
          CHALLENGES
        </h1>
        <p>
          App UX - An important change to be made was to create shorter steps to
          get to the point for easy usability and customer retention. This
          required us involving th data team to track fall off points during
          use. For example, we realized most of our agents focused more on using
          the transfer feature because it had about 2 screens to get to
          completion whereas withdrawal as a feature was better tailored to
          certain transaction functions and even required lesser commission
          charges but due to the longer process to completion, there wasn’t much
          usage.
        </p>

        <p className="opacity-60">
          Interface redemption - Our users ranged in the age groups of 20s to
          60s so we were catering to both people who liked pretty and flashy app
          systems and those who just wanted to carry out their businesses and be
          done. So we had to look for a way to stay in between i.e create a
          pretty looking app but also extremely functional. We couldn’t afford
          to slack on any region concerning the interface or experience.
        </p>

        <h1 className="font-[400] text-xl md:text-[40px] pt-4 opacity-60">
          WHITEBOARD FEATURE RESEARCH
        </h1>
        <Image src={pay2} alt="pay2" className="mx-auto" />

        <h1 className="font-[400] text-xl md:text-[40px] pt-4 opacity-60">
          SOME QUESTIONS WITHIN DESIGN TEAM
        </h1>
        <p className="opacity-60">
          As this was a team project and involved collaborative effort, it was
          important to note what issues arose the most from designers and users.
          Some of the questions noted were : Will the onboarding process require
          the same amount of documentation? Can the onboarding process be
          shorter and can there be a tracker so I know how much more I need to
          do before I get started? Can I limit what shows on my dashboard? What
          new interesting feature can we include in this version to drive
          customer retention and can help us stand out more? Can I share my data
          with a third part in cases where it’s a company’s ddashboard or wallet
          system?
        </p>

        <h1 className="font-[400] text-xl md:text-[40px] pt-4 opacity-60">
          COMPETITIVE MARKET ANALYSIS
        </h1>

        <p className="opacity-60">
          This phase of the process required us to check as many financial apps
          as we could. The design team split feature research into buckets and
          assigned them to each user with a timeline attached. The project
          management tool used to monitor this process was Trello. I was tasked
          with researching the VAS (Value Added Service) feature on multiple
          financial apps. I studied flows, number of screens to completion, how
          easy it was or not to carry out tasks, button placement structures,
          errors I felt we could change on our end of things and good features
          we could work on to make better.
        </p>

        <h1 className="font-[400] text-xl md:text-[40px] pt-4 opacity-60">
          SKETCHING & WIREFRRAMES
        </h1>

        <p className="opacity-60">
          This process was quick as we understood what problems we were solving,
          I used the tool Whimsical for wireframes in order to make it
          accessible to the PMs, stakeholders and development team. Designing
          for this project took a short while because we understood what was to
          be done, it took a relatively short amount of time seeing as all bases
          had been covered. Designing this high fidelity screens took 3 weeks in
          total. A decision was also made to make it as flexible as possible
          with the introduction of a dark and light theme, thereby catering to
          most of our customer base, age . ranging from 25 - 55 years.
        </p>
        <button className="hidden md:flex p-6 bg-gray-400 mx-auto justify-center rounded-2xl">
          <Image src={pay3} alt="pay3" />
        </button>

        <h1 className="font-[400] text-xl md:text-[40px] pt-4 opacity-60">
          CONCLUSION
        </h1>

        <p className="opacity-60">
          This project was one of my favourite projects to work on, I’ve
          designed multiple financial apps and websites but this was enjoyable
          because of the research and time that went into it. Expectations were
          clear from the get go, there were typical funny moments during the
          collaborative period for this project and it made for a memorable
          time.
        </p>
      </div>
    </div>
  );
};

export default page;
