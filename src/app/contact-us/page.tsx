"use client";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import React from "react";
import { useState } from "react";

const page = () => {
  const y: boolean = true;
  const [buttonState, setbuttonState] = useState();
  const performSomething: any = (e: any) => {
    setbuttonState(e);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h5 className="text-lg text-center text-yellow-400 hover:text-violet-300">
        Yousuf Shah the geekhor kxn
      </h5>
      <button
        className="bg-violet-500 py-2 px-5 rounded-md text-white font-bold my-8 hover:bg-violet-600"
        onClick={() => {
          performSomething(false);
        }}
      >
        Contact us
      </button>
      {buttonState == true && <h5>Hello Yousuf</h5>}
      {buttonState == false && ""}
    </div>
  );
};

export default page;
