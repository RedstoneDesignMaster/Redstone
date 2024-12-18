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
import WebsitePackageview from "./website packages/WebsitePackageview";

const page = () => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-center text-white  h-[400px] md:bg-cover md:bg-center md:h-screen w-full md:pl-12 px-12 md:px-0"
        style={{
          backgroundImage: "url('/cms-new-banner.webp')",
        }}
      >
        <h5 className="font-normal text-3xl text-orange-500  md:text-4xl">
          Professional{" "}
        </h5>
        <h6 className="text-3xl font-light text-wrap tracking-tight leading-[48px] ">
          Web Design Services <br />{" "}
        </h6>

        <p className="py-4 text-pretty break-all animate_animated animate__slideOutDown">
          Get attractive designs for your business website.
          <br /> We create designs to deliver seamless experiences to{" "}
          <br className="block md:hidden" />
          users.
        </p>
        <section className="py-4">
          <div className="flex text-sm font-bold">
            <span className="bg-violet-600 hover:bg-violet-500 py-2 md:px-4 px-6 text-xs md:text-base rounded-l-md text-white">
              Custom Website design From $499{" "}
            </span>
            <Link
              href={"tel:+1 909 307 4060"}
              className="bg-orange-500 hover:bg-orange-600 py-2 md:px-6 px-4 text-xs md:text-base rounded-r-md"
            >
              Live Chat
            </Link>
          </div>
        </section>
      </div>
      <Websectionone />
      <Websitesectiontwo />
      <WebsitePackageview />
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
