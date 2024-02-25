import React from "react";

const Copyrights = () => {
  return (
    <div className="bg-black text-white mx-auto md:px-3 md:flex md:items-start md:justify-between md:py-8 py-3">
      <p className="text-sm mx-auto md:mx-0 text-center md:text-start">
        Copyright © All Rights Reserved 2024 Powered by Gojozeal
      </p>
      <ol className=" list-disc list-inside flex justify-center items-center gap-x-2 text-sm">
        <li>Refund Policy</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ol>
    </div>
  );
};

export default Copyrights;
