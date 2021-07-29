import { useSelector } from "react-redux";
import { take } from 'lodash/fp';

import { Ticket } from "./Ticket.container";
import { Ticket as TicketType } from "../state/state.types";
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
  const tickets = useSelector(getDisplayedTickets);
  const ticketsToDisplay = take(5, tickets)
    .map((ticketData: TicketType, i) => (
      <Ticket {...ticketData} key={i} />
  ));

  return (
    <div className="results">
      {ticketsToDisplay.length === 0 ? <EmptyResultsStub /> : ticketsToDisplay}
    </div>
  );
};

