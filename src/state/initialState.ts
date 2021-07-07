import stateInterface from './state.type'

const initialState: stateInterface = {
    search: {
        allTickets: [],
        ticketsToDisplay: []
    },
    sort: 'CHEAPEST',
    filters: {
        transfersAmount: {
        }
    }
}

export default initialState