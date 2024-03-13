import React from "react";
import Portfolioview from "./Portfolioview";
const Stationerysection = () => {
  return (
    <div className="grid  grid-cols-2 sm:grid-cols-3 gap-2" id="stationery">
      <Portfolioview source="1" path="Stationery" width={400} height={400} />
      <Portfolioview source="2" path="Stationery" width={400} height={400} />
      <Portfolioview source="3" path="Stationery" width={400} height={400} />
      <Portfolioview source="4" path="Stationery" width={400} height={400} />
      <Portfolioview source="5" path="Stationery" width={400} height={400} />
      <Portfolioview source="6" path="Stationery" width={400} height={400} />
      <Portfolioview source="7" path="Stationery" width={400} height={400} />
      <Portfolioview source="8" path="Stationery" width={400} height={400} />
      <Portfolioview source="9" path="Stationery" width={400} height={400} />
    </div>
  );
};

export default Stationerysection;
