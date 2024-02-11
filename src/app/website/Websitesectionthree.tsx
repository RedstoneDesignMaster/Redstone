import Link from "next/link";
import React from "react";

const Websitesectionthree = () => {
  return (
    <div
      className="bg-cover bg-center text-center text-white pt-6 pb-12"
      style={{ backgroundImage: "url('/cms-third-bg.webp')" }}
    >
      <h5 className="text-3xl font-bold py-6 text-white">
        ADD ONS ON WEB PACKAGES
      </h5>

      <div className="flex  gap-12  p-8">
        <div className="bg-[#181760] flex-1 text-white text-wrap text-start py-10 px-10 ">
          <h5 className="font-bold  ">Content management system $199</h5>
          <h5 className="font-bold  ">Search engine submission $200</h5>
          <ol className="list-disc text-white pl-8">
            <li>Google</li>
            <li>Yahoo</li>
            <li>Bing</li>
          </ol>
        </div>

        <div className="bg-[#181760] flex-1 text-white text-wrap text-start py-[52px] px-10">
          <h5>
            Web copy writing (per 300 words) $65 Additional
            <br /> integrations and services
          </h5>
          <ol className="list-disc text-white pl-8">
            <li>SSL certificate $50</li>
            <li>Chat integration $50</li>
          </ol>
        </div>

        <div className="bg-[#181760] flex-1 text-white text-wrap text-start py-[42px] px-10">
          <h5>Social media creation $195</h5>
          <ol className="list-disc text-white pl-8">
            <li>Facebook Cover & DP Design</li>
            <li>Twitter Cover & DP Design</li>
            <li>Youtube Cover & DP Design</li>
            <li>LinkedIn Cover & DP Design</li>
          </ol>
        </div>
      </div>
      <div className="flex items-center gap-x-14 justify-around">
        <Link
          href={""}
          className="px-6 py-4 text-center font-semibold bg-violet-500"
        >
          Request for a Quote
        </Link>
        <p>
          Need More? Let Us Help You Create a Custom <br />
          Package Tailored To Your Needs
        </p>
        <Link
          href={""}
          className="px-6 py-4 text-center font-semibold bg-[#f09800]"
        >
          Discuss with Design Conultant
        </Link>
      </div>
    </div>
  );
};

export default Websitesectionthree;
