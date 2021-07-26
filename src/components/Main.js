import Filters from './Filters/FiltersContainer'
import Sorts from './Sorts'
import Results from './Results/Results'


export default function Main () {
    return (
        <div className="content">
          <Filters />
          <div className="results-display-screen">
            <Sorts />
            <Results />
          </div>
        </div>
    );
}