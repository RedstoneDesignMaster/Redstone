"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import LogobrandingPackageview from "./LogoBrandingPackageview";
import BrandingPack from "./Branding/BrandingPack";

const BrandingPackage = () => {
  const [tab, setTab] = useState("logo");
  const handleChange = (e: any) => {
    setTab(e);
  };
  return (
    <>
      <div className="px-8 ">
        <h5 className="line-clamp-2 text-wrap text-xl font-extrabold sm:font-bold text-center sm:text-3xl py-4 sm:px-14">
          Crafting Perfect Logo Packages for Corporations Globally
        </h5>
        <p className="line-clamp-4 sm:line-clamp-3 text-center text-sm text-gray-700 py-4 px-8 sm:px-14 text-wrap">
          Our team of experts focus on client and customer satisfaction as the
          ultimate goal for our projects. This is one of the many reasons why
          our work is globally acclaimed and recognized.
        </p>
        <div className="flex flex-row items-center justify-center gap-4 pt-8">
          <button
            className="px-4 py-1 hover:bg-violet-900 hover:text-white text-black font-bold rounded-sm border-2 hover:underline"
            type="button"
            onClick={() => {
              handleChange("logo");
            }}
          >
            Logo
          </button>
          <button
            className="px-4 py-1 hover:bg-violet-900 hover:text-white text-black font-bold text-center rounded-sm border-2"
            type="button"
            onClick={() => {
              handleChange("branding");
            }}
          >
            Branding
          </button>
        </div>
      </div>
      {/*Logo Packages */}
      <div className="pb-14">
        {tab == "logo" && <LogobrandingPackageview />}
        {tab == "branding" && <BrandingPack />}
      </div>
    </>
  );
};

export default BrandingPackage;
