import React from "react";
import Price from "./Price";

const Package = () => {
  return (
    <div className=" py-10 px-14">
      <ul className="flex justify-around items-center text-center font-semibold cursor-pointer">
        <li className="px-6 py-2 hover:bg-violet-500  text-sm border">
          LOGO & BRANDING
        </li>
        <li className="px-6 py-2 hover:bg-violet-500 text-sm border">
          WEBSITE
        </li>
        <li className="px-6 py-2 hover:bg-violet-500 text-sm border">
          EXPLAINER VIDEO
        </li>
        <li className="px-6 py-2 hover:bg-violet-500 text-sm border">
          PRINTING
        </li>
        <li className="px-6 py-2 hover:bg-violet-500 text-sm border">
          WEB PORTAL
        </li>
        <li className="px-6 py-2 hover:bg-violet-500 text-sm border">SEO</li>
        <li className="px-6 py-2 hover:bg-violet-500 text-sm border">SMM</li>
        <li className="px-6 py-2 hover:bg-violet-600 text-sm border">
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
