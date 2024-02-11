import React from "react";

const Seosectionone = () => {
  return (
    <div
      className=" h-screen flex flex-col justify-center items-start px-20 w-screen bg-cover  bg-center"
      style={{
        backgroundImage: "url('/seo/banner-seo.webp')",
      }}
    >
      <h5 className="text-white text-4xl font-extrabold py-4 leading-normal">
        Optimized Marketing to
        <br /> Enhance Your Business <br /> Position
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
