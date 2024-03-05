import Image from "next/image";
import React from "react";
import Testimonial from "../Home/Testimonial";

const page = () => {
  return (
    <>
      <section className="">
        <div
          className="sm:bg-cover sm:bg-center h-[400px] px-14 sm:px-24 pb-8"
          style={{
            backgroundImage: "url('/About Us/about-us-banner.webp')",
          }}
        >
          <h5 className="line-clamp-5 leading-snug  text-center text-white text-6xl text-wrap font-extrabold sm:text-5xl py-14 sm:py-44">
            Best Marketing Services Grow Your <br className="hidden sm:block" />{" "}
            Business With Us!
          </h5>
        </div>
        <div className="mt-8">
          <h5 className="text-[#76e2ea] text-center font-semibold text-base tracking-wide ">
            Hello From Us
          </h5>
          <h5 className="text-center font-semibold text-2xl tracking-wide py-4">
            Let Us Introduce Ourselves
          </h5>
          <p className="text-center text-slate-600 text-sm px-8 tracking-wide text-wrap line-clamp-3 pb-4 leading-8 sm:leading-6 sm:text-xs">
            Welcome to Logo Zeal, where a team of creative{" "}
            <br className="hidden sm:block" /> experts ready to meet your
            expectations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pb-8">
            {/* Left side */}
            <div className="px-6 sm:w-1/2">
              <h5 className="text-xl text-wrap pr-8 font-medium tracking-wide  sm:pl-1 leading-8 sm:text-3xl">
                Turning Your Vision into a <br /> Successful Visual Identity
              </h5>
              <h6 className="text-blue-400 text-xl leading-8 font-bold sm:font-extrabold pl-9 bg-gradient-to-r from-blue-700 to-blue-50 text-transparent bg-clip-text">
                Web Designing, Marketing, and Bring <br />
                Enhancement
              </h6>
              <p className="text-sm text-gray-500 text-start text-wrap leading-8 tracking-wide">
                Welcome to Logo Zeal, a 360 Digital Marketing Agency that works
                round the clock to meet your expectations. As a marketing
                agency, we have curated a team of professional designers,
                creatives, strategists, and developers. Our team isn't just a
                bunch of people but a bundle of creative professionals with vast
                industry experience. Logo Zeal aims to introduce new heights of
                creativity and grow your business to the pinnacle. We are
                professional, confident, and achievers. We bring results that we
                promise. Our expert opinions are based on test and trial methods
                experimented with over the years.
                <br /> Logo Zeal is happy to welcome all enterprises, startups,
                and established businesses on the boat of certain success.
              </p>
            </div>
            {/* Right Side */}
            <div className="sm:w-1/2 sm:px-6 px-6">
              <Image
                src={"/About Us/contact-first-01.webp"}
                alt="about-contact-us"
                height={800}
                width={800}
              />
            </div>
          </div>
        </div>
        {/* 3rd section */}
        <div
          className="sm:bg-cover sm:bg-center h-auto px-14 sm:px-24 pb-12 sm:pb-16"
          style={{
            backgroundImage: "url('/About Us/portfolio-banner.webp')",
          }}
        >
          <h5 className="text-white text-2xl sm:text-4xl font-bold text-center py-6 sm:py-10">
            Best Digital Agency In USA
          </h5>
          {/* icon main div */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/About Us/contact-icon-01.webp"}
                alt=""
                height={150}
                width={150}
              />
              <h5 className="text-center text-2xl text-gray-400">
                Years Of <br />
                Expertise
              </h5>
              <p className="text-sm text-white text-center text-wrap px-12 sm:px-2">
                We have worked in a diverse spectrum of industries. We know
                every business.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/About Us/contact-icon-02.webp"}
                alt=""
                height={150}
                width={150}
              />
              <h5 className="text-center text-2xl text-gray-400">
                Successful <br /> Deliveries
              </h5>
              <p className="text-sm text-white text-center text-wrap px-12 sm:px-2">
                We believe in punctuality with 100% effort.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/About Us/contact-icon-03.webp"}
                alt=""
                height={150}
                width={150}
              />
              <h5 className="text-center text-2xl text-gray-400">
                Satisfied <br />
                Clients
              </h5>
              <p className="text-sm text-white text-center text-wrap px-12 sm:px-2">
                Customer feedback is our top priority.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/About Us/contact-icon-04.webp"}
                alt=""
                height={150}
                width={150}
              />
              <h5 className="text-center text-2xl text-gray-400">
                Innovative <br />
                Solutions
              </h5>
              <p className="text-sm text-white text-center text-wrap px-12 sm:px-2">
                There is no digital problem that we can't solve
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-center px-6 mt-10">
          <div className="sm:w-1/2">
            <p className="text-xl font-semibold text-start text-wrap tracking-wider leading-8">
              One of the fast-paced emerging digital marketing agencies in the
              US with a high success rate,innovative solutions, and designs.
            </p>
            <ul className="text-sm font-medium list-disc leading-8 py-8 pl-8 sm:pl-0">
              <li className="text-blue-300">
                Dedicated to your business's digital identity
              </li>
              <li className="text-violet-300">
                Original and error-proof design and services
              </li>
              <li className="text-pink-400">
                Customer support whenever you summon
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2">
            <Image
              src={"/About Us/contact-third-01.webp"}
              alt=""
              height={750}
              width={750}
            />
          </div>
        </div>
        <p className="text-black font-semibold text-center py-8">
          ______________________
        </p>
      </section>
    </>
  );
};

export default page;
