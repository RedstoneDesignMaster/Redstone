import React from "react";
import Image from "next/image";
import Link from "next/link";
const MobileSectionthree = () => {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start justify-normal bg-cover bg-center sm:h-screen"
        style={{
          backgroundImage: "url('/Mobile App/bg2.webp')",
        }}
      >
        <div className="px-6 sm:w-1/2 text-start">
          <h4 className="text-4xl font-bold  text-indigo-700 pt-12 text-start">
            Deliver Real Value
          </h4>
          <h5 className="text-xl font-medium text-wrap pt-3 text-start">
            Every element we add brings value to your business.
          </h5>
          <p className="text-wrap text-gray-400 text-base  font-semibold text-start py-6 leading-[28px] ">
            We deliver real-valued apps which are innately task-oriented and
            declutter the processes of purchasing or availing your business
            services. The apps were developed to function at full efficiency.
            With extensive knowledge of customer behavior, we know exactly what
            your target audience hopes for.
          </p>
          {
            <div className="flex flex-col sm:flex-row justify-start md:gap-x-44 pt-8 font-semibold  md:pl-8 text-sm">
              <ul className="flex flex-col justify-start items-start list-disc ">
                <li>Flow of an intuitive app</li>
                <li>Relevant features</li>
                <li>All-purpose apps</li>
              </ul>
              <ul className="flex flex-col justify-start items-start list-disc">
                <li>Simpler Interface</li>
                <li>Alternation in Layouts</li>
                <li>Convenience at best</li>
              </ul>
            </div>
          }
          <div className="mb-8">
            <Link
              href={""}
              className="py-2 px-4 text-lg text-white rounded-sm font-bold bg-violet-600 "
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>

        <div className="pr-12">
          <Image
            src={"/Mobile App/mobile1.webp"}
            alt="CMS 2"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="bg-blue-200 text-lg font-bold flex flex-col items-center justify-center py-8 sm:mt-20">
        <h5 className="text-xl sm:text-3xl px-4 pb-8">
          Choosing the Right technology stack to build your app
        </h5>
        <Image
          src={"/Mobile App/logo-brand.webp"}
          alt="logo"
          height={400}
          width={800}
        />
      </div>
    </>
  );
};

export default MobileSectionthree;
