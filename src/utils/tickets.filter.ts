import { Tickets, TransfersAmount, TransferNumber } from "../state/state.types";


export const filterTickets = (
  tickets: Tickets,
  transfersAmountState: TransfersAmount
) => {
  return tickets.filter((t) =>
    t.segments.some(
      (segment) => transfersAmountState[segment.stops.length as TransferNumber] === true
    )
  );
}
