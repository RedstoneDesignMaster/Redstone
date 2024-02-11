import React from "react";
import Portfolioview from "./Portfolioview";
const Stationerysection = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      id="stationery"
    >
      <Portfolioview source="1" path="Stationery" width={300} height={300} />
      <Portfolioview source="2" path="Stationery" width={300} height={300} />
      <Portfolioview source="3" path="Stationery" width={300} height={300} />
      <Portfolioview source="4" path="Stationery" width={300} height={300} />
      <Portfolioview source="5" path="Stationery" width={300} height={300} />
      <Portfolioview source="6" path="Stationery" width={300} height={300} />
      <Portfolioview source="7" path="Stationery" width={300} height={300} />
      <Portfolioview source="8" path="Stationery" width={300} height={300} />
      <Portfolioview source="9" path="Stationery" width={300} height={300} />
    </div>
  );
};

export default Stationerysection;
