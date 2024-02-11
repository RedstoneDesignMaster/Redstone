import Image from "next/image";
import React from "react";

const Portfolioview = ({
  path,
  source,
  width,
  height,
}: {
  path: string;
  source: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="">
      <Image
        src={`/${path}/${source}.webp`}
        alt=""
        width={`${width}`}
        height={`${height}`}
      />
    </div>
  );
};

export default Portfolioview;
