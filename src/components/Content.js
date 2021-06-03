import Filters from './Filters'
import Sorts from './Sorts'
import Results from './Results'


export default function Content () {
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