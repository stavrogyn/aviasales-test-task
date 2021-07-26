export default interface stateInterface {
  search: {
    allTickets: TicketsInterface;
    ticketsToDisplay: TicketsInterface;
  };
  sort: SortType;
  filters: FiltersType;
}

export type FiltersType = {
  transfersAmount: TransfersAmountInterface;
};

export type SortType = "CHEAPEST" | "FASTEST" | "OPTIMAL";

export type TransferNumberType = 1 | 2 | 3 | 4 | 5 | 6;
export interface TransfersAmountInterface {
  1?: boolean;
  2?: boolean;
  3?: boolean;
  4?: boolean;
  5?: boolean;
  6?: boolean;
}

export type TicketsInterface = TicketInterface[];

export interface TicketInterface {
  price: number;
  carrier: string;
  segments: SegmentInterface[];
}

export interface SegmentInterface {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}
