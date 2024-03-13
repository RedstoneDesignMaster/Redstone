import Link from "next/link";
import { useState } from "react";
import React from "react";
import Logosection from "./Logosection";
import Stationerysection from "./Stationerysection";
import Portfiliowebsite from "./Portfiliowebsite";
import Websiteportfolio from "../website/Websiteportfolio";
import PortfolioMobile from "../mobile-app/PortfolioMobile";
import PortfolioAnimation from "../animation/PortfolioAnimation";
import Brochuresection from "./Brochuresection";
import WebPortfolio from "./WebPortfolio";
import AppPortfolio from "./AppPortfolio";
import AnimationPortfolio from "./AnimationPortfolio";
const Portfolio = () => {
  const [tab, setTab] = useState("logo");
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
            handleChange("logo");
          }}
        >
          LOGO
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("stationery");
          }}
        >
          STATIONERY
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("brochure");
          }}
        >
          BROCHURE
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("web");
          }}
        >
          {" "}
          WEBSITE
        </button>
        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("app");
          }}
        >
          {" "}
          APP
        </button>

        <button
          type="button"
          className="hover:underline "
          onClick={() => {
            handleChange("animation");
          }}
        >
          {" "}
          ANIMATIONS
        </button>
      </div>
      <div>
        {tab === "logo" && <Logosection />}
        {tab == "stationery" && <Stationerysection />}
        {tab == "brochure" && <Brochuresection />}
        {tab == "web" && <WebPortfolio />}
        {tab == "app" && <AppPortfolio />}
        {tab == "animation" && <AnimationPortfolio />}
      </div>
    </div>
  );
};

export default Portfolio;
