import React from "react";
import packages from "./constantweb";
import WebsitePackagez from "./WebsitePackagez";

const WebsitePackageview = () => {
  return (
    <div className="mt-20 py-10 px-14">
      <h5 className="text-center font-extrabold text-xl sm:text-5xl py-8 text-black text-wrap px-8 sm:leading-normal">
        Crafting Perfect Website Packages for <br className="hidden sm:block" />
        Corporations Globally
      </h5>
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-3 gap-x-8">
        {packages.map((pack, index) => (
          <WebsitePackagez key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default WebsitePackageview;
