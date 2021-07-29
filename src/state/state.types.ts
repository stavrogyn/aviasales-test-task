export default interface AppState {
  search: {
    allTickets: Tickets;
    ticketsToDisplay: Tickets;
  };
  sort: SortType;
  filters: Filters;
}

export type Filters = {
  transfersAmount: TransfersAmount;
};

export type SortType = "CHEAPEST" | "FASTEST" | "OPTIMAL";

export type TransferNumber = 1 | 2 | 3 | 4 | 5 | 6;

export interface TransfersAmount {
  1?: boolean;
  2?: boolean;
  3?: boolean;
  4?: boolean;
  5?: boolean;
  6?: boolean;
}

export type Tickets = Ticket[];

export interface Ticket {
  price: number;
  carrier: string;
  segments: Segment[];
}

export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}
