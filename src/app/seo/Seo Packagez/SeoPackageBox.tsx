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

const SeoPackageBox: React.FC<PackageCardProps> = ({ pack }) => {
  return (
    <div className="package-card border-2 w-full sm:w-auto rounded-md shadow-md">
      <h5 className="text-4xl md:text-xl md:font-bold font-extrabold text-center  text-wrap pt-9 text-violet-800 ">
        {pack.name}
      </h5>
      <p className="text-sm py-1 bg-white text-center font-semibold">
        Best Value for Money Guaranteed!
      </p>
      <h5 className="py-6 bg-gray-300 bg-opacity-50 text-center font-extrabold text-3xl">
        {pack.price}.00
      </h5>
      <div className="  text-start text-nowrap max-h-[300px] md:max-h-[200px] overflow-y-scroll px-12">
        <ul className="py-4 leading-8 text-xs md:px-4 list-disc ">
          {pack.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
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
  );
};

export default SeoPackageBox;
