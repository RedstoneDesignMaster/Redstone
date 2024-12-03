"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LogobrandingPackageview from "../logo-branding/LogoBrandingPackageview";
import WebsitePackageview from "../website/website packages/WebsitePackageview";
import AnimationPackageview from "../animation/AnimationPackageview";
import WebPortalPackageview from "./webportal packages/WebPortalPackageview";
import SeoPackageview from "../seo/Seo Packagez/SeoPackageview";
import SmmPackageview from "./social media marketing/SmmPackageview";
import MobileAppPackageBox from "./mobilepackages/MobileAppPackageBox";

const PricingTab = () => {
  const router = useRouter();
  const { query } = router;
  const [tab, setTab] = useState(query.tab || "logo");

  useEffect(() => {
    if (query.tab) {
      setTab(query.tab);
    }
  }, [query.tab]);

  return (
    <div>
      <div className="md:py-10 md:px-4 px-4">
        <ul className="flex flex-col md:flex-row justify-around items-center text-center font-semibold">
          <li className="w-full md:w-auto px-6 py-1">
            <Link href="/pricing?tab=logo">
              <a
                className={`block w-full px-6 py-2 border border-gray-200 md:border-2 text-sm text-center ${
                  tab === "logo"
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-500 hover:text-white"
                }`}
              >
                LOGO & BRANDING
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto px-6 py-1">
            <Link href="/pricing?tab=web">
              <a
                className={`block w-full px-6 py-2 border border-gray-200 md:border-2 text-sm text-center ${
                  tab === "web"
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-500 hover:text-white"
                }`}
              >
                WEBSITE
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto px-6 py-1">
            <Link href="/pricing?tab=animation">
              <a
                className={`block w-full px-6 py-2 border border-gray-200 md:border-2 text-sm text-center ${
                  tab === "animation"
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-500 hover:text-white"
                }`}
              >
                EXPLAINER VIDEO
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto px-6 py-1">
            <Link href="/pricing?tab=portal">
              <a
                className={`block w-full px-6 py-2 border border-gray-200 md:border-2 text-sm text-center ${
                  tab === "portal"
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-500 hover:text-white"
                }`}
              >
                WEB PORTAL
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto px-6 py-1">
            <Link href="/pricing?tab=seo">
              <a
                className={`block w-full px-6 py-2 border border-gray-200 md:border-2 text-sm text-center ${
                  tab === "seo"
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-500 hover:text-white"
                }`}
              >
                SEO
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto px-6 py-1">
            <Link href="/pricing?tab=smm">
              <a
                className={`block w-full px-6 py-2 border border-gray-200 md:border-2 text-sm text-center ${
                  tab === "smm"
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-500 hover:text-white"
                }`}
              >
                SMM
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto px-6 py-1">
            <Link href="/pricing?tab=app">
              <a
                className={`block w-full px-6 py-2 border border-gray-200 md:border-2 text-sm text-center ${
                  tab === "app"
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-500 hover:text-white"
                }`}
              >
                Mobile App
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* Content */}
      <div className="pb-14 mx-auto">
        {tab === "logo" && <LogobrandingPackageview />}
        {tab === "web" && <WebsitePackageview />}
        {tab === "animation" && <AnimationPackageview />}
        {tab === "portal" && <WebPortalPackageview />}
        {tab === "seo" && <SeoPackageview />}
        {tab === "smm" && <SmmPackageview />}
        {tab === "app" && <MobileAppPackageBox />}
      </div>
    </div>
  );
};

export default PricingTab;
