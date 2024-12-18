import React from "react";
import Portfolio from "./Portfolio";
import Portfolioview from "./Portfolioview";

const Logosection = () => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3  gap-4 md:gap-2 justify-center px-6"
      id="logo"
    >
      <Portfolioview source="1" path="Logos" width={300} height={300} />
      <Portfolioview source="2" path="Logos" width={300} height={300} />
      <Portfolioview source="3" path="Logos" width={300} height={300} />
      <Portfolioview source="4" path="Logos" width={300} height={300} />
      <Portfolioview source="5" path="Logos" width={300} height={300} />
      <Portfolioview source="6" path="Logos" width={300} height={300} />
      <Portfolioview source="7" path="Logos" width={300} height={300} />
      <Portfolioview source="8" path="Logos" width={300} height={300} />
      <Portfolioview source="9" path="Logos" width={300} height={300} />
    </div>
  );
};

export default Logosection;
