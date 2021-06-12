import Ticket from './Ticket/Ticket'
import { useSelector } from 'react-redux';

export default function Results () {
    const ticketsData = useSelector(state => state.search.ticketsToDisplay);
    const tickets = ticketsData.slice(0, 5).map((ticketData, id) => <Ticket {...ticketData} key={id} />)

    return (
        <div className="results">
          {tickets}
        </div>
    );
}