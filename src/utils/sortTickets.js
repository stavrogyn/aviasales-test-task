import { CHEAPEST, FASTEST, OPTIMAL } from '../state/constants/sort.constants'

export default function sortTickets (tickets, sort) {
    switch(sort) {
        case CHEAPEST:
            return tickets.sort((a, b) => a.price - b.price)
        case FASTEST:
            return tickets.sort((a, b) => {
                const aSumDuration = a.segments.reduce((acc, s) => +s.duration + acc, 0);
                const bSumDuration = b.segments.reduce((acc, s) => +s.duration + acc, 0);
                return aSumDuration - bSumDuration
            })
        case OPTIMAL:
            return tickets.sort((a, b) => b.price - a.price)
        default:
            return tickets
    }
}