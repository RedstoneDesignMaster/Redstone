"use client";
import Image from "next/image";
import Header from "./Header/Header";
import Hero from "./Home/Hero";
import Sectionone from "./Home/Sectionone";
import Sectiontwo from "./Home/Sectiontwo";
import Logosection from "./components/Logosection";
import Stationerysection from "./components/Stationerysection";
import Brochuresection from "./components/Brochuresection";
import Portfolio from "./components/Portfolio";
import Sectionfour from "./Home/Sectionfour";
import Package from "./components/Package";
import Testimonial from "./Home/Testimonial";
import Leadform from "./components/Leadform";
import Footer from "./components/Footer";
import Copyrights from "./components/Copyrights";

export default function Home() {
  return (
    <>
      <Hero />
      <Sectionone />
      <Sectiontwo />
      <Portfolio />
      <Sectionfour />
      <Package />
      <Testimonial />
    </>
  );
}
