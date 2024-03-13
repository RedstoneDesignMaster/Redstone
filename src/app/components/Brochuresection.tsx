import React from "react";
import Portfolioview from "./Portfolioview";

const Brochuresection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 md:gap-2 justify-center px-6">
      <Portfolioview source="1" path="Brochure" width={400} height={400} />
      <Portfolioview source="2" path="Brochure" width={400} height={400} />
      <Portfolioview source="3" path="Brochure" width={400} height={400} />
      <Portfolioview source="4" path="Brochure" width={400} height={400} />
      <Portfolioview source="5" path="Brochure" width={400} height={400} />
      <Portfolioview source="6" path="Brochure" width={400} height={400} />
      <Portfolioview source="7" path="Brochure" width={400} height={400} />
      <Portfolioview source="8" path="Brochure" width={400} height={400} />
      <Portfolioview source="9" path="Brochure" width={400} height={400} />
    </div>
  );
};

export default Brochuresection;
