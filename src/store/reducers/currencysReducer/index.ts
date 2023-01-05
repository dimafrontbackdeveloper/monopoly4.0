import { fetchCurrencies } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyState, IFetchCurrenciesPayload } from './Interfaces';

const initialState: CurrencyState = {
  ethToUsd: null,
  isLoading: false,
  error: '',
  count: 0,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    // setWalletAddress: (state, action: PayloadAction<string>) => {
    //   state.walletAddress = action.payload;
    // },
  }, // аналогично конструкции switch case
  extraReducers: {
    [fetchCurrencies.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.ethToUsd = action.payload.USD;
      state.isLoading = false;
      state.error = '';
      // state.users = action.payload;
    },
    [fetchCurrencies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrencies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default currencySlice.reducer;
