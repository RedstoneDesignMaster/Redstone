import React from "react";
import Logos from "../components/Logos";
import Image from "next/image";
const Sectionone = () => {
  return (
    <section className="flex flex-col items-center align-center h-screen pt-10">
      <div>
        <h5 className="font-bold text-3xl text-center text-wrap py-6">
          One-Stop-Shop for <br />
          All Your Creative Design Needs
        </h5>
        <p className="text-center text-wrap">
          We are a creative design agency offering impeccable services and
          ingenious solutions that reflect the latest industry <br />
          norms and capacity to make an impact.
        </p>
      </div>
      <div className="pt-10  px-6 flex gap-4">
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
