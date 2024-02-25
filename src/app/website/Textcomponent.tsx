import Link from "next/link";
import React from "react";
import { orderone, textarea, titles } from "./textconstant/constanttext";
const Textcomponent = ({ title, para }: { title: number; para: number }) => {
  return (
    <div className="pl-4">
      <h5 className="font-semibold text-3xl text-center py-5">
        {titles[title]}
      </h5>
      <p className="text-gray-500 text-wrap">{textarea[para]}</p>
      <ol className="list-disc font-medium text-start py-4 mb-4 text-sm">
        {orderone.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ol>
      <Link
        href={""}
        className="px-5 py-4  bg-violet-700 text-white text-center "
      >
        Request a Custom Quote
      </Link>
    </div>
  );
};

export default Textcomponent;
