import React from "react";
import Logos from "../components/Logos";
import Link from "next/link";
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
        <Link href={"/logo-branding"}>
          <Logos source="logo" title="Logo design" />
        </Link>
        <Link href={"mobile-app"}>
          <Logos source="mobapp" title="Mobile Application" />
        </Link>
        <Link href={"website"}>
          <Logos source="ecom" title="E-commerce" />
        </Link>
        <Link href={"website"}>
          <Logos source="web" title="Web design" />
        </Link>
        <Link href={"animation"}>
          <Logos source="videoani" title="Video Animation" />
        </Link>
        <Link href={"seo"}>
          <Logos source="digitalmark" title="Digital Marketing" />
        </Link>
      </div>
    </section>
  );
};

export default Sectionone;
