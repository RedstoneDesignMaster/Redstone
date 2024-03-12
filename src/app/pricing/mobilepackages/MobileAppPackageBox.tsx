import React from "react";
import Link from "next/link";

interface Package {
  name: string;
  price: string;
  services: string[];
}

interface PackageCardProps {
  pack: Package;
}

const MobileAppPackageBox = () => {
  return (
    <div className="px-14  sm:px-44 py-8">
      <div className="package-card border-2 w-full sm:w-auto rounded-md shadow-md">
        <h5 className="text-4xl md:text-xl md:font-bold font-extrabold text-center  text-wrap pt-9 text-violet-800 ">
          CUSTOM PACKAGE{" "}
        </h5>
        

        <div className="  text-start text-wrap max-h-[400px] md:max-h-[200px] overflow-y-scroll px-12">
          <ul className="py-4 leading-8 text-sm md:px-4  sm:list-disc">
            <li>Best Value for Money Guaranteed!</li>
            <li>Customization the work for you! Our social media experts</li>
            <li>
              The custom social media packages can include any of the features
              of Gold and Platinum packages as well as paid social media
              advertising.
            </li>
            <li>
              Click the button below to get in touch with us and we will design
              a social media strategy to help you get the results you want
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-start text-center py-4 gap-3">
          <Link
            href=""
            className="bg-violet-600 py-2 px-4 hover:bg-violet-500 rounded-sm font-medium"
          >
            Oder Now
          </Link>
          <Link
            href=""
            className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-sm font-medium"
          >
            Live Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPackageBox;
