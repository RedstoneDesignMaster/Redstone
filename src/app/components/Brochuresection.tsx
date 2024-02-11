import React from "react";
import Portfolioview from "./Portfolioview";

const Brochuresection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Portfolioview source="1" path="Brochure" width={300} height={300} />
      <Portfolioview source="2" path="Brochure" width={300} height={300} />
      <Portfolioview source="3" path="Brochure" width={300} height={300} />
      <Portfolioview source="4" path="Brochure" width={300} height={300} />
      <Portfolioview source="5" path="Brochure" width={300} height={300} />
      <Portfolioview source="6" path="Brochure" width={300} height={300} />
      <Portfolioview source="7" path="Brochure" width={300} height={300} />
      <Portfolioview source="8" path="Brochure" width={300} height={300} />
      <Portfolioview source="9" path="Brochure" width={300} height={300} />
    </div>
  );
};

export default Brochuresection;
