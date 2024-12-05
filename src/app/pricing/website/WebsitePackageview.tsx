import React from "react";
import packages from "@/app/website/website packages/pointersweb";
import WebsitePackagez from "@/app/website/website packages/WebsitePackagez";

const WebsitePackageview = () => {
  return (
    <section className="mt-20 py-12 px-6 sm:px-14 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h5 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl py-8 text-black leading-tight">
          Crafting Perfect Website Packages for{" "}
          <br className="hidden sm:block" />
          <span className="text-blue-600">Corporations Globally</span>
        </h5>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Discover customized solutions tailored to elevate your digital
          presence. Our packages are designed with precision and creativity for
          enterprises of all sizes.
        </p>
      </div>
      <div className="packages-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {packages.map((pack, index) => (
          <WebsitePackagez key={index} pack={pack} />
        ))}
      </div>
    </section>
  );
};

export default WebsitePackageview;
