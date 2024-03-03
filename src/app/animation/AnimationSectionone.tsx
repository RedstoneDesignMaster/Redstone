import React from "react";

const AnimationSectionone = () => {
  return (
    <div
      className=" flex flex-col   items-start px-4 h-[400px] justify-center sm:bg-cover sm:bg-center sm:h-screen"
      style={{
        backgroundImage: "url('/Video/whiteboard-banner.webp')",
      }}
    >
      <h5 className="text-white text-xl  sm:text-3xl font-bold text-start">
        Get Simple, Attracting,
      </h5>
      <h5 className="text-3xl sm:text-5xl text-yellow-300 sm:text-white font-bold text-start sm:leading-10 sm:py-4">
        Purposeful Explainer Videos
      </h5>
      <p className="text-white text-wrap text-sm font-semibold pb-4 text-start">
        Attract your audience by providing visual informal information about
        business
      </p>
      <div className="flex justify-center items-center gap-0 mb-4">
        <button className="text-base md:text-lg text-white font-bold py-2 px-5 bg-violet-600 rounded-sm">
          Request Custom Quote
        </button>
        <button className="text-base md:text-lg text-white font-bold py-2 px-5 bg-yellow-400 rounded-r-sm">
          Live Chat
        </button>
      </div>
    </div>
  );
};

export default AnimationSectionone;
