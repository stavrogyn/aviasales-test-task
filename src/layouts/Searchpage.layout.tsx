import { Filters } from "./Filters.layout";
import { Sorts } from "../containers/Sorts.container";
import { Results } from "../containers/Results.container";

export const Searchpage = () => {
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

