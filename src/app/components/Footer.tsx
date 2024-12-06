import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-gray-900 rounded-[20px] shadow-lg mx-8 my-2">
      <div className="md:flex sm:flex-col md:flex-row px-4 md:px-0 md:items-start md:justify-center   md:m-auto md:py-20 mt-4">
        <div className="md:flex md:flex-col md:items-start md:w-1/4">
          <h5 className="text-white font-bold text-xl md:text-2xl ">
            About us
          </h5>

          <p className="text-whtie text-sm text-white  w-full md:w-auto py-4 ">
            Red Stone is a Digital Marketing Agency that provides comprehensive
            digital services, including individual logo design and website
            development assistance.
          </p>
          <Image src={"/dcma.webp"} alt="" width={200} height={200} />
        </div>
        {/* quick links mobile version */}
        <div className="flex gap-12">
          <div className="text-white md:flex md:flex-col md:items-start md:px-6">
            <h5 className="text-white font-bold text-xl">Quick Links</h5>
            <div className="flex flex-col text-sm leading-7">
              <Link href="" className="pt-4">
                Home
              </Link>
              <Link href="/about-us">About Red Stone</Link>
              <Link href="">Recent Work</Link>
              <Link href="/pricing">Packages</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div className="text-white md:flex md:flex-col md:items-center md:text-start md:px-6 ">
            <h5 className="text-white font-bold text-xl ">Our Services</h5>
            <div className="flex flex-col text-sm leading-7">
              <Link href={"/"} className="pt-4">
                Logo & Branding
              </Link>
              <Link href={"/seo"}>SEO</Link>
              <Link href={"/website-packages"}>Website packages</Link>
              <Link href={"/mobile-app"}>Mobile Application</Link>
              <Link href={"animation"}>Video Animation</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-6 pt-4 md:pt-1 pb-8 md:pb-0">
          <h5 className="text-white font-bold text-xl ">Stay in touch</h5>
          <p className="text-indigo-600 text-sm font-semibold">Located at</p>
          <p className="text-white text-wrap text-center">
            11956 Bernardo Plaza Drive, #356, San Diego, CA 92128.
          </p>
          <p className="text-indigo-600 text-sm font-semibold">Call us</p>
          <p className="text-white text-wrap text-center">+1 909 307 4060</p>
          <p className="text-indigo-600 text-sm font-semibold">Write to Us </p>
          <p className="text-white text-wrap text-center">
            jack@redstonedesignmaster.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
