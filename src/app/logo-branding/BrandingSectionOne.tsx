import React from "react";
import Image from "next/image";
import Link from "next/link";
const BrandingSectionOne = () => {
  return (
    <>
      <div
        className="Hero md:flex md:items-center md:justify-around  text-white md:h-screen "
        style={{
          backgroundImage: "url('/logo-branding/logo-branding-banner.webp')",
        }}
      >
        <div className="px-8 bg-[url('/img/bg.jpg')] pt-8 md:pt-4">
          <h1 className="text-2xl md:text-3xl font-light text-wrap md:tracking-tight md:leading-[48px]  line-clamp-3 ">
            Custom Logo Design Services That Create a Strong Impression <br />{" "}
          </h1>

          <p className="md:py-4 text-wrap  animate_animated animate__slideOutDown md:line-clamp-3">
            We create a visual identity that matters. Let our expert design a
            unique and attractive logo for your brand.
          </p>
          <section className="pt-8  pb-16 md:pt-4 md:pb-4 mt-4 ">
            <span>
              <Link
                href={""}
                className="bg-violet-600 hover:bg-violet-500 py-2 px-4 text-base font-bold "
              >
                Lets Get Started $59.00
              </Link>
              <Link
                href={""}
                className="bg-yellow-500 hover:bg-violet-500 py-2 px-4 text-base font-bold"
              >
                Live Chat
              </Link>
            </span>
          </section>
        </div>
        <div className="hidden md:block  ">
          <Image
            src={"/logo-branding/logo-branding-banner-01.webp"}
            alt="home banner"
            width={800}
            height={800}
          />
        </div>
      </div>
    </>
  );
};

export default BrandingSectionOne;
