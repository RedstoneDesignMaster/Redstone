import React from "react";
import packages from "./constantsmm";
import SmmPackageBox from "./SmmPackageBox";
const MobileAppPackageview = () => {
  return (
    <div className="mt-20 py-10 sm:py-0 px-14    ">
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-3 gap-x-6 ">
        {packages.map((pack, index) => (
          <SmmPackageBox key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default MobileAppPackageview;
