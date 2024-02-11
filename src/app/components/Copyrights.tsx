import React from "react";

const Copyrights = () => {
  return (
    <div className="bg-black text-white mx-auto px-3 flex items-start justify-between py-8">
      <p className="text-sm">
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
