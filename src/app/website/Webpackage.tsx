import React from "react";
import Priceweb from "./Priceweb";

const Webpackage = () => {
  return (
    <div className="pt-12 w-full md:w-auto">
      <h5 className="text-center md:text-4xl font-bold pt-6 text-2xl">
        Crafting Perfect Website Packages <br /> for Corporations Globally
      </h5>
      <div className="flex items-center justify-center gap-8 flex-wrap pt-6 pb-12 px-4 md:px-0">
        <Priceweb title="Basic WEBSITE " price={499} />
        <Priceweb title="START-UP WEBSITE " price={899} />
        <Priceweb title="PROFESSIONAL WEBSITE " price={1499} />
        <Priceweb title="E-COMMERCE WEBSITE" price={2999} />
        <Priceweb title="CORPORATE WEBSITE" price={3999} />
        <Priceweb title="PLATINUM WEBSITE" price={6999} />
      </div>
    </div>
  );
};

export default Webpackage;
