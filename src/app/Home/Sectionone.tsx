import React from "react";
import Logos from "../components/Logos";
import Image from "next/image";
const Sectionone = () => {
  return (
    <section className="flex flex-col items-center align-center sm:h-screen pt-10 px-10 md:px-2 ">
      <div>
        <h5 className="font-bold md:text-3xl text-xl sm:text-2xl text-center text-wrap md:py-6 py-3">
          One-Stop-Shop for <br />
          All Your Creative Design Needs
        </h5>
        <p className="text-center text-wrap pt-4 text-sm leading-6 sm:text-base">
          We are a creative design agency offering impeccable services and
          ingenious solutions that reflect the latest industry <br />
          norms and capacity to make an impact.
        </p>
      </div>
      <div className="pt-10 md:px-6 grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-6 md:pb-1 pb-8  ">
        <Logos source="logo" title="Logo design"/>
        <Logos source="mobapp" title="Mobile Application" />
        <Logos source="ecom" title="E-commerce" />
        <Logos source="web" title="Web design" />
        <Logos source="videoani" title="Vedio Animation" />
        <Logos source="digitalmark" title="Digital Marketing" />
      </div>
    </section>
  );
};

export default Sectionone;
