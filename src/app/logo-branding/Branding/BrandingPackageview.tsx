import React from "react";
import AnimationPackage from "./BrandingPackageList";
import packages from "./brandingconstants";
import BrandingPackageList from "./BrandingPackageList";

const BrandingPackageview = () => {
  return (
    <div className="mt-20 py-2 px-14 mx-auto">
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-3 gap-x-8 place-content
      -center">
        {packages.map((pack, index) => (
          <BrandingPackageList key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default BrandingPackageview;
