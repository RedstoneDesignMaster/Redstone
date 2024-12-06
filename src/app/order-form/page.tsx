"use client";
import React from "react";
import { useState } from "react";
import PopupModal from "./PopupModal";

const Page: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-400 font-medium"
      >
        Order Now
      </button>
      <PopupModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Page;
