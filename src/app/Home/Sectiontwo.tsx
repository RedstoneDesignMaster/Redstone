import React from "react";
import Image from "next/image";

const Sectiontwo = () => {
  return (
    <>
      <h1 className="font-bold text-4xl text-center">Awards & Recognitions</h1>

      <div className="flex justify-around items-center">
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
    </>
  );
};

export default Sectiontwo;
