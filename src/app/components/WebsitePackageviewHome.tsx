import React from "react";
import packages from "../website/website packages/constantweb";
import WebsitePackagez from "../website/website packages/WebsitePackagez";
const WebsitePackageviewHome = () => {
  return (
    <div className="mt-20 py-10 px-14">
      
      <div className="packages-container grid grid-cols-1 gap-y-8 sm:grid-cols-3 gap-x-8">
        {packages.map((pack, index) => (
          <WebsitePackagez key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default WebsitePackageviewHome;
