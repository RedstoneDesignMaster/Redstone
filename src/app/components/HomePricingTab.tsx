"use client";
import React, { useState } from "react";
import Link from "next/link";
import LogobrandingPackageview from "../logo-branding/LogoBrandingPackageview";
import BrandingPack from "../logo-branding/Branding/BrandingPack";
import WebsitePackageview from "../website/website packages/WebsitePackageview";
import AnimationPackageview from "../animation/AnimationPackageview";
import WebPortalPackageview from "../pricing/webportal packages/WebPortalPackageview";
import SeoPackageview from "../seo/Seo Packagez/SeoPackageview";
import SmmPackageview from "../seo/Seo Packagez/SeoPackageview";
import MobileAppPackageBox from "../pricing/mobilepackages/MobileAppPackageBox";
import WebsitePackageviewHome from "./WebsitePackageviewHome";
const HomePricingTab = () => {
  const [tab, setTab] = useState("logo");
  const handleChange = (e: any) => {
    setTab(e);
  };
  return (
    <div>
      <div className=" md:py-10 md:px-4 px-4 ">
        <ul className="flex flex-col md:flex-row justify-around items-center text-center font-semibold cursor-pointer">
          <li className="w-full md:w-auto  px-6 py-1 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
            <button
              onClick={() => {
                handleChange("logo");
              }}
            >
              LOGO & BRANDING
            </button>
          </li>
          <li className="w-full md:w-auto  px-6 py-1 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
            <button
              type="button"
              onClick={() => {
                handleChange("web");
              }}
            >
              {" "}
              WEBSITE
            </button>
          </li>
          <li className="w-full md:w-auto px-6 py-1 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
            <button
              type="button"
              onClick={() => {
                handleChange("animation");
              }}
            >
              {" "}
              EXPLAINER VIDEO
            </button>
          </li>

          <li className="w-full md:w-auto px-6 py-1 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
            <button
              type="button"
              onClick={() => {
                handleChange("portal");
              }}
            >
              {" "}
              WEB PORTAL
            </button>{" "}
          </li>
          <li className="w-full md:w-auto px-6 py-1 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
            <button
              type="button"
              onClick={() => {
                handleChange("seo");
              }}
            >
              {" "}
              SEO
            </button>{" "}
          </li>

          <li className="w-full md:w-auto px-6 py-1 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
            <button
              type="button"
              onClick={() => {
                handleChange("smm");
              }}
            >
              {" "}
              SMM
            </button>
          </li>
          <li className="w-full md:w-auto px-6 py-1 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-2">
            <button
              type="button"
              onClick={() => {
                handleChange("app");
              }}
            >
              {" "}
              Mobile App
            </button>{" "}
          </li>
        </ul>
      </div>
      {/*Logo Packages */}
      <div className="pb-14 mx-auto">
        {tab == "logo" && <LogobrandingPackageview />}
        {tab == "web" && <WebsitePackageviewHome />}
        {tab == "animation" && <AnimationPackageview />}
        {tab == "portal" && <WebPortalPackageview />}
        {tab == "seo" && <SeoPackageview />}
        {tab == "smm" && <SmmPackageview />}
        {tab == "app" && <MobileAppPackageBox />}
      </div>
    </div>
  );
};

export default HomePricingTab;
