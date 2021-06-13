import useTickets from '../hooks/useTickets'

export default function Results () {
    let ticketsToDisplay = useTickets();
    return (
        <div className="results">
          {ticketsToDisplay}
        </div>
    );
}