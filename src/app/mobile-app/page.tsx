import React from "react";
import MobileSectionOne from "./MobileSectionOne";
import MobileSectiontwo from "./MobileSectiontwo";
import MobileSectionthree from "./MobileSectionthree";
import MobileSectionfour from "./MobileSectionfour";
import PortfolioMobile from "./PortfolioMobile";
import Testimonial from "../Home/Testimonial";

const page = () => {
  return (
    <div className="text-5xl font-extralight text-center ">
      <MobileSectionOne />
      <MobileSectiontwo />
      <MobileSectionthree />
      <MobileSectionfour />
      <PortfolioMobile />
      {/* <Testimonial /> */}
    </div>
  );
};

export default page;
