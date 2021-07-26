import React from "react";
import Filters from "./Filters/Filters.container";
import Sorts from "./Sorts";
import Results from "./Results";

const Main: React.FC = () => {
  return (
    <div className="content">
      <Filters />
      <div className="results-display-screen">
        <Sorts />
        <Results />
      </div>
    </div>
  );
};

export default Main;
