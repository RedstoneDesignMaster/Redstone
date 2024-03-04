import React from "react";
import AnimationPackage from "./LogoBrandingPackage";
import packages from "../logo-branding/logocontstants";
import LogoBrandingPackage from "./LogoBrandingPackage";

const LogobrandingPackageview = () => {
  return (
    <div className="mt-20 py-2 px-14">
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-3 gap-x-8">
        {packages.map((pack, index) => (
          <LogoBrandingPackage key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default LogobrandingPackageview;
