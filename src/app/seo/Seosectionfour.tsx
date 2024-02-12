import { url } from "inspector";
import Image from "next/image";
import React from "react";

const Seosectionfour = () => {
  return (
    <div className="h-screen">
      <h5 className="text-center font-extrabold text-4xl mx-8 leading-relaxed py-8">
        Client Case Studies
      </h5>
      <div className="flex justify-center gap-x-10 gap-y-6 items-start mx-10 my-5 ">
        <div className="flex-auto ">
          <Image src={"/SEO/4.webp"} alt="seo" height={1200} width={1200} />
        </div>
        <div className="flex-auto pt-12">
          <h5 className="text-start text-3xl leading-loose font-bold">
            Fliptainment
          </h5>
          <p className="text-wrap text-start line-clamp-4">
            logo zeal proved to be a distinguished design agency. They helped us
            in not just revamping our website with a whole new look and feel
            but, made it possible for us to achieve strong brand retention
            through their brilliant services and solutions.
          </p>
          <div className="flex justify-start items-center gap-x-8 py-4">
            <div
              className="bg-cover bg-center px-6 py-4"
              style={{
                backgroundImage: "url('/SEO/5.webp')",
              }}
            >
              <h5 className="text-orange-500 font-semibold text-start">
                1,500
              </h5>
              <p className="line-clamp-2 text-sm">
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
              <h5 className="text-red-600">35%</h5>
              <p className="line-clamp-2 text-wrap">
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
              <h5 className="text-pink-500">35%</h5>
              <p>
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
