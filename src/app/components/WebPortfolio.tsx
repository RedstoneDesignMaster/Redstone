import React from "react";
import Portfiliowebsite from "./Portfiliowebsite";

const WebPortfolio = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  gap-2 md:gap-4 md:px-8 justify-items-center">
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
  );
};

export default WebPortfolio;
