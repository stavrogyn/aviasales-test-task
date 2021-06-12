const initialState = {
    search: {
        allTickets: [],
        ticketsToDisplay: []
    },
    sort: 'cheapest',
    filters: {
        transfersAmount: {
            0: false,
            1: true,
            2: true,
            3: false
        }
    }
}

export default initialState