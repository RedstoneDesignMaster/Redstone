"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import LogoAnimation from "../components/LogoAnimation";
import TwoDAnimation from "../components/TwoDAnimation";
import ThreeDanimation from "../components/ThreeDanimation.tsx";
// import Logosection from "./Logosection";
// import Stationerysection from "./Stationerysection";
const PortfolioAnimation = () => {
  const [tab, setTab] = useState("logo animation");
  const handleChange = (e: any) => {
    setTab(e);
  };
  return (
    <div
      className="py-8 text-white "
      style={{
        backgroundImage: "url('/portfolio-banner.webp')",
      }}
    >
      <h1 className="md:text-4xl text-2xl text-center text-wrap">
        Brilliant Ideas <br /> That Create Great Value
      </h1>
      <div className="flex font-bold items-center justify-center  py-8 flex-shrink text-xs md:text-normal gap-x-2 md:gap-x-6 ">
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("logo animation");
          }}
        >
          LOGO ANIMATION
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("2D Animation");
          }}
        >
          2D Animation
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("3D Animation");
          }}
        >
          3D ANIMATION
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("website");
          }}
        >
          {" "}
          MOTION GRAPHIC
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("app");
          }}
        >
          {" "}
          WHITEBOARD ANIMATION
        </button>

        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("ani");
          }}
        >
          {" "}
          EXPLAINER VIDEO
        </button>
      </div>
      <div>
        {tab === "logo animation" && <LogoAnimation />}
        {tab === "2D Animation" && <TwoDAnimation />}
        {tab === "3D Animation" && <ThreeDanimation />}
      </div>
      <div className="flex flex-col items-center gap-y-0  pt-8 sm:pt-10">
        <h5 className="font-extrabold text-2xl sm:text-3xl px-8 text-center text-wrap sm:leading-8">
          Let Us Give Your Brand An Identity That Speaks It All For You!
        </h5>
        <p className="text-yellow-300 pt-4">
          We transform creative ideas into stunning realities
        </p>
        <div className="sm:pt-10">
          <div className="flex justify-center items-start text-center py-4 gap-3">
            <Link
              href=""
              className="bg-violet-600 py-2 px-4 hover:bg-violet-500 rounded-sm font-medium"
            >
              Request Custom Quote
            </Link>
            <Link
              href=""
              className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-sm font-medium"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnimation;
