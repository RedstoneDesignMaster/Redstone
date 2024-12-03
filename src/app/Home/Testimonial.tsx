import Image from "next/image";
import React from "react";
import TestimonialCrousel from "../components/TestimonialCrousel";

const Testimonial = () => {
  return (
    <div
      className="bg-cover  pt-2 rounded-[20px] mx-8"
      style={{
        backgroundImage: 'url("/Testimonials/testimonial-banner.webp")',
      }}
    >
      <h5 className="font-bold text-4xl  text-white text-center pb-8">
        Testimonials
      </h5>
      <TestimonialCrousel />
    </div>
  );
};

export default Testimonial;
