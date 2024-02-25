import React from "react";
import Link from "next/link";
import { basicSeo } from "../components/constants";

const Priceseo = ({ title, price }: { title: string; price: number }) => {
  return (
    <section className="border-2 w-full md:w-1/4 text-center overflow-hidden">
      <h5 className="text-2xl font-extrabold leading-loose tracking-wide text-center  text-wrap pt-9">
        {title}
      </h5>
      <p className="text-xl py-1 bg-white text-center font-semibold">
        Best value for Money Guranteed
      </p>
      <h5 className="py-6 bg-gray-300 bg-opacity-50 text-center font-extrabold text-3xl">
        ${price}.00
      </h5>
      <div className="  text-center text-wrap max-h-[300px] overflow-y-scroll">
        <ul className="py-4 leading-8 text-sm">
          {basicSeo.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-start text-center py-4 gap-3">
        <Link href="" className="bg-violet-600 py-2 px-4 hover:bg-violet-500">
          Oder Now
        </Link>
        <Link href="" className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4">
          Live Chat
        </Link>
      </div>
    </section>
  );
};

export default Priceseo;
