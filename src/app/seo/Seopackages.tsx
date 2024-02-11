import React from "react";
import Priceseo from "./Priceseo";

const Seopackages = () => {
  return (
    <>
      <h5 className="text-5xl font-extrabold text-wrap py-4 text-center line-clamp-2 mx-auto">
        Crafting Perfect Digital Marketing Packages for Corporations Globally
      </h5>
      <div className="flex  justify-center gap-x-24 gap-y-12 items-center flex-wrap mx-auto pt-8 py-5">
        <Priceseo title="Basic" price={299} />
        <Priceseo title="Standar" price={499} />
        <Priceseo title="Professional" price={799} />
        <Priceseo title="Enterprise" price={1499} />
      </div>
    </>
  );
};

export default Seopackages;
