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
      <h5 className="text-xl font-bold text-center text-black hover:text-violet-300 py-4">
        Feel free to discuss your requirements{" "}
      </h5>
    </div>
  );
};

export default page;
