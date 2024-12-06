"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PopupModal from "../order-form/PopupModal";

const MobileSectionfour = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="mt-8 ">
      <h5 className="text-center text-3xl font-bold pb-8">
        Client Case Studies
      </h5>
      <div className="flex flex-col sm:flex-row  sm:gap-x-10 items-start justify-center gap-y-6 px-4 sm:px-8">
        <div className="pb-8 sm:w-1/2">
          <Image src={"/Mobile-app/h2.webp"} alt="" height={400} width={600} />
        </div>
        <div className="flex flex-col items-start sm:w-1/2 sm:justify-center sm:pt-12 sm:gap-y-8 sm:px-8">
          <p className="text-sm font-medium text-wrap text-gray-600 pb-4 text-start leading-7">
            We do not just offer mobile applications but we deliver great value
            that builds up an absolute value proposition for your target
            audience. Since every project is unique and requires a specific set
            of dynamic needs and to make things within your means, we offer
            multiple packages that can surely fit your budget.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-400 font-medium text-base"
          >
            Request a Quote
          </button>
          <PopupModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileSectionfour;
