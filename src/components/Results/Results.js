import useTickets from '../../hooks/useTickets'
import ResultsStub from './ResultsStub'

export default function Results () {
    let ticketsToDisplay = useTickets();
    return (
        <div className="results">
          {ticketsToDisplay.length === 0 ? <ResultsStub /> : ticketsToDisplay}
        </div>
    );
}