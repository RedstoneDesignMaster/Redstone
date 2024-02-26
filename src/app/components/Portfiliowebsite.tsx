import React from "react";
import { useState } from "react";
const Portfiliowebsite = ({ src }: { src: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="md:w-[380px] md:h-[350px]  w-[230px] h-[350px] overflow-hidden">
      <img
        src={`/website/${src}.webp`}
        alt="portfolio web"
        className={`w-full h-full object-cover  duration-1000 ease-in transform origin-top ${
          hover ? "object-bottom-center" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
};

export default Portfiliowebsite;
