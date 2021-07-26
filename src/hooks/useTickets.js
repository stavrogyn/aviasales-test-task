import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Ticket from '../components/Ticket/TicketContainer'


export default function useTickets () {

    const turnTicketsDataIntoFirstFiveTicketsComponents = ticketsData => {
      return ticketsData.slice(0, 5).map((ticketData, id) => <Ticket {...ticketData} key={id} />)
    }
  
    const ticketsData = useSelector(state => state.search.ticketsToDisplay);
    const [ticketsToDisplay, setTicketsToDisplay] = useState(turnTicketsDataIntoFirstFiveTicketsComponents(ticketsData))
  
    useEffect(() => {
      const newTicketsToDisplay = turnTicketsDataIntoFirstFiveTicketsComponents(ticketsData)
      return setTicketsToDisplay(newTicketsToDisplay)
    }, [ticketsData]);
  
    return ticketsToDisplay
    
  }