import useTickets from '../../hooks/useTickets'
import EmptyResultsStub from './EmptyResultsStub'

export default function Results () {
    let ticketsToDisplay = useTickets();
    return (
        <div className="results">
          {ticketsToDisplay.length === 0 ? <EmptyResultsStub /> : ticketsToDisplay}
        </div>
    );
}