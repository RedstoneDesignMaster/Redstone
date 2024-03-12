import React from "react";
import Seosectionone from "./Seosectionone";
import Seosectiontwo from "./Seosectiontwo";
import Seopackages from "./Seopackages";
import Seosectionthree from "./Seosectionthree";
import Seosectionfour from "./Seosectionfour";
import Testimonial from "../Home/Testimonial";
import SeoPackageview from "./Seo Packagez/SeoPackageview";

const page = () => {
  return (
    <div>
      <Seosectionone />
      <Seosectiontwo />
      <SeoPackageview/>
      <Seosectionthree />
      <Seosectionfour />
    </div>
  );
};

export default page;
