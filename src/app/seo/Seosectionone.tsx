import React from "react";

const Seosectionone = () => {
  return (
    <div
      className=" md:h-screen flex flex-col md:justify-center pt-44 md:pt-0 items-start px-4 md:px-20 md:w-screen md:bg-cover  md:bg-center h-[600px]"
      style={{
        backgroundImage: "url('/SEO/banner-seo.webp')",
      }}
    >
      <h5 className="text-white text-xl md:text-4xl md:font-extrabold md:py-4 md:leading-normal text-start">
        Optimized Marketing to
      </h5>

      <h5 className="text-3xl md:text-4xl text-yellow-300">
        {" "}
        Enhance Your Business
        <br className="hidden md:block" /> Position
      </h5>
      <p className="text-white text-wrap text-xl pb-4">
        Market your business to appear the best on the search engines
      </p>
      <div className="flex justify-center items-center gap-1">
        <button className="py-4 px-6 bg-violet-600 text-white text-center font-bold">
          Custom Degital Marketing From
          <span className="text-yellow-400 text-2xl text-center">
            {" "}
            $299
          </span>{" "}
        </button>
        <button className="py-4 px-4 bg-yellow-400 text-center text-2xl">
          Live Chat
        </button>
      </div>
    </div>
  );
};

export default Seosectionone;
