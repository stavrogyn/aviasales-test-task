import { Tickets } from "../state/state.types";
import { TransfersAmount } from "../state/state.types";

type TransferNumberType = 1 | 2 | 3 | 4 | 5 | 6;

export const filterTickets = (
  tickets: Tickets,
  transfersAmountState: TransfersAmount
) => {
  return tickets.filter((t) =>
    t.segments.some(
      (s) => transfersAmountState[s.stops.length as TransferNumberType] === true
    )
  );
}
