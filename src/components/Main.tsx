import { Filters } from "./Filters/Filters.container";
import { Sorts } from "./Sorts";
import { Results } from "./Results";

export const Main = () => {
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

