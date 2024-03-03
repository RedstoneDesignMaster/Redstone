import { Button } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import Head from "next/head";
import "animate.css";
import { RiH2 } from "react-icons/ri";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        className="Hero md:flex md:items-center md:justify-around  text-white md:h-screen "
        style={{
          backgroundImage: "url('/hombanner.webp')",
        }}
      >
        <div className="px-8 bg-[url('/img/bg.jpg')] pt-8 md:pt-4">
          <h1 className="text-2xl md:text-3xl font-light text-wrap md:tracking-tight md:leading-[48px] ">
            We Are A Full Fledged Digital Agency <br />{" "}
          </h1>

          <h2 className="animate__animated  animate__bounceInLeft duration-1000 md:text-3xl font-bold md:text-wrap md:tracking-tight md:leading-[48px] text-yellow-300 z-0 py-4 md:py-2 text-2xl ">
            Creating Awesome Website
          </h2>
          <p className="md:py-4 text-wrap  animate_animated animate__slideOutDown md:line-clamp-3">
            Along with awesome websites, we also assist customers in revamping
            or creating their identity from scratch—every design and content
            under one roof.
          </p>
          <section className="pt-8  pb-16 md:pt-4 md:pb-4 mt-4 ">
            <span>
              <Link
                href={""}
                className="bg-violet-600 hover:bg-violet-500 py-2 px-4 text-base font-bold "
              >
                Lets Get Started {<ChevronRightIcon />}
              </Link>
              <Link
                href={""}
                className="bg-yellow-500 hover:bg-violet-500 py-2 px-4 text-base font-bold"
              >
                Live Chat
              </Link>
            </span>
          </section>
        </div>
        <div className="hidden md:block  mt-48 pt-14">
          <Image
            src={"/home-banner-01.webp"}
            alt="home banner"
            width={800}
            height={800}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
