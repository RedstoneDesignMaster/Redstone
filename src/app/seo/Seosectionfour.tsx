import { url } from "inspector";
import Image from "next/image";
import React from "react";

const Seosectionfour = () => {
  return (
    <div className="md:h-screen pt-8 ">
      <h5 className="text-center font-extrabold text-xl md:text-4xl mx-8 md:leading-relaxed md:py-8">
        Client Case Studies
      </h5>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-10  gap-y-2 md:gap-y-6 md:items-start mx-10 my-5 ">
        <div className=" ">
          <Image src={"/SEO/4.webp"} alt="seo" height={1200} width={1400} />
        </div>
        <div className=" pt-12">
          <h5 className="text-start text-lg md:text-3xl leading-loose font-bold pb-4">
            Fliptainment
          </h5>
          <p className="text-wrap text-start line-clamp-8 text-sm md:text-base leading-6 md:leading-8 md:pr-8 ">
            Gojo zeal proved to be a distinguished design agency. They helped us
            in not just revamping our website with a whole new look and feel
            but, made it possible for us to achieve strong brand retention
            through their brilliant services and solutions.
          </p>
          <div className="flex justify-start items-center md:gap-x-8 py-4 ">
            <div
              className="bg-cover bg-center px-6 py-4"
              style={{
                backgroundImage: "url('/SEO/5.webp')",
              }}
            >
              <h5 className="text-orange-500 font-semibold text-start text-sm">
                1,500
              </h5>
              <p className="line-clamp-4 text-xs">
                5 months <br />
                Sign ups
              </p>
            </div>
            <div
              className="bg-cover bg-center px-6 py-4"
              style={{
                backgroundImage: "url('/SEO/6.webp')",
              }}
            >
              <h5 className="text-red-600 text-sm">35%</h5>
              <p className="line-clamp-5 text-wrap text-xs">
                Increase in total <br />
                site traffic
              </p>
            </div>
            <div
              className="bg-cover bg-center px-6 py-4"
              style={{
                backgroundImage: "url('/SEO/7.webp')",
              }}
            >
              <h5 className="text-pink-500 text-sm">35%</h5>
              <p className="text-xs line-clamp-6">
                Increase in returns <br />
                visit by customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seosectionfour;
