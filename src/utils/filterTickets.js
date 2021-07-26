export default function filterTickets (tickets, filter) {
    return tickets.filter(t => t.segments.some(s => filter[s.stops.length] === true))
}