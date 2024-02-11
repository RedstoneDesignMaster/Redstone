import Image from "next/image";
import Link from "next/link";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-around py-4 px-2 gap-x-10">
        <div className="flex items-center gap-x-[30px]">
          <Image src={"/header-logo.webp"} alt="" width={200} height={200} />
          <Link href={"/"}>about us</Link>
          <Link href={"/"}>pricing</Link>
          <Link href={"/"}>contact us</Link>
        </div>
        <div className="flex items-center gap-x-1">
          <i>
            <CallIcon />
          </i>
          <p>(800) 840-4530</p>
          <Button
            variant="contained"
            className="bg-violet-600 hover:bg-violet-500"
          >
            Reques a Custom Quote
          </Button>
        </div>
      </div>
      <div className="container-2 bg-violet-600 flex items-center justify-around px-[150px] py-2 text-white text-[14px] font-[500px] tracking-normal  border-blue-300">
        <Link href={"/"} className="no-underline hover:underline">
          LOGO & BRANDING
        </Link>
        <Link href={"/website"} className="no-underline hover:underline">
          WEBSITE DESIGN
        </Link>
        <Link
          href={"/printing-packaging"}
          className="no-underline hover:underline"
        >
          PRINTING & PACKAGING
        </Link>
        <Link href={"/seo"} className="no-underline hover:underline">
          SEO
        </Link>
        <Link href={"/mobile-app"} className="no-underline hover:underline">
          MOBILE APPS
        </Link>
        <Link href={"/animation"} className="no-underline hover:underline ">
          VIDEO ANIMATION
        </Link>
      </div>
    </>
  );
};

export default Header;
