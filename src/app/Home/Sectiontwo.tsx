import React from "react";
import Image from "next/image";

const Sectiontwo = () => {
  return (
    <>
      <div className="  md:pt-2 flex flex-col ">
        <h1 className="font-bold md:text-4xl text-center text-2xl text-wrap ">
          Awards & Recognitions
        </h1>

        <div className="flex flex-col md:flex-row justify-around items-center">
          <Image src={"/bark.png"} alt="Bark" width={150} height={150} />
          <Image
            src={"/site-jabber.png"}
            alt="Site Jabber"
            width={150}
            height={150}
          />
          <Image
            src={"/trustpilot.png"}
            alt="Trust Pilot"
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
};

export default Sectiontwo;
