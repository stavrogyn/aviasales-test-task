import AppState from "./state.types";

const initialState: AppState = {
  search: {
    allTickets: [],
    ticketsToDisplay: [],
  },
  sort: "CHEAPEST",
  filters: {
    transfersAmount: {},
  },
};

export default initialState;
