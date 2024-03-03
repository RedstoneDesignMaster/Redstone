"use client";
import Image from "next/image";
import React from "react";
import Textcomponent from "./Textcomponent";
import { useState } from "react";

const Websitesectionfour = () => {
  const [state, setState] = useState("1");
  const handleChange = (e: any) => {
    setState(e);
  };
  return (
    <div>
      <h5 className="text-center font-bold text-xl md:text-4xl py-10 px-12 md:px-4">
        Web Design Features & Technology
      </h5>
      <div className="grid md:grid-cols-3 px-4 md:px-0 sm:gap-x-6">
        {/*Flex mobil */}
        <div className=" md:px-4 pb-6">
          <div className="border-2 mt-4 border-black  py-3 hover:border-orange-400 flex items-center justify-start gap-x-8">
            <Image
              src={"/Button/cms-icon-01.webp"}
              alt=""
              width={80}
              height={80}
            />
            <button
              className="font-semibold "
              onClick={() => handleChange("1")}
            >
              Product Inventory
            </button>
          </div>
          <div className="border-2 mt-4 border-black  py-3 hover:border-orange-400 flex items-center justify-start gap-x-8">
            <Image
              src={"/Button/cms-icon-02.webp"}
              alt=""
              width={80}
              height={80}
            />
            <button
              className="font-semibold "
              onClick={() => handleChange("2")}
            >
              Visuals and Descriptions
            </button>
          </div>
          <div className="border-2 mt-4 border-black  py-3 hover:border-orange-400 flex items-center justify-start gap-x-8">
            <Image
              src={"/Button/cms-icon-02.webp"}
              alt=""
              width={80}
              height={80}
            />
            <button
              className="font-semibold "
              onClick={() => handleChange("3")}
            >
              Animation and Content
            </button>
          </div>
          <div className="border-2 mt-4 border-black  py-3 hover:border-orange-400 flex items-center justify-start gap-x-8">
            <Image
              src={"/Button/cms-icon-02.webp"}
              alt=""
              width={80}
              height={80}
            />
            <button
              className="font-semibold "
              onClick={() => {
                handleChange("4");
              }}
            >
              Shopping Cart
            </button>
          </div>
          <div className="border-2 mt-4 border-black  py-3 hover:border-orange-400 flex items-center justify-start gap-x-8">
            <Image
              src={"/Button/cms-icon-02.webp"}
              alt=""
              width={80}
              height={80}
            />
            <button
              className="font-semibold "
              onClick={() => handleChange("5")}
            >
              Search Bar
            </button>
          </div>
        </div>
        {/* Mobile section */}

        <div className="">
          {state == "1" && <Textcomponent title={1} para={1} />}
          {state == "2" && <Textcomponent title={2} para={2} />}
          {state == "3" && <Textcomponent title={3} para={3} />}
          {state == "4" && <Textcomponent title={4} para={4} />}
          {state == "5" && <Textcomponent title={5} para={5} />}
        </div>
        <div className=" ">
          <Image
            src={"/cms-tab-01.webp"}
            alt=""
            width={600}
            height={600}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Websitesectionfour;
