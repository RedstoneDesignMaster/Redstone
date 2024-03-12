import React from "react";

const PrcingSectionOne = () => {
  return (
    <div>
      <div
        className="sm:bg-cover sm:bg-center h-[400px] px-14 sm:px-24 pb-8"
        style={{
          backgroundImage: "url('/About Us/about-us-banner.webp')",
        }}
      >
        <h5 className="line-clamp-5 leading-snug  text-center text-white text-6xl text-wrap font-extrabold sm:text-5xl py-14 sm:py-44">
          Best Marketing Services Grow Your <br className="hidden sm:block" />{" "}
          Business With Us!
        </h5>
      </div>
    </div>
  );
};

export default PrcingSectionOne;
