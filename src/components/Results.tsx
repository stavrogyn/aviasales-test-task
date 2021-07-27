import { useSelector } from "react-redux";

import { Ticket } from "../components/Ticket/Ticket.container";
import { TicketInterface } from "../state/state.types";
import { getDisplayedTickets} from '../state/selectors';

const EmptyResultsStub = () => {
  return (
    <div className="results-stub">
      <h2>Билетов — нет.</h2>
      <p>
        Попробуй запустить поиск кликом по логотипу, или, если результаты поиска
        уже есть, расслабить фильтры.
      </p>
    </div>
  );
};

export const Results = () => {
  const ticketsData = useSelector(getDisplayedTickets);
  const ticketsToDisplay = ticketsData.slice(0, 5)
    .map((ticketData: TicketInterface, i) => (
      <Ticket {...ticketData} key={i} />
  ));

  return (
    <div className="results">
      {ticketsToDisplay.length === 0 ? <EmptyResultsStub /> : ticketsToDisplay}
    </div>
  );
};

