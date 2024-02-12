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
        className="Hero flex items-center justify-around  text-white h-screen)]"
        style={{
          backgroundImage: "url('/hombanner.webp')",
        }}
      >
        <div className="px-8 bg-[url('/img/bg.jpg')]">
          <h1 className="text-3xl font-light text-wrap tracking-tight leading-[48px] ">
            We Are A Full Fledged Digital Agency <br />{" "}
          </h1>

          <h2 className="animate__animated  animate__bounceInLeft text-3xl font-light text-wrap tracking-tight leading-[48px] text-yellow-300">
            Creating Awesome Website
          </h2>
          <p className="py-4 text-wrap  animate_animated animate__slideOutDown line-clamp-3">
            Along with awesome websites, we also assist customers in revamping
            or creating their identity from scratch—every design and content
            under one roof.
          </p>
          <section className="py-4">
            <span>
              <Link
                href={""}
                className="bg-violet-600 hover:bg-violet-500 py-2 px-4"
              >
                Lets Get Started {<ChevronRightIcon />}
              </Link>
              <Link
                href={""}
                className="bg-yellow-500 hover:bg-violet-500 py-2 px-6"
              >
                Live Chat
              </Link>
            </span>
          </section>
        </div>
        <div>
          <Image
            src={"/home-banner-01.webp"}
            alt="home banner"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
