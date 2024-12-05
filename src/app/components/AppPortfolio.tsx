import React from "react";
import Portfolioview from "./Portfolioview";
const AppPortfolio = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-2 pb-8">
      <Portfolioview source="1" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="2" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="3" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="4" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="5" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="6" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="7" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="8" path="Mobile-app" width={400} height={300} />
      <Portfolioview source="9" path="Mobile-app" width={400} height={300} />
    </div>
  );
};

export default AppPortfolio;
