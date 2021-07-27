import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Ticket from "../components/Ticket/Ticket.container";
import AppState, {
  Tickets,
  TicketInterface,
} from "../state/state.types";

type mapTicketDataToFiveTicketComponentsType = (
  ticketsData: Tickets
) => JSX.Element[];

const useTickets: () => JSX.Element[] = () => {
  const mapTicketDataToFiveTicketComponents: mapTicketDataToFiveTicketComponentsType =
    (ticketsData) => {
      const firstFiveTickets = ticketsData
        .slice(0, 5)
        .map((ticketData: TicketInterface, i) => (
          <Ticket {...ticketData} key={i} />
        ));
      return firstFiveTickets;
    };

  const ticketsData = useSelector(
    (state: AppState) => state.search.ticketsToDisplay
  );
  const [ticketsToDisplay, setTicketsToDisplay] = useState(
    mapTicketDataToFiveTicketComponents(ticketsData)
  );

  useEffect(() => {
    const newTicketsToDisplay =
      mapTicketDataToFiveTicketComponents(ticketsData);
    return setTicketsToDisplay(newTicketsToDisplay);
  }, [ticketsData]);

  return ticketsToDisplay;
};

export default useTickets;
