import React from "react";
import Portfiliowebsite from "../components/Portfiliowebsite";

const Websiteportfolio = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center text-center pt-14 pb-10 text-white mt-10 md:mt-0"
        style={{ backgroundImage: "url('/banner-05.webp')" }}
      >
        <h5 className="font-bold text-2xl md:text-5xl py-10 px-4 md:px-8">
          Brilliant Ideas That Create Great Value
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-2 md:gap-2   px-4 md:px-8">
          <Portfiliowebsite src="1" />
          <Portfiliowebsite src="2" />
          <Portfiliowebsite src="3" />
          <Portfiliowebsite src="4" />
          <Portfiliowebsite src="5" />
          <Portfiliowebsite src="6" />
          <Portfiliowebsite src="7" />
          <Portfiliowebsite src="8" />
          <Portfiliowebsite src="9" />
        </div>
      </div>
    </>
  );
};

export default Websiteportfolio;
