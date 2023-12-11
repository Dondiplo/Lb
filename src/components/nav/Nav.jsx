"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import to from "public/T-O.svg";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from 'next/navigation'
import "./nav.css";

const navLinks = [
  {
    label: "RESUME",
    href: "/resume",
  },
  // https://yellow-rhianon-42.tiiny.site/
  {
    label: "PROJECTS",
    href: "projects",
  },
  {
    label: "CONTACT ME",
    href: "contact",
  },
];

const Nav = () => {
  const [animationParent] = useAutoAnimate();
  const [showNav, setNav] = useState(false);
  function toggleMenu() {
    setNav(!showNav);
  }
  const pathname = usePathname()
  return (
    <section className="fixed top-14 md:top-12 z-10 text-white w-full ">
    <div className="container flex justify-between">
  <Link href="/">
    <div className="z-20">
      <Image src={to} alt="to" width={30} />
    </div>
  </Link>
  <div className="space-x-10 hidden md:flex">
    {navLinks.map((d, i) => (
      <Link key={i} href={d.href} className="relative group">
        {d.label}
        <div className="absolute inset-x-0 bottom-0 left-0 bg-white h-0 w-0 group-hover:h-[2px] group-hover:w-full transition-all duration-300"></div>
      </Link>
    ))}
  </div>
  <button
    className="md:hidden z-50"
    ref={animationParent}
    onClick={toggleMenu}
  >
    {showNav ? (
      <IoCloseOutline className="text-[30px] text-white" />
    ) : (
      <RxHamburgerMenu className="text-[30px]" />
    )}
  </button>
</div>



      <div className="">
        {showNav && (
          <div className="fixed top-0 left-0 right-0 bg-black  transition ease-in-out z-[70%] h-[100vh]   ">
            <div className="pt-24 ">
              {" "}
              {navLinks.map((d, i) => (
                <div
                  key={i}
                  className="text-white  opacity-[60%] pt-4 capitalize font-bold text-[18px]"
                >
                  <Link
                    href={d.href}
                    className="flex flex-row  justify-end pr-6 pt-6 hover:capitalize"
                  >
                    {d.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Nav;
