"use client";
import React from "react";
import { useState } from "react";
import PopupModal from "../order-form/PopupModal";

const Websitesectionfive: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-start pt-8">
        <h5 className=" text-xl md:text-3xl font-bold text-center text-wrap">
          Let Us Give Your Brand An Identity
          <br /> That Speaks It All For You!
        </h5>
        <p className="text-lg md:text-2xl text-gray-500 text-center text-wrap pt-4 px-4 md:px-1">
          We transform creative ideas into stunning realities
        </p>
        <div className="py-4">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-400 font-medium"
          >
            Request a Quote
          </button>
          <PopupModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Websitesectionfive;
