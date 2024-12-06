"use client";
import React from "react";
import { useState } from "react";
import PopupModal from "../order-form/PopupModal";
import Link from "next/link";

const MobileSectionOne = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div
      className=" flex flex-col   items-start px-4 h-[400px] justify-center md:bg-cover md:bg-center md:h-screen"
      style={{
        backgroundImage: "url('/Mobile-app/mobile-banner.webp')",
      }}
    >
      <h5 className="text-white text-xl  sm:text-3xl font-bold text-start">
        High-End Mobile Application
      </h5>

      <h5 className="text-3xl sm:text-5xl  text-white font-bold text-start">
        {" "}
        Design and Development
      </h5>
      <h5 className="font-normal text-yellow-300 text-lg sm:text-xl text-start pt-2">
        To Upsurge Your Brand Identity
      </h5>
      <p className="text-white text-wrap text-sm font-semibold pb-4 text-start">
        Avail the opportunity to enhance customer experience with a valuable,
        organized, and functional app.
      </p>
      <div className="flex justify-center items-center gap-0 mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-violet-600 text-white rounded-l-lg hover:bg-violet-400 text-base font-bold"
        >
          Order Now
        </button>
        <PopupModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <Link
          href={"tel:+1 909 307 4060"}
          className="text-base text-white font-bold py-2 px-5 bg-yellow-400 rounded-r-lg "
        >
          Live Chat
        </Link>
      </div>
    </div>
  );
};

export default MobileSectionOne;
