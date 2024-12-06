"use client";
import { useState } from "react";
import PopupModal from "../order-form/PopupModal";
import Link from "next/link";
import React from "react";
import { orderone, textarea, titles } from "./textconstant/constanttext";

const Textcomponent = ({ title, para }: { title: number; para: number }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="pl-4">
      <h5 className="font-semibold text-3xl text-center py-5">
        {titles[title]}
      </h5>
      <p className="text-gray-500 text-wrap">{textarea[para]}</p>
      <ol className="list-disc font-medium text-start py-4 mb-4 text-sm">
        {orderone.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ol>
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-400 font-medium"
      >
        Request a Custom Quote
      </button>
      <PopupModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Textcomponent;
