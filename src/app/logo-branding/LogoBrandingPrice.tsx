import React from "react";
import { useState } from "react";
import BrandingPack from "./Branding/BrandingPack";
import LogobrandingPackageview from "./LogoBrandingPackageview";
const LogoBrandingPrice = () => {
  const [tab, setTab] = useState("logo");
  const handleChange = (e: any) => {
    setTab(e);
  };
  return (
    <div>
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

      <div className="pb-14">
        {tab == "logo" && <LogobrandingPackageview />}
        {tab == "branding" && <BrandingPack />}
      </div>
    </div>
  );
};

export default LogoBrandingPrice;
