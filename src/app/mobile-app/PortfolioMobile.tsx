import React from "react";
import Portfolioview from "../components/Portfolioview";

const PortfolioMobile = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/Mobile App/portfolio-banner.webp')",
      }}
    >
      <h5 className="text-3xl font-bold text-white px-8 py-12">
        Brilliant Ideas That Create Great Value
      </h5>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-2 pb-8">
        <Portfolioview source="1" path="Mobile App" width={400} height={300} />
        <Portfolioview source="2" path="Mobile App" width={400} height={300} />
        <Portfolioview source="3" path="Mobile App" width={400} height={300} />
        <Portfolioview source="4" path="Mobile App" width={400} height={300} />
        <Portfolioview source="5" path="Mobile App" width={400} height={300} />
        <Portfolioview source="6" path="Mobile App" width={400} height={300} />
        <Portfolioview source="7" path="Mobile App" width={400} height={300} />
        <Portfolioview source="8" path="Mobile App" width={400} height={300} />
        <Portfolioview source="9" path="Mobile App" width={400} height={300} />
      </div>
    </div>
  );
};

export default PortfolioMobile;
