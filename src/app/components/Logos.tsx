import React from "react";
import Image from "next/image";

const Logos = ({ source, title }: { source: string; title: string }) => {
  return (
    <div className="flex flex-col items-center  border-2 w-[160px] h-[195px] justify-center ">
      <Image src={`/${source}.webp`} alt="logo" width={100} height={100} />
      <h1 className="font-bold pt-3">{title} </h1>
    </div>
  );
};

export default Logos;
