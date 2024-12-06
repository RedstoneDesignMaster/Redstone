import React from "react";
import Link from "next/link";
import Image from "next/image";

const Websitesectiontwo = () => {
  return (
    <div className=" bg-orange-50 flex flex-col md:flex-row items-start justify-start md:gap-x-14  pb-12 px-8">
      {" "}
      <div className="md:px-8  md:pl-0 ">
        <h4 className=" text-xl md:text-4xl font-bold mb-8 text-indigo-700 pt-12">
          CMS Website
        </h4>
        <h5 className="text-sm  text-start sm:text-xl font-medium md:pl-4 md:pb-2 text-nowrap md:text-wrap ">
          Get CMS Website for a Seamless Functionality, <br />
          Contribute, Schedule or Edit
        </h5>
        <p className="text-wrap text-gray-400 leading-8 md:leading-10 pb-5  pt-6 md:pl-8 text-sm md:text-base pr-10 ">
          CMS (content management system) is the most convenient solution which
          enables authorized users to manage publications and content easily.
          Red Stone provides custom CMS websites to anyone who wishes complete
          control. Custom CMS is a tool preferred by leading enterprises. We
          create CMS websites to provide your business with advanced control and
          website administration. Our services ensure website performance and
          flexibility. The advanced services are aimed at initiating a positive
          impact on the website.
        </p>
        <div className="flex flex-col sm:flex-row justify-start gap-x-2 gap-y-1 md:gap-y-0 md:gap-x-44 py-8 font-semibold mb-10 md:pl-8">
          <ul className="flex flex-col justify-start items-start gap-y-1 md:gap-y-4 text-xs sm:text-base list-disc">
            <li>Simplified Redesigning</li>
            <li>Time-Saving Maintenance</li>
            <li>Easy Collaboration</li>
          </ul>
          <ul className="flex flex-col justify-start items-start gap-y-1 md:gap-y-4 text-xs sm:text-base list-disc">
            <li>All-inclusive Marketing strategy</li>
            <li>Multiple Access</li>
            <li>Streamlined Workflow</li>
          </ul>
        </div>
        <Link
          href={"tel:+1 909 307 4060"}
          className="md:px-6 px-4 text-black font-bold text-center  text-sm sm:text-lg py-2 md:py-4 bg-orange-400 mt-6 md:ml-8 rounded-full"
        >
          Request a Custom Quote
        </Link>
      </div>
      <div className="pr-12 mt-8 md:my-auto">
        <Image src={"/cms-02.webp"} alt="CMS 2" width={2800} height={2800} />
      </div>
    </div>
  );
};

export default Websitesectiontwo;
