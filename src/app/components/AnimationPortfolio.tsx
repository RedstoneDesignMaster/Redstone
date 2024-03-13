"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import LogoAnimation from "./LogoAnimation";
import TwoDAnimation from "./TwoDAnimation";
import ThreeDanimation from "./ThreeDanimation.tsx";
// import Logosection from "./Logosection";
// import Stationerysection from "./Stationerysection";
const AnimationPortfolio = () => {
  const [tab, setTab] = useState("logo animation");
  const handleChange = (e: any) => {
    setTab(e);
  };
  return (
    <div className="py-8 text-white ">
      <div className="flex font-bold items-center justify-center  mb-8 flex-shrink text-xs md:text-normal gap-x-2 md:gap-x-6 px-10  ">
        <button
          type="button"
          className="hover:underline text-violet-400 hover:text-gray-700 "
          onClick={() => {
            handleChange("logo animation");
          }}
        >
          LOGO ANIMATION
        </button>
        <button
          type="button"
          className="hover:underline text-violet-400 hover:text-gray-700 "
          onClick={() => {
            handleChange("2D Animation");
          }}
        >
          2D Animation
        </button>
        <button
          type="button"
          className="hover:underline text-violet-400 hover:text-gray-700 "
          onClick={() => {
            handleChange("3D Animation");
          }}
        >
          3D ANIMATION
        </button>
        <button
          type="button"
          className="hover:underline text-violet-400 hover:text-gray-700"
          onClick={() => {
            handleChange("website");
          }}
        >
          {" "}
          MOTION GRAPHIC
        </button>
        <button
          type="button"
          className="hover:underline text-violet-400 hover:text-gray-700"
          onClick={() => {
            handleChange("app");
          }}
        >
          {" "}
          WHITEBOARD ANIMATION
        </button>

        <button
          type="button"
          className="hover:underline text-violet-400 hover:text-gray-700"
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
    </div>
  );
};

export default AnimationPortfolio;
