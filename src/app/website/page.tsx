"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Websectionone from "./Websectionone";
import Websitesectiontwo from "./Websitesectiontwo";
import Webpackage from "./Webpackage";
import Websitesectionthree from "./Websitesectionthree";
import Websitesectionfour from "./Websitesectionfour";
import Websiteportfolio from "./Websiteportfolio";
import Websitesectionfive from "./Websitesectionfive";
import Testimonial from "../Home/Testimonial";
import Leadform from "../components/Leadform";
import Footer from "../components/Footer";
import Copyrights from "../components/Copyrights";
import Websitesectionsix from "./Websitesectionsix";

const page = () => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-center text-white  h-[400px] md:bg-cover md:bg-center md:h-screen w-full md:pl-12 px-12 md:px-0"
        style={{
          backgroundImage: "url('/cms-new-banner.webp')",
        }}
      >
        <h5 className="font-normal text-3xl text-yellow-300  md:text-4xl">
          Professional{" "}
        </h5>
        <h6 className="text-3xl font-light text-wrap tracking-tight leading-[48px] ">
          Web Design Services <br />{" "}
        </h6>

        <p className="py-4 text-wrap break-all animate_animated animate__slideOutDown">
          Get attractive designs for your business website.
          <br /> We create designs to deliver seamless experiences to users.
        </p>
        <section className="py-4">
          <span>
            <Link
              href={""}
              className="bg-violet-600 hover:bg-violet-500 py-2 px-4"
            >
              Custom Website design From $499{" "}
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
      <Websectionone />
      <Websitesectiontwo />
      <Webpackage />
      <Websitesectionthree />
      <Websitesectionfour />
      <Websiteportfolio />
      <Websitesectionfive />
      <Websitesectionsix />
      <Testimonial />
    </>
  );
};

export default page;
