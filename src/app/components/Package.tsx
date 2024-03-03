import React from "react";
import Price from "./Price";

const Package = () => {
  return (
    <div className=" md:py-10 md:px-4 px-4 ">
      <ul className="flex flex-col md:flex-row justify-around items-center text-center font-semibold cursor-pointer">
        <li className="w-full md:w-auto  px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
          LOGO & BRANDING
        </li>
        <li className="w-full md:w-auto  px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
          WEBSITE
        </li>
        <li className="w-full md:w-auto px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
          EXPLAINER VIDEO
        </li>
        <li className="w-full md:w-auto px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
          PRINTING
        </li>
        <li className="w-full md:w-auto px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
          WEB PORTAL
        </li>
        <li className="w-full md:w-auto px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
          SEO
        </li>

        <li className="w-full md:w-auto px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-0">
          SMM
        </li>
        <li className="w-full md:w-auto px-6 py-2 hover:bg-violet-500 active:bg-violet-500 active:bg-opacity-50 text-sm border border-gray-200 md:border-2   md:hover:text-gray-800 md:hover:border-b-2 md:hover:border-gray-300 md:last:border-b-2 md:last:border-gray-300 md:last:border-r-2">
          MOBILE APPLICATION
        </li>
      </ul>
      <div className="flex flex-wrap items-center justify-center pt-10 gap-y-10 gap-x-5">
        <Price title="Logo Special" price={49} />
        <Price title="Logo Plus" price={199} />
        <Price title="Logo Platinum" price={399} />
        <Price title="The Boss" price={599} />
        <Price title="Logo Infinite" price={1259} />
        <Price title="Logo Combo" price={1499} />
      </div>
    </div>
  );
};

export default Package;
