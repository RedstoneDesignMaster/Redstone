import React from "react";
import AnimationPackage from "./SeoPackageBox";
import packages from "./constantseo";
import WebPortalPackage from "./SeoPackageBox";
import SeoPackageBox from "./SeoPackageBox";
const SmmPackageview = () => {
  return (
    <div className="mt-20 py-10 sm:py-0 px-14    ">
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-3 gap-x-2 justify-items-center">
        {packages.map((pack, index) => (
          <SeoPackageBox key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default SmmPackageview;
