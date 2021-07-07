import { TicketsInterface } from '../state/state.type'
import { TransfersAmountInterface } from '../state/state.type'

type TransferNumberType = 1 | 2 | 3 | 4 | 5 | 6;


export default function filterTickets (tickets: TicketsInterface, transfersAmountState: TransfersAmountInterface) {
    return tickets.filter(t => t.segments.some(s => transfersAmountState[s.stops.length as TransferNumberType] === true))
}