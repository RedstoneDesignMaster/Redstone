
import Link from "next/link";
import { useState } from "react";
import React from "react";
import Logosection from "./Logosection";
import Stationerysection from "./Stationerysection";
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
      <div className="flex font-normal items-center justify-center gap-4 py-8">
        <button
          type="button"
          onClick={() => {
            handleChange("logo");
          }}
        >
          LOGO
        </button>
        <button
          type="button"
          onClick={() => {
            handleChange("stationery");
          }}
        >
          STATIONERY
        </button>
        <button
          type="button"
          onClick={() => {
            handleChange("brochure");
          }}
        >
          BROCHURE
        </button>
        <button
          type="button"
          onClick={() => {
            handleChange("website");
          }}
        >
          {" "}
          WEBSITE
        </button>
        <button
          type="button"
          onClick={() => {
            handleChange("app");
          }}
        >
          {" "}
          APP
        </button>

        <button
          type="button"
          onClick={() => {
            handleChange("ani");
          }}
        >
          {" "}
          Animatoins
        </button>
      </div>
      <div>
        {tab === "logo" && <Logosection />}
        {tab == "stationery" && <Stationerysection />}
      </div>
    </div>
  );
};

export default Portfolio;
