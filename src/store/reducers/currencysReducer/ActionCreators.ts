import { AppDispatch } from '../../store';
import axios from 'axios';
import { currencySlice } from '.';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchCurrenciesPayload } from './Interfaces';

export const fetchCurrencies = createAsyncThunk(
  'user/fetchAll',
  async (payload: IFetchCurrenciesPayload, thunkAPI) => {
    try {
      const responce = await axios(
        `https://min-api.cryptocompare.com/data/price?fsym=${payload.from}&tsyms=${payload.to}`,
      );
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  },
);

export function name() {}
