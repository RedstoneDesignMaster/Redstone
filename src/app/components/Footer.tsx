import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-start justify-center  bg-gray-900 m-auto py-20 mt-4">
      <div className="flex flex-col items-start w-1/4">
        <h5 className="text-white font-bold text-xl ">About us</h5>
        <p className="text-whtie text-sm text-white text-wrap  py-4">
          Gojo Zeal is a Digital Marketing Agency that provides comprehensive
          digital services, including individual logo design and website
          development assistance.
        </p>
        <Image src={"/dcma.webp"} alt="" width={200} height={200} />
      </div>
      <div className="text-white flex flex-col items-start px-6">
        <h5 className="text-white font-bold text-xl">Quick Links</h5>
        <Link href="" className="pt-4">
          Home
        </Link>
        <Link href="">About Gojozeal</Link>
        <Link href="">Recent Work</Link>
        <Link href="">Packages</Link>
        <Link href="">Contact Us</Link>
        <Link href="">Blogs</Link>
      </div>
      <div className="text-white flex flex-col items-center text-start px-6 ">
        <h5 className="text-white font-bold text-xl ">Our Services</h5>
        <Link href={""} className="pt-4">
          Logo & Branding
        </Link>
        <Link href={""}>SEO</Link>
        <Link href={""}>Website Design</Link>
        <Link href={""}>Mobile Application</Link>
        <Link href={""}>Video Animation</Link>
      </div>
      <div className="flex flex-col items-start px-6">
        <h5 className="text-white font-bold text-xl ">Stay in touch</h5>
        <p className="text-indigo-600 text-sm font-semibold">Located at</p>
        <p className="text-white text-wrap text-center">
          208 W. Main Street, Salisbury, MD 21801
        </p>
        <p className="text-indigo-600 text-sm font-semibold">Call us</p>
        <p className="text-white text-wrap text-center">(800) 840-4530</p>
        <p className="text-indigo-600 text-sm font-semibold">Write to Us </p>
        <p className="text-white text-wrap text-center">info@gojozeal.com</p>
      </div>
    </div>
  );
};

export default Footer;
