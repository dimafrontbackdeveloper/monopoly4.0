export interface CurrencyState {
  ethToUsd: null | number;
  isLoading: boolean;
  error: string;
  count: number;
}

export interface IFetchCurrenciesPayload {
  from: string;
  to: string;
}
