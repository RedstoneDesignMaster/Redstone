import Image from "next/image";
import React from "react";

const Seosectionthree = () => {
  return (
    <div
      className=" bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-8 md:h-full py-28 sm:mt-12"
      style={{
        backgroundImage: "url('/SEO/banner-seo-2.webp')",
      }}
    >
      <div className="text-white mx-8">
        <Image src={"/SEO/1.webp"} alt="seo" height={100} width={100} />
        <h5 className="font-bold text-xl text-white text-start py-2">
          Full-Service SEO Expertise
        </h5>
        <p className="text-start line-clamp-3 text-sm">
          Our SEO specialists are well equipped with the strategies. Our Seo
          Expertise covers all aspects of on-page and off-page SEO.
        </p>
      </div>
      <div className="text-white mx-8 ">
        <Image src={"/SEO/2.webp"} alt="seo" height={100} width={100} />
        <h5 className="font-bold text-xl text-white text-start py-2">
          Audit and Analysis
        </h5>
        <p className="text-start line-clamp-3 text-sm">
          Our analytical experts perform a formal inspection of your business
          virtual presence. we gather the errors that are causing your business
          detriment{" "}
        </p>
      </div>
      <div className="text-white mx-8 ">
        <Image src={"/SEO/3.webp"} alt="seo" height={100} width={100} />
        <h5 className="font-bold text-xl text-white text-start py-2">
          Visibility and Architecture
        </h5>
        <p className="text-start line-clamp-4 text-sm">
          We build your business presence for visibility and recognition in the
          market with combined expertise.
        </p>
      </div>
    </div>
  );
};

export default Seosectionthree;
