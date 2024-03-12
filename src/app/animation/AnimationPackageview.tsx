import React from "react";
import AnimationPackage from "./AnimationPackage";
import packages from "../animation/constants";

const AnimationPackageview = () => {
  return (
    <div className="mt-20 py-10 sm:py-0 px-14">
      <h5 className="text-center font-extrabold text-3xl py-8 sm:py-2 text-violet-600 underline underline-offset-3">
        Packages
      </h5>
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-3 gap-x-8">
        {packages.map((pack, index) => (
          <AnimationPackage key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default AnimationPackageview;
