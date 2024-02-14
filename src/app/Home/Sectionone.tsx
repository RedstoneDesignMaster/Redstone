import React from "react";
import Logos from "../components/Logos";
import Image from "next/image";
const Sectionone = () => {
  return (
    <section className="flex flex-col items-center align-center h-screen pt-10 px-10 md:px-2 ">
      <div>
        <h5 className="font-bold md:text-3xl text-2xl text-center text-wrap md:py-6 py-3">
          One-Stop-Shop for <br />
          All Your Creative Design Needs
        </h5>
        <p className="text-center text-wrap">
          We are a creative design agency offering impeccable services and
          ingenious solutions that reflect the latest industry <br />
          norms and capacity to make an impact.
        </p>
      </div>
      <div className="pt-10 md:px-6 grid grid-cols-2 gap-4 md:flex md:pb-1 pb-8">
        <Logos source="logo" title="Logo design" />
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
