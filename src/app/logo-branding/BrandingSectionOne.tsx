"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PopupModal from "../order-form/PopupModal";
const BrandingSectionOne = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-[6px] bg-violet-600 text-white rounded-l-lg hover:bg-violet-400 "
              >
                Let's get started $59.00
              </button>
              <PopupModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
              />
              <Link
                href={"tel:+1 909 307 4060"}
                className="bg-orange-400 hover:bg-orange-600 py-2 px-4  rounded-r-lg font-medium"
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
