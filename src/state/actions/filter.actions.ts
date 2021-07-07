import {
  FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
  FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
  FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
  FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK,
  FILTERS_TOTAL_TRANSFERS_AMOUNT_WAS_CHANGED,
  REFRESH_TRANSFERS_AMOUNT_STATE,
} from "../constants/filter.constants";
import { TransfersAmountInterface } from "../state.type";

const checkTransfersAmountFilter = (transferNumber: number) => ({
  type: FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
  transferNumber,
});
const uncheckTransfersAmountFilter = (transferNumber: number) => ({
  type: FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
  transferNumber,
});
const checkAllTransfersAmountFilter = () => ({
  type: FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
});
const uncheckAllTransfersAmountFilter = () => ({
  type: FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK,
});
const changeTotalAmountOfTransfersAmountFilter = (
  newTransfers: TransfersAmountInterface
) => ({ type: FILTERS_TOTAL_TRANSFERS_AMOUNT_WAS_CHANGED, newTransfers });
const refreshFilterState = () => ({ type: REFRESH_TRANSFERS_AMOUNT_STATE });

export {
  checkTransfersAmountFilter,
  uncheckTransfersAmountFilter,
  checkAllTransfersAmountFilter,
  uncheckAllTransfersAmountFilter,
  changeTotalAmountOfTransfersAmountFilter,
  refreshFilterState,
};
