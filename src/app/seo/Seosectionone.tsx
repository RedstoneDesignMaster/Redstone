import React from "react";
import Link from "next/link";
const Seosectionone = () => {
  return (
    <div
      className=" md:h-screen flex flex-col md:justify-center pt-44 md:pt-0 items-start px-4 md:px-20 md:w-screen md:bg-cover  md:bg-center h-[600px] gap-y-8 md:gap-y-0"
      style={{
        backgroundImage: "url('/SEO/banner-seo.webp')",
      }}
    >
      <h5 className="text-white text-xl md:text-4xl md:font-extrabold md:py-4 md:leading-normal text-start font-semibold ">
        Optimized Marketing to
      </h5>

      <h5 className="text-2xl md:text-4xl text-orange-400">
        {" "}
        Enhance Your Business
        <br className="hidden md:block" /> Position
      </h5>
      <p className="text-white text-wrap text-base md:text-xl pb-4">
        Market your business to appear the best on the search engines
      </p>
      <div className="flex justify-center items-center ">
        <button className=" py-2 px-4 md:py-3 md:px-6 bg-violet-600 text-white text-center font-bold text-sm md:text-lg rounded-l-md">
          Custom Degital Marketing From
          <span className="text-orange-500 md:text-lg text-center">
            {" "}
            $299
          </span>{" "}
        </button>
        <Link
          href={"tel:+1 909 307 4060"}
          className="py-2 px-4 md:py-3 md:px-4 bg-orange-400 text-center md:text-lg font-bold text-sm rounded-r-md"
        >
          Live Talk
        </Link>
      </div>
    </div>
  );
};

export default Seosectionone;
