import React from "react";
import Image from "next/image";

const Websitesectionsix = () => {
  return (
    <>
      {/* How to design section */}
      <div className="bg-[#ff9086] text-center pt-0 md:pt-12 pb-16  ">
        <h5 className="text-2xl md:text-4xl font-bold text-white py-8 text-wrap text-center">
          Here is How we Create Professional Designs
        </h5>
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4 mx-12 ">
          <div className="">
            <div className=" bg-white rounded-md  mx-auto p-4 md:w-1/2 h-1/2">
              <Image
                src={"/How/1.webp"}
                alt=""
                width={200}
                height={200}
                className="pb-8 mx-auto"
              />
              <h6 className="text-center font-semibold text-2xl pb-4 text-wrap">
                Build a design brief
              </h6>
              <p className="text-center text-wrap text-gray-500">
                Fill out the creative design brief and tell us everything that
                you need and allow us to kick-start your project.
              </p>
            </div>
          </div>
          <div className=" bg-white rounded-md mx-auto p-4 md:w-1/2 h-1/2">
            <Image
              src={"/How/2.webp"}
              alt=""
              width={200}
              height={200}
              className="pb-8 mx-auto"
            />
            <h6 className="text-center font-semibold text-2xl pb-4">
              Generate the Look
            </h6>
            <p className="text-center text-wrap text-gray-500">
              Once we have what your business nature is, we infuse the
              contemporary elements into the web design and content. We send the
              website visuals to you for approval Along with coding the whole
              virtual business platform.
            </p>
          </div>
          <div className=" bg-white rounded-md  mx-auto md:w-1/2 h-1/2">
            <Image
              src={"/How/3.webp"}
              alt=""
              width={100}
              height={100}
              className="pb-8 mx-auto pt-4"
            />
            <h6 className="text-center font-semibold text-2xl pb-4">
              Test the Functionality
            </h6>
            <p className="text-center text-wrap text-gray-500 pb-8">
              We spare no bugs and errors in the coding. After the approval of
              the website visuals, and the completion of coding we test the
              functionality and features of the website.
            </p>
          </div>
          <div className=" bg-white rounded-md  mx-auto p-4 md:w-1/2 h-1/2">
            <Image
              src={"/How/4.webp"}
              alt=""
              width={200}
              height={200}
              className="pb-8 mx-auto"
            />
            <h6 className="text-center font-semibold text-2xl pb-4 text-wrap">
              Hands Over to You
            </h6>
            <p className="text-center text-wrap text-gray-500">
              Once we are sure that the website is destined to provide an
              excellent customer experience. We hand over the rights to you with
              best wishes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Websitesectionsix;
