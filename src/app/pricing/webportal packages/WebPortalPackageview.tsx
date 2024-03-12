import React from "react";
import AnimationPackage from "./WebPortalPackage";
import packages from "./constantwebportal";
import WebPortalPackage from "./WebPortalPackage";
const WebPortalPackageview = () => {
  return (
    <div className="mt-20 py-10 sm:py-0 px-14 sm:px-32   ">
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-24">
        {packages.map((pack, index) => (
          <WebPortalPackage key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default WebPortalPackageview;
