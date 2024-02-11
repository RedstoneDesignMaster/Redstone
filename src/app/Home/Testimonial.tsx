import Image from "next/image";
import React from "react";
import TestimonialCrousel from "../components/TestimonialCrousel";

const Testimonial = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: 'url("/Testimonials/testimonial-banner.webp")',
      }}
    >
      <h5 className="font-bold text-2xl text-white text-center pb-8">
        Testimonials
      </h5>
      <TestimonialCrousel />
    </div>
  );
};

export default Testimonial;
