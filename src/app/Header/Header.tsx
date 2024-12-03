"use client";
import Link from "next/link";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between px-8 items-center  bg-slate-50 gap-x-2  ">
        <div>
          <Link href={"/"}>
            <Image src={"/R1.png"} alt="" width={120} height={50} />
          </Link>
        </div>
        <div className="hidden  md:flex md:justify-center md:items-center md:gap-4 md:whitespace-nowrap">
          <li className="list-none">
            <Link href={"/about-us"}>About us</Link>
          </li>
          <li className="list-none">
            {" "}
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li className="list-none">
            <Link href={"/contact-us"}>Contact us</Link>
          </li>
        </div>
        <div className="hidden md:flex md:items-center md:justify-normal md:gap-2 md:whitespace-nowrap px-4 text-xl py-1 rounded-sm">
          <i>
            <CallIcon />
          </i>
          <a href="tel:+19093074060">+1 909 307 4060 </a>
          <div className="hidden lg:block lg:gap-x-2">
            <Link
              href={"/contact-us"}
              className=" bg-violet-600 hover:bg-yellow-400 transition duration-500 ease-in-out text-white py-3 px-4 rounded-md font-bold text-sm shadow-md"
            >
              Seeking a quote
            </Link>
          </div>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          <FaBars />
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:justify-center md:gap-10 md:bg-violet-500 md:text-white md:font-semibold py-2 text-[14px] font-[500px] tracking-normal md:gap-x-24 ">
        <Link href={"/logo-branding"} className="hover:underline">
          LOGO & BRANDING
        </Link>
        <Link href={"/website"} className="hover:underline">
          WEBSITE DESIGN
        </Link>
        <Link href={"/seo"} className="hover:underline">
          SEO
        </Link>
        <Link href={"/mobile-app"} className="hover:underline">
          MOBILE APP
        </Link>
        <Link
          href={"/animation"}
          className="hover:underline ease-in duration-500"
        >
          ANIMATION
        </Link>
      </div>
      {/* Handle function for the menubar */}
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[65%] h-screen ease-in duration-500 p-10 md:hidden bg-black z-10"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex items-center w-full justify-end text-white font-semibold underline">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose className="text-white" />
          </div>
        </div>
        <div className="flex-col py-4 text-white text-start hover:underline">
          <ul>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/logo-branding"}> LOGO & BRANDING</Link>
            </li>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/website"}>WEBSITE DESIGN</Link>
            </li>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/seo"}>SEO</Link>
            </li>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/mobile-app"}>MOBILE APPS</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/animation"}>ANIMATION</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
